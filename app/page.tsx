"use client";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import HeroSection from "components/HeroSection";

// import { ThemeSwitcher } from "./redux/features/theme/ThemeSwitcher";

export default function Home() {
  //todo вывод товаров после запроса токена анонима

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* <ThemeSwitcher /> */}
      </main>
      <Footer />
    </>
  );
}
