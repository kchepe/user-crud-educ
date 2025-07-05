

import {Box} from "@mui/system";
import {ReactNode} from "react";
import {Typography} from "@mui/material";

interface PageWrapperProps {
    children: ReactNode
    title: string
    subHeader?: string | ReactNode
}

const PageWrapper = ({children, title, subHeader}: PageWrapperProps) => {
    return <Box>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Typography variant="h5" color="primary" sx={{fontWeight: "bold"}}>
                {title}
            </Typography>
            {subHeader}
        </Box>
        <Box sx={{mt: 5}}>
            {children}
        </Box>
    </Box>
}

export default PageWrapper