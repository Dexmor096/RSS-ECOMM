import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header/header";
import Container from "@mui/material/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eCommerce Application",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
