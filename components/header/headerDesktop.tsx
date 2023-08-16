import NextLink from "next/link";
import Image from "next/image";
import Search from "../search";
import logoSVG from "../../public/assets/icons/logo.svg";
import cartSVG from "../../public/assets/icons/cart.svg";
import profileSVG from "../../public/assets/icons/profile.svg";
import wishlistSVG from "../../public/assets/icons/wishlist.svg";
import { Stack, Tab, Tabs, Link } from "@mui/material";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import React, { useState } from "react";

const helveticaReg = localFont({
  src: "../../public/assets/fonts/helvetica.ttf",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const headerLinkSX = {
  color: "#fff",
  opacity: "1",
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

const categoriesLinks = [
  "Sale",
  "Mountain",
  "active",
  "Kids",
  "city",
  "Accessories",
];

export default function HeaderDesktop() {
  const [selectedTab, setSelectedTab] = useState(false);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Stack
        direction="row"
        padding="18px 0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid rgba(255, 255, 255, 0.40)"
      >
        <Link href="/" component={NextLink}>
          <Image src={logoSVG} alt="logo" />
        </Link>
        <Search />

        <Tabs value={selectedTab} onChange={handleChange}>
          <Link href="/about-us" component={NextLink}>
            <Tab
              sx={headerLinkSX}
              label="About us"
              className={montserrat.className}
            />
          </Link>
          <Link href="/contacts" component={NextLink}>
            <Tab
              sx={headerLinkSX}
              label="Contacts"
              className={montserrat.className}
            />
          </Link>
        </Tabs>
        <Stack direction="row" spacing={{ md: 2, xl: 4 }}>
          <Link href="/auth/login" sx={IconSX} component={NextLink}>
            <Image src={profileSVG} alt="button entrie" />
          </Link>
          <Link href="/" sx={IconSX} component={NextLink}>
            <Image src={wishlistSVG} alt="button wishlist" />
          </Link>
          <Link href="/" sx={IconSX} component={NextLink}>
            <Image src={cartSVG} alt="button cart" />
          </Link>
        </Stack>
      </Stack>

      <Tabs
        value={selectedTab}
        onChange={handleChange}
        sx={{
          padding: "8px 0",
          textTransform: "uppercase",
          direction: "row",
          display: "flex",
          justifyContent: "space-evenly",
          "& .css-heg063-MuiTabs-flexContainer": {
            justifyContent: "space-evenly",
          },
          "& .css-1751eci-MuiButtonBase-root-MuiTab-root": {
            padding: "13px 16px",
            minHeight: "37px",
            minWidth: "70px",
            fontSize: "19px",
          },
        }}
      >
        {categoriesLinks.map((category, index) => (
          <Link href={`/${category.toLowerCase()}`} key={index}>
            <Tab
              label={category}
              sx={headerLinkSX}
              className={helveticaReg.className}
            />
          </Link>
        ))}
      </Tabs>
    </>
  );
}
