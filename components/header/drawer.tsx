import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Stack,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import profileSVG from "../../public/assets/icons/profile.svg";
import wishlistSVG from "../../public/assets/icons/wishlist.svg";
import { IconSX } from "components/stylesSX";

const pages = [
  "Sale",
  "Mountain",
  "Road",
  "Active",
  "Kids",
  "city",
  "Accessories",
  "About us",
  "Contacts",
];

export default function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{
          color: "#fff",
          padding: "5px",
          "& svg": {
            height: "35px",
            width: "35px",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="left"
        sx={{
          "& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "#141618",
          },
        }}
      >
        <Box width="280px">
          <List>
            <Stack
              direction="row"
              spacing={{ xs: 1, md: 3 }}
              alignItems="center"
              justifyContent="space-evenly"
              my="20px"
            >
              <Link
                rel="preload"
                href="/auth/login"
                sx={IconSX}
                component={NextLink}
                display="flex"
                alignItems="center"
              >
                <Image src={profileSVG} alt="button entrie" />
                <Typography
                  sx={{
                    color: "#fff",
                    border: "none",
                    textTransform: "uppercase",
                    ml: "10px",
                  }}
                >
                  Войти
                </Typography>
              </Link>
              <Link href="/" sx={IconSX} component={NextLink} rel="preload">
                <Image src={wishlistSVG} alt="button wishlist" />
              </Link>
            </Stack>
            {pages.map((page, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "#fff",
                      "& span": {
                        fontWeight: "700",
                        letterSpacing: "0.8px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    {page.toUpperCase()}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
