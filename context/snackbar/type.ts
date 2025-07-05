import { Dispatch } from "react";

export type SeverityType = "error" | "info" | "success";

export interface ISnackbarState {
    message: string;
    severity: SeverityType;
    show: boolean;
}

export type SnackbarActions =
    | {
    type: "SHOW_NOTIFICATION";
    payload: { message: string; severity: SeverityType };
}
    | {
    type: "HIDE_NOTIFICATION";
}
    | {
    type: "SHOW_SERVER_ERROR";
};

export interface ISnackbarContextProps {
    state: ISnackbarState;
    dispatch: Dispatch<SnackbarActions>;
}
