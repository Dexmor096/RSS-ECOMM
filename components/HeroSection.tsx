import { Stack, Typography } from "@mui/material";
import localFont from "next/font/local";
import headerBg from "../public/assets/images/header-bg.png";
import ButtonUi from "./UI/ButtonUi";

const proheroFont = localFont({
  src: "../public/assets/fonts/prohero.ttf",
});

function HeroSection() {
  return (
    <Stack
      component="section"
      direction="column"
      alignItems="center"
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(${headerBg.src}), lightgray 50% / cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        pt="127px"
        variant="h1"
        className={proheroFont.className}
        color="#fff"
        fontSize={55}
        letterSpacing={5.5}
        width={560}
      >
        Ride bikes. Have fun. Feel good.
      </Typography>
      <ButtonUi
        margin="65px 0 285px"
        text="Найди свой велосипед"
        color="#fff"
        border="2px solid #fff"
      />
    </Stack>
  );
}

export default HeroSection;
