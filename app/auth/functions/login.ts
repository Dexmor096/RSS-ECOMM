import { authApiRoot } from "../../../apiRoot";
import { LoginInputs } from "../login/page";

export const loginUser = async (data: LoginInputs) => {
  return authApiRoot
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
