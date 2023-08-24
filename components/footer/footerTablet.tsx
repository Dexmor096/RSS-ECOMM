"use client";
import Image from "next/image";
import NextLink from "next/link";
import {
  Stack,
  Typography,
  Container,
  Link,
  Box,
  useMediaQuery,
} from "@mui/material";
import youtube from "../../public/assets/footer/youtube.svg";
import vk from "../../public/assets/footer/vk.svg";
import facebook from "../../public/assets/footer/facebook.svg";
import insta from "../../public/assets/footer/insta.svg";
import logoSVG from "../../public/assets/icons/logo.svg";
import localFont from "next/font/local";
import { categoriesFooterTablet, categoriesInfoLink } from "../categories";
import { footerLinkSX, LinkTabletSX, boxImgSX, themeFooter } from "./footerSX";
import { IconSX } from "../stylesSX";

const { links } = categoriesInfoLink;
const {
  firstColumn,
  firstColumnHref,
  secondColumn,
  thirdColumn,
  thirdColumnHref,
  fourthColumn,
} = categoriesFooterTablet;

const helveticaReg = localFont({
  src: "../../public/assets/fonts/helvetica.ttf",
});

export default function FooterTablet() {
  const isMobile = useMediaQuery(themeFooter.breakpoints.down("sm"));

  return (
    <Stack component="footer" direction="column">
      <Box className={helveticaReg.className} sx={boxImgSX}>
        <Container maxWidth="lg">
          <Stack direction="row" display="flex" justifyContent="space-between">
            <Stack gap="15px" marginTop="30px">
              {firstColumn.map((category: string, idx: number) => (
                <Link
                  href={`/${firstColumnHref[idx].toLowerCase()}`}
                  sx={LinkTabletSX}
                  component={NextLink}
                  key={idx}
                >
                  {category}
                </Link>
              ))}
            </Stack>
            <Stack gap="15px" marginTop="30px">
              {secondColumn.map((category: string, idx: number) => (
                <Link
                  href={`/${category.toLowerCase()}`}
                  sx={LinkTabletSX}
                  component={NextLink}
                  key={idx}
                >
                  {category}
                </Link>
              ))}
            </Stack>
            <Stack gap="15px" marginTop="30px">
              {thirdColumn.map((category: string, idx: number) => (
                <Link
                  href={`/${thirdColumnHref[idx].toLowerCase()}`}
                  sx={LinkTabletSX}
                  component={NextLink}
                  key={idx}
                >
                  {category}
                </Link>
              ))}
            </Stack>
            {isMobile ? (
              ``
            ) : (
              <Stack gap="15px" marginTop="30px">
                {fourthColumn.map((category: string, idx: number) => (
                  <Link
                    href={`/${links[idx].toLowerCase()}`}
                    sx={LinkTabletSX}
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
            )}
          </Stack>
          <Stack
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            alignItems="center"
            padding="20px 0"
            justifyContent="center"
          >
            <Link href="/" pb={isMobile ? "10px" : "0px"}>
              <Image src={logoSVG} alt="logo" priority width={150} />
            </Link>
            <Stack
              display="flex"
              alignItems="center"
              textAlign="center"
              flexGrow="1"
              rowGap="7px"
            >
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.70)",
                  fontSize: "14px",
                }}
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
