import { toast } from "react-toastify";

// Toast notifications
export const successToast = (message) => {
    toast.success(message);
}
export const warningToast = (message) => {
    toast.warning(message);
}