import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/auth/registration">Registration Page </Link>
      <Link href="/auth/login">Login Page</Link>
    </header>
  );
}
