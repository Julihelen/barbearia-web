import { toast } from "react-toastify";

export const notify = (mensagem) => toast(mensagem, { position: "top-center", autoClose: 2000, pauseOnHover: false });

export const notifyInfo = (mensagem) => toast.info(mensagem, { position: "top-center", autoClose: 2000, pauseOnHover: false });

export const notifyWarn = (mensagem) => toast.warn(mensagem, { position: "top-center", autoClose: 2000, pauseOnHover: false });

export const notifySuccess = (mensagem) => toast.success(mensagem, { position: "top-center", autoClose: 2000, pauseOnHover: false });

export const notifyError = (mensagem) => toast.error(mensagem, { position: "top-center", autoClose: 2000, pauseOnHover: false });
