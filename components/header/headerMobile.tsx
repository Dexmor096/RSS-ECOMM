import NextLink from "next/link";
import Image from "next/image";
import logoSVG from "../../public/assets/icons/logo.svg";
import cartSVG from "../../public/assets/icons/cart.svg";
import DrawerComp from "./drawer";
import { Stack, Link, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const IconSX = {
  transition: "all 0.25s ease",
  padding: "5px",
  borderRadius: "5px",
  "&:hover": { backgroundColor: "rgba(211, 211, 211, 0.15)" },
};

export default function HeaderMobile() {
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
        <DrawerComp />
        <Link href="/" component={NextLink}>
          <Image src={logoSVG} alt="logo" />
        </Link>
        <Stack
          direction="row"
          spacing={{ xs: 1, md: 3, xl: 4 }}
          alignItems="center"
        >
          <IconButton>
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
