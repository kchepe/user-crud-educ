import { SnackbarActions, ISnackbarState } from "./type";

const SnackbarReducer = (
    state: ISnackbarState,
    action: SnackbarActions,
): ISnackbarState => {
    switch (action.type) {
        case "SHOW_NOTIFICATION": {
            const stateCopy = { ...state };
            stateCopy.show = true;
            stateCopy.message = action.payload.message;
            stateCopy.severity = action.payload.severity;
            return stateCopy;
        }
        case "HIDE_NOTIFICATION": {
            const stateCopy = { ...state };
            stateCopy.show = false;
            return stateCopy;
        }
        case "SHOW_SERVER_ERROR": {
            const stateCopy = { ...state };
            stateCopy.show = true;
            stateCopy.message = "Something went wrong. Please try again later";
            stateCopy.severity = "error";
            return stateCopy;
        }
        default:
            throw new Error("Invalid action passed to Property reducer");
    }
};

export default SnackbarReducer;
