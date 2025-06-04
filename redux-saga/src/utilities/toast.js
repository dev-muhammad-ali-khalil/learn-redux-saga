import { toast } from "react-toastify";

// Toast notifications
export const successToast = () => {
    toast.success("Data fetched successfully!");
}
export const warningToast = () => {
    toast.warning("Data already fetched!");
}