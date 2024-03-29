import React, { createContext, useContext, useMemo, useState } from "react";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { grey, teal, green } from "@mui/material/colors";

interface TColorModeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ColorModeContext = createContext<TColorModeContext>({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider = ({ children }: any) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
      mode,
    }),
    [mode]
  );

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...green,
        ...(mode === "dark"
          ? {
              main: teal[700],
            }
          : { main: green[800] }),
      },
      ...(mode === "dark"
        ? {
            background: {
              default: grey[900],
              paper: grey[800],
            },
          }
        : {
            background: {
              default: green[300],
              paper: green[200],
            },
          }),
      secondary: {
        ...(mode === "dark"
          ? {
              main: teal[200],
            }
          : {
              main: green[50],
            }),
      },
      text: {
        ...(mode === "dark"
          ? {
              primary: teal[700],
              secondary: teal[700],
            }
          : {
              primary: grey[700],
              secondary: grey[700],
            }),
      },
    },
  });
  console.log(mode);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  return useContext(ColorModeContext);
};
