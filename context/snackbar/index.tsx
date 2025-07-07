"use client";

import {ReactNode, createContext, useMemo, useReducer} from "react";
import {ISnackbarContextProps, ISnackbarState, SeverityType} from "./type";
import SnackbarReducer from "./reducer";

type ISnackbarProviderProps = {
    children: ReactNode;
    initialState: ISnackbarState;
};

export const initialSnackbarState: ISnackbarState = {
    show: false,
    message: "",
    severity: "info" as SeverityType,
};

export const SnackbarContext = createContext<ISnackbarContextProps>(
    {} as ISnackbarContextProps,
);

export const SnackbarProvider = ({
                                     children,
                                     initialState = initialSnackbarState,
                                 }: ISnackbarProviderProps) => {
    const [state, dispatch] = useReducer(SnackbarReducer, initialState);
    const value = useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch],
    );
    return (
        <SnackbarContext.Provider value={value}>
            {children}
        </SnackbarContext.Provider>
    );
};
