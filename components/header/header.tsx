import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import Search from "components/search/search";
import logoSVG from "../../public/assets/icons/logo.svg";
import cartSVG from "../../public/assets/icons/cart.svg";
import profileSVG from "../../public/assets/icons/profile.svg";
import wishlistSVG from "../../public/assets/icons/wishlist.svg";
import { AppBar, Toolbar, Container, Stack } from "@mui/material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <AppBar position="static" color="inherit" className={styles.header}>
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
              <Link href="#">About us</Link>
              <Link href="#">Contacts</Link>
            </Stack>
            <Stack direction="row" spacing={4}>
              <Link href="/auth/login">
                <Image src={profileSVG} alt="button entrie" />
              </Link>
              <Link href="#">
                <Image src={wishlistSVG} alt="button wishlist" />
              </Link>
              <Link href="#">
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
            <Link href="#">Sale</Link>
            <Link href="#">Mountain</Link>
            <Link href="#">Road</Link>
            <Link href="#">Active</Link>
            <Link href="#">Kids</Link>
            <Link href="#">city</Link>
            <Link href="#">Accessories</Link>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
