"use client";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import HeroSection from "components/HeroSection";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { ThemeSwitcher } from "./redux/features/theme/ThemeSwitcher";

export default function Home() {
  //todo вывод товаров после запроса токена анонима

  return (
    <>
      <Provider store={store}>
        <Header />
        <main>
          <HeroSection />
          <ThemeSwitcher />
        </main>
        <Footer />
      </Provider>
    </>
  );
}
