import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = (
  message: string,
  type: "success" | "error",
  options?: ToastOptions
) => {
  toast(message, {
    position: "bottom-center",
    ...options,
    type,
  });
};
