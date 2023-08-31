import Header from "components/header/header";
import Footer from "components/footer/footer";

export default function Home() {
  //todo вывод товаров после запроса токена анонима
  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
      </main>
      <Footer />
    </>
  );
}
