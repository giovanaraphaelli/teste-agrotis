import { Stack, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={4} alignItems={"center"}>
        <Typography color="textPrimary">Agrotis</Typography>
      </Stack>
    </ThemeProvider>
  );
}
