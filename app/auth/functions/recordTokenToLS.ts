import * as process from "process";
import { encodeToBase64 } from "../../../helpers/encodeToBase64";

export const recordTokenToLS = async (login: string, password: string) => {
  const myHeaders = new Headers();
  const value = encodeToBase64(
    process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET,
  );
  myHeaders.append("Authorization", `Basic ${value}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "password");
  urlencoded.append("username", login);
  urlencoded.append("password", password);
  // myHeaders.append("Content-Length", urlencoded.size.toString());

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
  };

  fetch(
    "https://auth.europe-west1.gcp.commercetools.com/oauth/specialized-api/customers/token",
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => {
      const objResponse = JSON.parse(result);
      localStorage.setItem("access-token", objResponse["access_token"]);
      localStorage.setItem("refresh-token", objResponse["refresh_token"]);
    })
    .catch((error) => console.log("error", error));
};
