import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#6f42c1",
      /* main: "#262254", "#543884", */
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    }
  }
})