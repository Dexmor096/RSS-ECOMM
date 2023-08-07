"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function NotFound({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1>Page Not Found!</h1>
      <Link href="/auth/registration">Registration Page </Link>
      <Link href="/auth/login">Login Page</Link>
    </div>
  );
}
