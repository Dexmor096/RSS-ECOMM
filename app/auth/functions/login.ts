import { LoginInputs } from "../login/page";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { getAuthClient } from "../../../BuildClient";

export const getAuthApiRoot = (login: string, password: string) => {
  const ctpClient = getAuthClient(login, password);
  return createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey: process.env.PROJECT_KEY!,
  });
};

export const loginUser = async (data: LoginInputs) => {
  const apiRoot = getAuthApiRoot(data.email, data.password);
  return apiRoot
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
    })
    .catch((error) => {
      if (error.statusCode == 400) {
        console.error("Ошибка входа (400) Такой пользователь не найден!");
      } else {
        console.error("An unknown error occurred:", error);
      }
    });
};
