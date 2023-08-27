import { HttpErrorType } from "@commercetools/sdk-client-v2";
import { getAnonymousApiRoot, getAuthApiRoot } from "../../apiRoot";
import { RegistrationInputs } from "../auth/registration/page";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { encodeToBase64 } from "../../helpers/encodeToBase64";
import process from "process";
import { LoginInputs } from "../../types";

export const createCustomer = async (data: RegistrationInputs) => {
  return getAnonymousApiRoot()
    .me()
    .signup()
    .post({
      body: {
        email: data.email,
        password: data.password,
      },
    })
    .execute()
    .then(({ body }) => {
      console.log("Регистрация выполнена успешно!");
      console.log(body);
    });
};

export const handleRegistrationError = (error: HttpErrorType) => {
  //todo проверить тип ошибки
  if (error.statusCode === 400) {
    console.error(
      "Ошибка регистрации (400). Такой пользователь уже существует!",
    );
  } else {
    console.error("An unknown error occurred:", error);
  }
};

export const handleLoginUser = async (
  data: LoginInputs,
  router: AppRouterInstance,
) => {
  const apiRoot = getAuthApiRoot(data.email, data.password);
  return apiRoot
    .me()
    .login()
    .post({
      body: {
        email: data.email,
        password: data.password,
      },
    })
    .execute()
    .then(() => {
      console.log("Вход выполнен успешно!");
      handleAccessToken(data.email, data.password);
      router.push("/");
    })
    .catch((error) => {
      if (error.statusCode == 400) {
        console.error("Ошибка входа (400) Такой пользователь не найден!");
      } else {
        console.error("An unknown error occurred:", error);
      }
    });
};

export const handleAccessToken = async (login: string, password: string) => {
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
