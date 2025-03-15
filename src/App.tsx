import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box height="100vh" display="flex" flexDirection="column">
          <Header />
          <Box flex={1} p="2rem 1rem" overflow="auto">
            <Form />
          </Box>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
