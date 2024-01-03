import React from "react";
import AppRoutes from "./AppRoutes";


import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider} from "@mui/material/styles";

import { PaletteColor } from "@mui/material/styles/createPalette";


interface CustomPaletteColor extends PaletteColor {
  mainText: string;
}

function App() {
   const theme = createTheme({
    palette: {
      primary: {
        main: "#202329",
        light: "#FFFFFF",
        dark: " #3C3E44",
        contrastText: "#272B33",
        mainText: "#0000",
      } as CustomPaletteColor,
    },
     breakpoints: {
        values: {
            xs: 0,       // redefine the 'xs' breakpoint value
            sm: 320,     // redefine the 'sm' breakpoint value
            md: 768,     // redefine the 'md' breakpoint value
            lg: 1440,    // redefine the 'lg' breakpoint value
            xl: 1920,    // redefine the 'xl' breakpoint value
        },
    },
  });
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <AppRoutes/>
      </ThemeProvider>
    </>
  );
}

export default App;
