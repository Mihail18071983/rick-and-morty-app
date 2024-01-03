import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import Pagination from "../components/Pagination";
import styled from "@emotion/styled";
import { useTheme, Theme } from "@mui/material/styles";
import { getAllCharacters } from "../shared/api/service";
import CardList from "../components/CardList";
import { Button, Box } from "@mui/material";
import Select from "../components/Select";

export default function MainPage() {
  const theme = useTheme<Theme>();
  const [characters, setCaracters] = useState<any[]>([]);
  const [params, setParams] = useSearchParams();
  const [totalItems, setTotalItems] = useState(0);
  const PER_PAGE = 20;

  const currentPage = Number(params.get('page'))
    ? Number(params.get('page'))
    : 1;
  console.log("current page", currentPage);

   const handlePageClick = (e: { selected: number }) => {
    setParams({ page: (e.selected + 1).toString() });
  };

  useEffect(() => {
    const fetchCharacters = async (page:number) => {
      try {
        const { characters, total } = await getAllCharacters(page);
        console.log("characters", characters);
        console.log("total", total);
        setTotalItems(total);
        setCaracters(characters);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCharacters(currentPage);
  }, [currentPage]);

 

  const pageCount = Math.ceil(totalItems / PER_PAGE);

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
        currentPage={currentPage}
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
