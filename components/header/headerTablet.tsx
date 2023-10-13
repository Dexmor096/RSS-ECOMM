import NextLink from "next/link";
import Image from "next/image";
import Search from "components/search";
import logoSVG from "../../public/assets/icons/logo.svg";
import cartSVG from "../../public/assets/icons/cart.svg";
import profileSVG from "../../public/assets/icons/profile.svg";
import wishlistSVG from "../../public/assets/icons/wishlist.svg";
import DrawerComp from "./drawer";
import { Stack, Link, useMediaQuery, useTheme } from "@mui/material";
import HeaderMobile from "./headerMobile";
import { IconSX } from "components/stylesSX";
import { stackSX } from "./headerSX";
import { getStringFromLS } from "../../helpers/getStringLocalStorage";
import PersonIcon from "@mui/icons-material/Person";

export default function HeaderTablet() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const session = getStringFromLS("refresh-token");

  if (isMobile) {
    return <HeaderMobile />;
  }
  return (
    <>
      <Stack sx={stackSX} direction="row">
        <Link href="/" component={NextLink}>
          <Image src={logoSVG} alt="logo" />
        </Link>
        <Search />

        <Stack
          direction="row"
          spacing={{ xs: 1, md: 3, xl: 4 }}
          alignItems="center"
        >
          {session.length > 2 ? (
            <Link href="/profile" sx={IconSX}>
              <PersonIcon sx={{ path: { color: "#fff" } }} />
            </Link>
          ) : (
            <Link href="/auth/login" sx={IconSX}>
              <Image src={profileSVG} alt="button login or register" />
            </Link>
          )}
          <Link href="/wishlist" sx={IconSX} component={NextLink}>
            <Image src={wishlistSVG} alt="button wishlist" />
          </Link>
          <Link href="/cart" sx={IconSX} component={NextLink}>
            <Image src={cartSVG} alt="button cart" />
          </Link>
          <DrawerComp />
        </Stack>
      </Stack>
    </>
  );
}
