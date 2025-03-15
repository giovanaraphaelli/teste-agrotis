import { Box } from "@mui/material";
import logoAgrotis from "../../assets/logo-agrotis.svg";

export function Header() {
  return (
    <Box
      component="header"
      height={40}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="0 1px 3px rgba(0, 0, 0, .26)"
      zIndex={1}
      bgcolor="background.paper"
    >
      <img src={logoAgrotis} alt="Agrotis" width={75} />
    </Box>
  );
}
