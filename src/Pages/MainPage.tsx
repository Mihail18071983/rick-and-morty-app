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

  const handlePageClick = (e: { selected: number }) => {
    setParams({ page: (e.selected + 1).toString() });
  };

  // useEffect(() => {
  //   const fetchCharacters = async (page:number) => {
  //     try {
  //       const { characters, pages } = await getAllCharacters(page);
  //       console.log("characters", characters);
  //       console.log("total", totalPages);
  //       setTotalPages(pages);
  //       setCaracters(characters);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchCharacters(currentPage);
  // }, [currentPage, totalPages]);

  //  useEffect(() => {
  //       const getCharactersByIds = async () => {
  //           try {
  //             const characters = await fetchCharactersByIds(currentPage, perPage, totalCharacters);
  //             console.log("characters", characters);
  //               setCharacters(characters)
  //           } catch (error) {
  //               console.error('Error fetching characters:', error)
  //           }
  //       }

  //    getCharactersByIds();
  //   }, [currentPage])

  const ids = generateCharacterIds(currentPage, perPage, totalCharacters);
  console.log("ids", ids);
  const { loading, error, data } = useQuery(getCharactersByIds, { variables: ids });
  console.log("data", data);

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
