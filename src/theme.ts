import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007661",
    },
    secondary: {
      main: "#f4a62e",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#2a3b46",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});
