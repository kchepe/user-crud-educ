'use client'

import {ReactNode} from "react";
import {ThemeProvider} from "@mui/system";
import {CssBaseline} from "@mui/material";
import theme from "@/app/theme";
import {MainTemplate, Toaster} from "@/components";

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MainTemplate>
            <Toaster/>
            <div>{children}</div>
        </MainTemplate>
    </ThemeProvider>
}

export default MainLayout