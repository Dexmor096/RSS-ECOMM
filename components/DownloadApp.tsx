"use client";

import Image from "next/image";
import { Button, Container, Stack } from "@mui/material";
import bikeImg from "../public/assets/images/picture-bg.jpg";
import mobileImg from "../public/assets/images/mobile.png";
import ButtonUi from "./UI/ButtonUi";
import SectionTitle from "./SectionTitle";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { buttonDownSX } from "./stylesSX";

function DownloadApp() {
  return (
    <Stack
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url(${bikeImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="xl">
        <ButtonUi
          color="rgba(255, 255, 255, 0.60)"
          text="создать аккаунт"
          border="border: 1px solid rgba(255, 255, 255, 0.60)"
          margin="50px 0 0 auto"
        />
        <Stack
          direction="row"
          alignItems="flex-start"
          mt="140px"
          justifyContent="space-between"
          mb="-27px"
        >
          <Stack mr={15}>
            <SectionTitle
              color="#FFF"
              title="Скачай приложение и ощути удовльствие от поездок"
              width={665}
            />
            <Stack direction="row" gap={4} mt={4.5}>
              <Button variant="contained" sx={buttonDownSX}>
                <AppleIcon />
                <p>Скачать в apple store</p>
              </Button>
              <Button variant="contained" sx={buttonDownSX}>
                <GoogleIcon />
                <p>Скачать в google play</p>
              </Button>
            </Stack>
          </Stack>
          <Image
            src={mobileImg.src}
            alt="mobile app"
            width={306}
            height={520}
          />
        </Stack>
      </Container>
    </Stack>
  );
}

export default DownloadApp;
