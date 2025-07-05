import {Box, Container} from "@mui/system";
import {ReactNode} from "react";
import {Navbar} from "@/components/organisms";

interface MainTemplateProps {
    children: ReactNode
}

const MainTemplate = ({children}: MainTemplateProps) => {
    return <Box>
        <Navbar/>
        <Container sx={{paddingY: 5}} maxWidth="xl">
            {children}
        </Container>
    </Box>
}

export default MainTemplate