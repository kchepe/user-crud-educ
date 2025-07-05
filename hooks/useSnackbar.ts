import { useContext } from "react";
import {SnackbarContext} from "@/context/snackbar";

const useSnackbar = () => {
    const { state: snackbar, dispatch } = useContext(SnackbarContext);

    const success = (message: string) => {
        dispatch({
            type: "SHOW_NOTIFICATION",
            payload: { message, severity: "success" },
        });
    };

    const error = (message: string) => {
        dispatch({
            type: "SHOW_NOTIFICATION",
            payload: { message, severity: "error" },
        });
    };

    const info = (message: string) => {
        dispatch({
            type: "SHOW_NOTIFICATION",
            payload: { message, severity: "info" },
        });
    };

    const close = () => {
        dispatch({ type: "HIDE_NOTIFICATION" });
    };

    return { close, success, error, snackbar, info };
};

export default useSnackbar;
