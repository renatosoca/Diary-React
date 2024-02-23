import { FC, PropsWithChildren, useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { themeMain } from "@/config/theme";

export const ThemeProviderMaterial: FC<PropsWithChildren> = ({ children }) => {
  const theme = useMemo(() => createTheme(themeMain), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};
