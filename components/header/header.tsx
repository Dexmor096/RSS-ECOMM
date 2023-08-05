import { ReactElement } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

const Header = (): ReactElement => {
  return (
    <header>
      <Link href="/auth/registration">Registration Page </Link>
      <Link href="/auth/login">Login Page</Link>
      <Button href="/auth/">Authorization</Button>
    </header>
  );
};

export default Header;
