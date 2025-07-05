'use client'

import {UserFormFields} from "@/app/(pages)/(home)/components/index";
import {Button} from "@mui/material";
import {Box} from "@mui/system";
import {FieldValues, SubmitHandler, useFormContext} from "react-hook-form";
import {useSnackbar} from "@/hooks";

const AddUserForm = () => {
    const { success } = useSnackbar();

    const {handleSubmit} = useFormContext()

    const handleAddUser: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
        success("User Successfully Added!")
    }

    return <Box>
        <UserFormFields/>
        <Box sx={{marginTop: 2}}>
            <Button type="button" variant="contained" fullWidth onClick={handleSubmit(handleAddUser)}>Add</Button>
        </Box>
    </Box>
}

export default AddUserForm