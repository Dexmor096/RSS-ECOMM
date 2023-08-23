import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
<<<<<<< HEAD
import Header from "../components/header/header";
import Footer from "components/footer/footer";
=======
// import Header from "../components/header";
// import Footer from "components/footer";
>>>>>>> eda4a4eb29d40ec6e321b3608d7d59a225453f8e
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
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
