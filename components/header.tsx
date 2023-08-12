"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import Search from "./search";
import logoSVG from "../public/assets/icons/logo.svg";
import cartSVG from "../public/assets/icons/cart.svg";
import profileSVG from "../public/assets/icons/profile.svg";
import wishlistSVG from "../public/assets/icons/wishlist.svg";
import {
  AppBar,
  Toolbar,
  Container,
  Stack,
  Link,
  Tab,
  Tabs,
} from "@mui/material";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const helveticaReg = localFont({ src: "../public/assets/fonts/helvetica.ttf" });

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const headerLinkSX = {
  color: "inherit",
  letterSpacing: "0.84px",
  transition: "all 0.25s ease",
  textDecoration: "none",
  borderBottom: "2px solid transparent",
  "&:hover": { borderBottom: "2px solid #006AD5", transform: "scaleX(1.05)" },
};

const IconSX = {
  transition: "all 0.25s ease",
  padding: "5px",
  borderRadius: "5px",
  "&:hover": { backgroundColor: "rgba(211, 211, 211, 0.15)" },
};

export default function Header() {
  const [value, setValue] = useState();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(17, 17, 17, 0.9)",
        color: "fff",
      }}
    >
      <Toolbar>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            padding="18px 0"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid rgba(255, 255, 255, 0.40)"
          >
            <NextLink href="/">
              <Image src={logoSVG} alt="logo" />
            </NextLink>
            <Search />

            <Tabs>
              <NextLink href="/about-us">
                <Tab
                  sx={headerLinkSX}
                  label="About us"
                  className={montserrat.className}
                />
              </NextLink>
              <NextLink href="/contacts">
                <Tab
                  sx={headerLinkSX}
                  label="Contacts"
                  className={montserrat.className}
                />
              </NextLink>
            </Tabs>

            <Stack direction="row" spacing={{ md: 3, xl: 4 }}>
              <Link href="/auth/login" sx={IconSX}>
                <Image src={profileSVG} alt="button entrie" />
              </Link>
              <Link href="#" sx={IconSX}>
                <Image src={wishlistSVG} alt="button wishlist" />
              </Link>
              <Link href="#" sx={IconSX}>
                <Image src={cartSVG} alt="button cart" />
              </Link>
            </Stack>
          </Stack>

          <Tabs
            value={value}
            onChange={(e, value) => setValue(value)}
            sx={{
              padding: "8px 0",
              textTransform: "uppercase",
              direction: "row",
              display: "flex",
              justifyContent: "space-evenly",
              "& .css-heg063-MuiTabs-flexContainer": {
                justifyContent: "space-evenly",
              },
              "& .css-9589is-MuiButtonBase-root-MuiTab-root": {
                padding: "13px 16px",
                minHeight: "37px",
                minWidth: "70px",
                fontSize: "19px",
              },
            }}
          >
            <Tab
              label="Sale"
              sx={headerLinkSX}
              className={helveticaReg.className}
            />

            <Tab
              label="Mountain"
              sx={headerLinkSX}
              className={helveticaReg.className}
            />

            <Tab
              label="Road"
              sx={headerLinkSX}
              className={helveticaReg.className}
            />

            <Tab
              label="Active"
              sx={headerLinkSX}
              className={helveticaReg.className}
            />

            <Tab
              label="Kids"
              sx={headerLinkSX}
              className={helveticaReg.className}
            />

            <Tab
              label="city"
              sx={headerLinkSX}
              className={helveticaReg.className}
            />

            <Tab
              label="Accessories"
              sx={headerLinkSX}
              className={helveticaReg.className}
            />
          </Tabs>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
