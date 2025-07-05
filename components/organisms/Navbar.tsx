import {Box, Container} from "@mui/system";
import {AppBar, Toolbar, Typography} from "@mui/material";

const Navbar = () => {
    return <Box sx={{flexGrow: 1}}>
        <AppBar position="sticky">
            <Toolbar>
                <Container maxWidth="xl">
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        CRUD-EDUC
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    </Box>
}

export default Navbar