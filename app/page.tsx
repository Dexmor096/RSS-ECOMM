"use client";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import HeroSection from "components/HeroSection";
import Button from "@mui/material/Button";
import { getProducts } from "./products/getProducts";

export default function Home() {
  //todo вывод товаров после запроса токена анонима
  // const handleGetProducts = () => getProducts();
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={async () => {
            try {
              await getProducts();
            } catch (error) {
              console.error("error", error);
            }
          }}
        >
          getCategory
        </Button>
      </main>
      <Footer />
    </>
  );
}
