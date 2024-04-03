import { createTheme } from "@mui/material";
import React from "react";
import { ThemeProvider } from "styled-components";
import { ColorModeContext } from "./context/ColorMode";
import Layout from "./Layout";




export default function Theme() {
    const [mode, setMode] = React.useState('light');
    console.log(mode);

    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
    console.log(colorMode);

    
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
    );
  

    console.log(theme)
    
  
    const themex = createTheme({
      palette: {
        nayablue: {
          main: '#00ffff',
          light: '#E9DB5D',
          dark: '#A29415',
          contrastText: '#242105',
        },
      },
    });
  
  
    return (
      <ColorModeContext.Provider value={ [mode, setMode]}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }