import Header from "components/header/header";
import Footer from "components/footer/footer";
import HeroSection from "components/HeroSection";
import AboutUs from "components/AboutUs";
import DownloadApp from "components/DownloadApp";

export default function Home() {
  //todo вывод товаров после запроса токена анонима
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
}
