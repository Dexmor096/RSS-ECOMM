import Image from "next/image";
import { Stack, Typography, Container, Paper, Link, Box } from "@mui/material";
import youtube from "../public/assets/footer/youtube.svg";
import vk from "../public/assets/footer/vk.svg";
import facebook from "../public/assets/footer/facebook.svg";
import insta from "../public/assets/footer/insta.svg";
import logoSVG from "../public/assets/icons/logo.svg";
// import styles from "./footer.module.css";
import footerBg from "../public/assets/footer/footer_bg.png";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const helveticaReg = localFont({ src: "../public/assets/fonts/helvetica.ttf" });

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

//footer styles

// .footer {
//   background:
//     linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
//     url("../../public/assets/footer/footer_bg.png"),
//     lightgray 0px -292.703px / 100% 205.473% no-repeat;
//   color: #ffffff;
//   font-family: Helvetica, sans-serif;
//   font-size: 14px;
// }

const footerLinkSX = {
  color: "inherit",
  transition: "all 0.25s ease",
  textDecoration: "none",
  "&:hover": { color: "#006AD5" },
};

const IconSX = {
  transition: "all 0.25s ease",
  padding: "5px",
  borderRadius: "5px",
  "&:hover": { backgroundColor: "rgba(211, 211, 211, 0.15)" },
};

export default function Footer() {
  return (
    <Stack component="footer" direction="column">
      <Box
        className={helveticaReg.className}
        sx={{
          fontSize: "15px",
          color: "#fff",
          fontFamily: "Helvetica",

          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
        url(${footerBg.src}),
        lightgray 0px -292.703px / 100% 205.473% no-repeat`,
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            padding="110px 50px 135px"
          >
            <Stack>
              <Typography
                variant="body1"
                className={montserrat.className}
                textTransform="uppercase"
              >
                SUPPORT
              </Typography>
              <Stack gap="11px" marginTop="30px">
                <Link href="#" sx={footerLinkSX}>
                  Contact Us
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  FAQ
                </Link>
              </Stack>
            </Stack>

            <Stack>
              <Typography
                variant="body1"
                className={montserrat.className}
                textTransform="uppercase"
              >
                About
              </Typography>
              <Stack gap="11px" marginTop="30px">
                <Link href="#" sx={footerLinkSX}>
                  Our Story
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Press
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                className={montserrat.className}
                textTransform="uppercase"
              >
                Mountain
              </Typography>
              <Stack gap="11px" marginTop="30px">
                <Link href="#" sx={footerLinkSX}>
                  Cross Country
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Trail
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Downhill
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Dirt Jump
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Frames
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                className={montserrat.className}
                textTransform="uppercase"
              >
                Road
              </Typography>
              <Stack gap="11px" marginTop="30px">
                <Link href="#" sx={footerLinkSX}>
                  Performance
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Gravel
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Cyclocross
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Triathlon
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Frames
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                className={montserrat.className}
                textTransform="uppercase"
              >
                Active
              </Typography>
              <Stack gap="11px" marginTop="30px">
                <Link href="#" sx={footerLinkSX}>
                  Fitness
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Transport
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Comfort
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                className={montserrat.className}
                textTransform="uppercase"
              >
                Kids
              </Typography>
              <Stack gap="11px" marginTop="30px">
                <Link href="#" sx={footerLinkSX}>
                  Toddler
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Little kids
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Big kids
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                className={montserrat.className}
                textTransform="uppercase"
              >
                City
              </Typography>
              <Stack gap="11px" marginTop="30px">
                <Link href="#" sx={footerLinkSX}>
                  Road
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Mountain
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Active
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                className={montserrat.className}
                textTransform="uppercase"
              >
                Clients
              </Typography>
              <Stack gap="11px" marginTop="30px">
                <Link href="#" sx={footerLinkSX}>
                  About us
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Delivery
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Payment
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  Contacts
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                className={montserrat.className}
                textTransform="uppercase"
              >
                Contacts
              </Typography>
              <Stack gap="11px" marginTop="30px">
                <Link href="#" sx={footerLinkSX}>
                  +7 (495) 829-12-59
                </Link>
                <Link href="#" sx={footerLinkSX}>
                  info@sitename.ru
                </Link>
                <Stack direction="row" spacing={1}>
                  <Link href="#" sx={IconSX}>
                    <Image src={youtube} alt="youtube" />
                  </Link>
                  <Link href="#" sx={IconSX}>
                    <Image src={vk} alt="vk" />
                  </Link>
                  <Link href="#" sx={IconSX}>
                    <Image src={facebook} alt="facebook" />
                  </Link>
                  <Link href="#" sx={IconSX}>
                    <Image src={insta} alt="instagram" />
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            display="flex"
            flexDirection="row"
            padding="0 50px"
            alignItems="center"
            paddingBottom="25px"
          >
            <Link href="/">
              <Image src={logoSVG} alt="logo" />
            </Link>
            <Stack
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              flexGrow="1"
              rowGap="10px"
            >
              <Typography
                sx={{ color: "rgba(255, 255, 255, 0.70)", maxWidth: "320px" }}
              >
                © 2023, Specialized bicycle components, All rights reserved{" "}
              </Typography>
              <Link href="#" sx={footerLinkSX}>
                Public offer
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
