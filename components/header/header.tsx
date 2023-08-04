import { ReactElement } from "react";
import Link from "next/link";

const Header = (): ReactElement => {
  return (
    <header>
      <Link href="/registration">Registration Page </Link>
      <Link href="/login">Login Page</Link>
    </header>
  );
};

export default Header;
