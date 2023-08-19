import footerBg from "../../public/assets/footer/footer_bg.png";
import { createTheme } from "@mui/material";

export const footerLinkSX = {
  color: "inherit",
  transition: "all 0.25s ease",
  textDecoration: "none",
  "&:hover": { color: "#006AD5" },
};

export const LinkTabletSX = {
  color: "inherit",
  textDecoration: "none",
  fontSize: "16px",
};

export const boxImgSX = {
  fontSize: "15px",
  color: "#fff",
  fontFamily: "Helvetica",
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
      url(${footerBg.src}),
      lightgray 0px -292.703px / 100% 205.473% no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const titleCategoriesSX = {
  variant: "body1",
  textTransform: "uppercase",
};

export const themeFooter = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1100,
      xl: 1536,
    },
  },
});
