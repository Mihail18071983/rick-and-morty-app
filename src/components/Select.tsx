import React from 'react';
import { Box } from "@mui/material";
import FirstSelectMenu from './FirstSelectMenu';
import CharacterForm from './CharacterForm';



export default function Select() {
  return (
    <Box>
      <FirstSelectMenu />
      <CharacterForm/>
    </Box>
  );
}
