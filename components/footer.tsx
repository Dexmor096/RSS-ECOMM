import Image from "next/image";
import NextLink from "next/link";
import { Stack, Typography, Container, Link, Box } from "@mui/material";
import youtube from "../public/assets/footer/youtube.svg";
import vk from "../public/assets/footer/vk.svg";
import facebook from "../public/assets/footer/facebook.svg";
import insta from "../public/assets/footer/insta.svg";
import logoSVG from "../public/assets/icons/logo.svg";
import localFont from "next/font/local";
import { categoriesFooter } from "./categories";
const {
  support,
  about,
  mountain,
  road,
  active,
  kids,
  city,
  clients,
  contacts,
} = categoriesFooter;
import { footerLinkSX, boxImgSX, titleCategoriesSX } from "./footer/footerSX";
import { IconSX, montserrat } from "./stylesSX";

const helveticaReg = localFont({ src: "../public/assets/fonts/helvetica.ttf" });

export default function Footer() {
  return (
    <Stack component="footer" direction="column">
      <Box className={helveticaReg.className} sx={boxImgSX}>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            padding="110px 50px 135px"
          >
            <Stack>
              <Typography
                sx={titleCategoriesSX}
                className={montserrat.className}
              >
                SUPPORT
              </Typography>
              <Stack gap="11px" marginTop="30px">
                {support.map((category: string, idx: number) => (
                  <Link
                    href="#"
                    sx={footerLinkSX}
                    component={NextLink}
                    key={idx}
                  >
                    {category}
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack>
              <Typography
                sx={titleCategoriesSX}
                className={montserrat.className}
              >
                About
              </Typography>
              <Stack gap="11px" marginTop="30px">
                {about.map((category: string, idx: number) => (
                  <Link
                    href="#"
                    sx={footerLinkSX}
                    component={NextLink}
                    key={idx}
                  >
                    {category}
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack>
              <Typography
                sx={titleCategoriesSX}
                className={montserrat.className}
              >
                Mountain
              </Typography>
              <Stack gap="11px" marginTop="30px">
                {mountain.map((category: string, idx: number) => (
                  <Link
                    href="#"
                    sx={footerLinkSX}
                    component={NextLink}
                    key={idx}
                  >
                    {category}
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack>
              <Typography
                sx={titleCategoriesSX}
                className={montserrat.className}
              >
                Road
              </Typography>
              <Stack gap="11px" marginTop="30px">
                {road.map((category: string, idx: number) => (
                  <Link
                    href="#"
                    sx={footerLinkSX}
                    component={NextLink}
                    key={idx}
                  >
                    {category}
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack>
              <Typography
                sx={titleCategoriesSX}
                className={montserrat.className}
              >
                Active
              </Typography>
              <Stack gap="11px" marginTop="30px">
                {active.map((category: string, idx: number) => (
                  <Link
                    href="#"
                    sx={footerLinkSX}
                    component={NextLink}
                    key={idx}
                  >
                    {category}
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack>
              <Typography
                sx={titleCategoriesSX}
                className={montserrat.className}
              >
                Kids
              </Typography>
              <Stack gap="11px" marginTop="30px">
                {kids.map((category: string, idx: number) => (
                  <Link
                    href="#"
                    sx={footerLinkSX}
                    component={NextLink}
                    key={idx}
                  >
                    {category}
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack>
              <Typography
                sx={titleCategoriesSX}
                className={montserrat.className}
              >
                City
              </Typography>
              <Stack gap="11px" marginTop="30px">
                {city.map((category: string, idx: number) => (
                  <Link
                    href="#"
                    sx={footerLinkSX}
                    component={NextLink}
                    key={idx}
                  >
                    {category}
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack>
              <Typography
                sx={titleCategoriesSX}
                className={montserrat.className}
              >
                Clients
              </Typography>
              <Stack gap="11px" marginTop="30px">
                {clients.map((category: string, idx: number) => (
                  <Link
                    href="#"
                    sx={footerLinkSX}
                    component={NextLink}
                    key={idx}
                  >
                    {category}
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Stack>
              <Typography
                sx={titleCategoriesSX}
                className={montserrat.className}
              >
                Contacts
              </Typography>
              <Stack gap="11px" marginTop="30px">
                {contacts.map((category: string, idx: number) => (
                  <Link
                    href="#"
                    sx={footerLinkSX}
                    component={NextLink}
                    key={idx}
                  >
                    {category}
                  </Link>
                ))}
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
              <Image src={logoSVG} alt="logo" priority />
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
