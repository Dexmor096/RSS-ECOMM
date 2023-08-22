import { apiRoot } from "../../../apiRoot";
import { LoginInputs } from "../login/page";
import { toast, TypeOptions } from "react-toastify";

export const loginUser = async (data: LoginInputs) => {
  const notify = (message: string, type: TypeOptions) =>
    toast(message, {
      type,
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
      notify("Вход выполнен успешно!", "success");
      console.log("Вход выполнен успешно!");
    })
    .catch((error) => {
      if (error.statusCode == 400) {
        notify("Такой пользователь не найден!", "error");
        console.error("Ошибка входа (400) Такой пользователь не найден!");
      } else {
        notify("An unknown error occurred", "error");
        console.error("An unknown error occurred:", error);
      }
    });
};
