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
import youtube from "../../public/assets/footer/youtube.svg";
import vk from "../../public/assets/footer/vk.svg";
import facebook from "../../public/assets/footer/facebook.svg";
import insta from "../../public/assets/footer/insta.svg";
import MenuIcon from "@mui/icons-material/Menu";
import wishlistSVG from "../../public/assets/icons/wishlist.svg";
import { IconSX } from "components/stylesSX";
import { pagesDrawer } from "components/categories";
import { LinkTabletSX } from "components/footer/footerSX";
import {
  categoriesFooterTablet,
  categoriesInfoLink,
} from "components/categories";
import CloseIcon from "@mui/icons-material/Close";

const { links } = categoriesInfoLink;
const { fourthColumn } = categoriesFooterTablet;

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
        <CloseIcon
          onClick={() => setOpenDrawer(!openDrawer)}
          sx={{
            m: "10px 15px 0 auto",
            color: "#fff",
            width: "30px",
            height: "30px",
          }}
        />
        <Box width="280px">
          <List>
            <Stack
              direction="row"
              spacing={{ xs: 1, md: 3 }}
              alignItems="center"
              justifyContent="space-evenly"
              my="15px"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Link href="/auth/login" sx={IconSX} component={NextLink}>
                  <Typography
                    sx={{
                      color: "#fff",
                      border: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    Войти
                  </Typography>
                </Link>
                <Typography color="white">|</Typography>
                <Link
                  href="/auth/registration"
                  sx={IconSX}
                  component={NextLink}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      border: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    Регистрация
                  </Typography>
                </Link>
              </Stack>
              <Link
                href="/wishlist"
                sx={IconSX}
                component={NextLink}
                rel="preload"
              >
                <Image src={wishlistSVG} alt="button wishlist" />
              </Link>
            </Stack>
            {pagesDrawer.map((page, index) => (
              <ListItemButton
                href={`/${page.toLowerCase()}`}
                key={index}
                onClick={() => setOpenDrawer(!openDrawer)}
              >
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
            <Stack
              gap="15px"
              marginTop="25px"
              color="white"
              pl="16px"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
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
          </List>
        </Box>
      </Drawer>
    </>
  );
}
