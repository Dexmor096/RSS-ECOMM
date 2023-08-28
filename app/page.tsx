"use client";
import Button from "@mui/material/Button";
import { getApiRootWithRefreshToken } from "../apiRoot";

import Header from "components/header";
import Footer from "components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
        <Button
          onClick={() => {
            const token = localStorage.getItem("refresh-token");
            if (!token) {
              throw new Error("No token");
            }
            const apiRoot = getApiRootWithRefreshToken(token);
            const customerLink = apiRoot.me().get().execute();
            console.log(customerLink);
          }}
        >
          me
        </Button>
      </main>
      <Footer />
    </>
  );
}
