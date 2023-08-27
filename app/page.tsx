"use client";
import Button from "@mui/material/Button";

export default function Home() {
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
