"use client";
import Header from "../../components/header";
import * as React from "react";
import Footer from "../../components/footer";
import { getMyInfo } from "../controllers/controller";

export default function Profile() {
  getMyInfo();
  return (
    <>
      <Header />
      <h1>Profile</h1>
      <Footer />
    </>
  );
}
