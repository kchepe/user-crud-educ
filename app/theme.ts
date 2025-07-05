// theme.ts
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
    },
    palette: {
        mode: "light"
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                }
            }
        }
    }
});

export default theme;
