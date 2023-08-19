import NextLink from "next/link";
import Image from "next/image";
import logoSVG from "../../public/assets/icons/logo.svg";
import cartSVG from "../../public/assets/icons/cart.svg";
import DrawerComp from "./drawer";
import { Stack, Link, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconSX } from "components/stylesSX";
import { stackSX } from "./headerSX";

export default function HeaderMobile() {
  return (
    <>
      <Stack sx={stackSX}>
        <DrawerComp />
        <Link href="/" component={NextLink}>
          <Image src={logoSVG} alt="logo" />
        </Link>
        <Stack
          direction="row"
          spacing={{ xs: 1, md: 3, xl: 4 }}
          alignItems="center"
        >
          <IconButton href="#">
            <SearchIcon
              sx={{
                color: "#fff",
                "& svg": {
                  height: "28px",
                  width: "28px",
                },
              }}
            />
          </IconButton>
          <Link href="/" component={NextLink} sx={IconSX}>
            <Image src={cartSVG} alt="button cart" />
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
