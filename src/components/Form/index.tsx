import {
  AppBar,
  Box,
  Card,
  CardContent,
  Toolbar,
  Typography,
} from "@mui/material";

export function Form() {
  return (
    <Box maxWidth="md" margin="auto">
      <Card variant="outlined">
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <Typography variant="h1" fontSize={18}>
              Teste front-end
            </Typography>
          </Toolbar>
        </AppBar>
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            AGROTIS
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
