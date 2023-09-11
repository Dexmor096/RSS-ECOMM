import { toast, TypeOptions } from "react-toastify";

export const notify = (message: string, type: TypeOptions) =>
  toast(message, {
    position: "top-center",
    autoClose: 3500,
    type: type,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
