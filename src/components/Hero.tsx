import React from "react";
import styled from "@emotion/styled";
import { useTheme, Theme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme<Theme>();
  return (
      <SectionHero theme={theme}>
          <MainTitle theme={theme}>The Rick and Morty API</MainTitle>
      </SectionHero>
  );
}

const MainTitle = styled.h1<{ theme: Theme }>`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  font-family: Roboto;
  font-size: 101.25px;
  font-weight: 900;
  line-height: 1.1;
  margin: 0;
`;

const SectionHero = styled.section`
  padding-top: 115px;
  padding-bottom: 120px;
`;
