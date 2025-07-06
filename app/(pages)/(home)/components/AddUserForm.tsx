'use client'

import {UserFormFields} from "@/app/(pages)/(home)/components/index";
import {Button} from "@mui/material";
import {Box} from "@mui/system";
import {FieldValues, SubmitHandler, useFormContext} from "react-hook-form";
import {IUser} from "@/types";

interface AddUserFormProps {
    addUser: (newUser: IUser) => Promise<boolean>
    hideAddModal: () => void
}

const AddUserForm = ({addUser, hideAddModal}: AddUserFormProps) => {
    const {handleSubmit, reset} = useFormContext()

    const handleAddUser: SubmitHandler<FieldValues> = async (formData) => {
       const isSuccess = await addUser(formData as IUser)

        if(!isSuccess) {
            return;
        }
        reset()
        hideAddModal()


    }

    return <Box>
        <UserFormFields/>
        <Box sx={{marginTop: 2}}>
            <Button type="button" variant="contained" fullWidth onClick={handleSubmit(handleAddUser)}>Add</Button>
        </Box>
    </Box>
}

export default AddUserForm