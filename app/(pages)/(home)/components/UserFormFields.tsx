import {Box} from "@mui/system";
import {TextFieldForm} from "@/components";
import {InputAdornment} from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const UserFormFields = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
            <Box>
                <TextFieldForm slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Person2OutlinedIcon/>
                            </InputAdornment>
                        ),
                    },
                }} name="firstname" fullWidth label="Firstname" placeholder="Enter Firstname"/>
            </Box>
            <Box>
                <TextFieldForm slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Person2OutlinedIcon/>
                            </InputAdornment>
                        ),
                    },
                }} name="lastname" fullWidth label="Lastname" placeholder="Enter Lastname"/>
            </Box>
            <Box>
                <TextFieldForm slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailOutlinedIcon/>
                            </InputAdornment>
                        ),
                    },
                }} name="email" fullWidth label="Email Address" type="email" placeholder="Enter Email Address"/>
            </Box>
        </Box>
    )
}

export default UserFormFields