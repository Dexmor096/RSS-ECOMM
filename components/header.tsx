import Image from "next/image";
import Search from "./search";
import logoSVG from "../public/assets/icons/logo.svg";
import cartSVG from "../public/assets/icons/cart.svg";
import profileSVG from "../public/assets/icons/profile.svg";
import wishlistSVG from "../public/assets/icons/wishlist.svg";
import { AppBar, Toolbar, Container, Stack, Link } from "@mui/material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

// header styles

// @font-face {
//   font-family: 'Helvetica';
//   src: url('../../public/assets/fonts/helvetica.ttf');
//   font-weight: 400;
// }

// .header {
//   font-family: Helvetica, sans-serif;
//   background: rgba(17, 17, 17, 0.9);
//   color: #fff;
// }

// a:hover::before {
//   transform-origin: left;
//   transform: scaleX(1);
// }

const headerLinkSX = {
  color: "inherit",
  transition: "all 0.25s ease",
  textDecoration: "none",
  borderBottom: "2px solid transparent ",
  "&:hover": { borderBottom: "2px solid #006AD5", transform: "scaleX(1.05)" },
};

const IconSX = {
  transition: "all 0.25s ease",
  padding: "5px",
  borderRadius: "5px",
  "&:hover": { backgroundColor: "rgba(211, 211, 211, 0.15)" },
};

export default function Header() {
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
            <Link href="/">
              <Image src={logoSVG} alt="logo" />
            </Link>
            <Search />

            <Stack className={montserrat.className} direction="row" spacing={7}>
              <Link href="#" sx={headerLinkSX}>
                About us
              </Link>
              <Link href="#" sx={headerLinkSX}>
                Contacts
              </Link>
            </Stack>
            <Stack direction="row" spacing={4}>
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

          <Stack
            padding="22px 0"
            textTransform="uppercase"
            direction="row"
            display="flex"
            justifyContent="space-evenly"
            paddingBottom="20px"
          >
            <Link href="#" sx={headerLinkSX}>
              Sale
            </Link>
            <Link href="#" sx={headerLinkSX}>
              Mountain
            </Link>
            <Link href="#" sx={headerLinkSX}>
              Road
            </Link>
            <Link href="#" sx={headerLinkSX}>
              Active
            </Link>
            <Link href="#" sx={headerLinkSX}>
              Kids
            </Link>
            <Link href="#" sx={headerLinkSX}>
              city
            </Link>
            <Link href="#" sx={headerLinkSX}>
              Accessories
            </Link>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
