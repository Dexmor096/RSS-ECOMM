import { Stack, Container, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { Advent_Pro } from "next/font/google";
import ButtonUi from "./UI/ButtonUi";
import electroBike from "../public/assets/images/electric-bike.jpg";

export const advent = Advent_Pro({
  weight: ["300", "500"],
  subsets: ["latin"],
});

function AboutUs() {
  return (
    <Stack component="section">
      <Container maxWidth="xl">
        <SectionTitle
          title="Знакомство с электрическими велосипедами"
          color="#000"
        />
        <Stack direction="row" mt="20px">
          <Stack width="50%" sx={{ background: "#141414", p: "162px 50px 0" }}>
            <Typography
              className={advent.className}
              fontSize={42}
              maxWidth={555}
              lineHeight={1.2}
              color="#E3E3E3"
              fontWeight={300}
            >
              Что такое электрический велосипед?
              <br /> Как далеко я могу проехать? Какой из них подходит мне?
            </Typography>
            <ButtonUi
              width="255px"
              text="читать далее"
              color="#fff"
              border="2px solid #FFF"
              margin="35px 0 162px"
            />
          </Stack>
          <Stack
            sx={{
              width: "50%",
              background: `url(${electroBike.src}), lightgray 50% / cover no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default AboutUs;
