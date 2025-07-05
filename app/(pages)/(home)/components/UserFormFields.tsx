import {Box} from "@mui/system";
import {TextFieldForm} from "@/components";

const UserFormFields = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
            <Box>
                <TextFieldForm name="firstname" fullWidth label="Firstname" placeholder="Enter Firstname"/>
            </Box>
            <Box>
                <TextFieldForm name="lastname" fullWidth label="Lastname" placeholder="Enter Lastname"/>
            </Box>
        </Box>
    )
}

export default UserFormFields