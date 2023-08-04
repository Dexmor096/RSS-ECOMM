"use client";
import { NextPage } from "next";
import { ErrorPageProps } from "../../types";

const NotFound: NextPage<ErrorPageProps> = ({ pageError }) => {
  return (
    <div>
      <h1>Page Not Found!</h1>
      <p>{pageError.message}</p>
    </div>
  );
};

export default NotFound;
