import { Container, Stack } from "@mui/material";
import bikeImg from "../public/assets/images/picture-bg.jpg";
import mobileImg from "../public/assets/images/mobile.png";
import ButtonUi from "./UI/ButtonUi";
import SectionTitle from "./SectionTitle";

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
        <Stack direction="row" alignItems="flex-start" mt="140px">
          <Stack mr={145}>
            <SectionTitle
              color="#FFF"
              title="Скачай приложение и ощути удовльствие от поездок"
              width={665}
            />
            <Stack direction="row" gap={4}>
              <ButtonUi
                width="300px"
                text="Скачать в apple store"
                color="#000"
                margin="35px 0 162px"
                background="#fff"
              />
              <ButtonUi
                width="300px"
                text="Скачать в google play"
                color="#000"
                margin="35px 0 162px"
                background="#fff"
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              background: `url(${mobileImg.src})`,
              width: "306px",
              height: "520px",
              boxShadow: "10px 8px 20px 0px rgba(255, 255, 255, 0.25",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default DownloadApp;
