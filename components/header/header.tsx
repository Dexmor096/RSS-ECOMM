import { ReactElement } from "react";
import Link from "next/link";

const Header = (): ReactElement => {
  return (
    <header>
      <Link href="/auth/registration">Registration Page </Link>
      <Link href="/auth/login">Login Page</Link>
    </header>
  );
};

export default Header;
