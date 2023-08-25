"use client";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "../components/functions/userProvider";

export default function Home() {
  const userContext = useContext(UserContext);
  console.log(userContext?.user);

  //todo вывод товаров после запроса токена анонима
  return (
    <main>
      <h1>Home Page</h1>
      <Button
        onClick={() => {
          // const apiRoot = getAuthApiRoot("testtest@gmail.com", "1234567890zZ!");
          // const customerLink = apiRoot.me().get().execute();
          // console.log(customerLink);
        }}
      >
        me
      </Button>
    </main>
  );
}
