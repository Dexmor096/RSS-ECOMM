"use client";
import Button from "@mui/material/Button";
import { getAuthApiRoot } from "./auth/functions/login";

export default function Home() {
  //todo вывод товаров после запроса токена анонима
  return (
    <main>
      <h1>Home Page</h1>
      <Button
        onClick={() => {
          const apiRoot = getAuthApiRoot("testtest@gmail.com", "1234567890zZ!");
          const customerLink = apiRoot.me().get().execute();
          console.log(customerLink);
        }}
      >
        me
      </Button>
    </main>
  );
}
