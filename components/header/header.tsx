"use client";
import HeaderTablet from "./headerTablet";
import HeaderDesktop from "./headerDesktop";
import {
  AppBar,
  Toolbar,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Header() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(17, 17, 17, 0.9)",
      }}
    >
      <Toolbar disableGutters={true}>
        <Container maxWidth="xl">
          {isTablet ? <HeaderTablet /> : <HeaderDesktop />}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
