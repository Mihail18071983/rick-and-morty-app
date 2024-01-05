import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import styled from "@emotion/styled";
import { useTheme, Theme } from "@mui/material/styles";
import {
  getCharactersByIds,
  generateCharacterIds,
} from "../shared/api/service";
import CardList from "../components/CardList";
import { Button, Box } from "@mui/material";
import Select from "../components/Select";

export default function MainPage() {
  const theme = useTheme<Theme>();
  const [characters, setCharacters] = useState<any[]>([]);
  const [params, setParams] = useSearchParams();
  const totalPages = 138;
  const perPage = 6;
  const totalCharacters = 826;

  const currentPage = Number(params.get("page"))
    ? Number(params.get("page"))
    : 1;
  console.log("current page", currentPage);


  const ids = generateCharacterIds(currentPage, perPage, totalCharacters);
  console.log("ids", ids);
  const {
    loading,
    error,
    data: charactersData,
    refetch,
  } = useQuery(getCharactersByIds, {
    variables: { ids },
  });
  console.log("data", charactersData);

  useEffect(() => {
    if (charactersData) {
      const {charactersByIds}=charactersData;
      setCharacters(charactersByIds);
    }
  }, [charactersData]);

  const handlePageClick = (e: { selected: number }) => {
    setParams({ page: (e.selected + 1).toString() });
    refetch();
  };

  const pageCount = totalPages;

  return (
    <Section theme={theme}>
      <Box sx={{ display: "flex", gap: "160px" }}>
        <RmFilterButton theme={theme} variant="contained">
          remove filter
        </RmFilterButton>
        <Select />
      </Box>
      <CardList characters={characters} />
      <Pagination
        // currentPage={currentPage}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </Section>
  );
}

const RmFilterButton = styled(Button)<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.palette.primary.light};
`;

const Section = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
`;
