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
      default: "#eff3f3",
      paper: "#ffffff",
    },
    text: {
      primary: "#2a3b46",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          padding: 0,
          border: 0,
        },
        img: {
          maxWidth: "100%",
          height: "auto",
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: "#ffffff",
          },
          "&.Mui-focused": {
            backgroundColor: "#ffffff",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiSelect-select": {
            padding: "12px",
          },
        },
      },
    },
  },
});
