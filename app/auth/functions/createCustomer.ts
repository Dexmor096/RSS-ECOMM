import { apiRoot } from "../../../apiRoot";
import { RegistrationInputs } from "../registration/page";
import { HttpErrorType } from "@commercetools/sdk-client-v2";

export const createCustomer = async (data: RegistrationInputs) => {
  return apiRoot
    .customers()
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
    })
    .catch((error) => {
      handleRegistrationError(error);
    });
};

const handleRegistrationError = (error: HttpErrorType) => {
  //todo проверить тип ошибки
  if (error.statusCode === 400) {
    console.error(
      "Ошибка регистрации (400). Такой пользователь уже существует!",
    );
  } else {
    console.error("An unknown error occurred:", error);
  }
};
