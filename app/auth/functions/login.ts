import { getAuthApiRoot } from "../../../apiRoot";
import { LoginInputs } from "../../../types";
import { recordTokenToLS } from "./recordTokenToLS";

export const loginUser = async (data: LoginInputs) => {
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
      recordTokenToLS(data.email, data.password);
    })
    .catch((error) => {
      if (error.statusCode == 400) {
        console.error("Ошибка входа (400) Такой пользователь не найден!");
      } else {
        console.error("An unknown error occurred:", error);
      }
    });
};
