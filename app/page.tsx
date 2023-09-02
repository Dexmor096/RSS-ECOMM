import Header from "components/header/header";
import Footer from "components/footer/footer";
import HeroSection from "components/HeroSection";
import Button from "@mui/material/Button";
import { getProducts } from "./products/getProducts";

export default function Home() {
  //todo вывод товаров после запроса токена анонима
  const handleGetProducts = () => getProducts();
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Button variant="text" onClick={handleGetProducts()}>
          get products
        </Button>
      </main>
      <Footer />
    </>
  );
}
