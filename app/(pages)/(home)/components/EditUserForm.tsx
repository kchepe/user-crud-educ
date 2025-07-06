'use client'

import {UserFormFields} from "@/app/(pages)/(home)/components/index";
import {Button} from "@mui/material";
import {Box} from "@mui/system";
import {IUser} from "@/types";
import {FieldValues, SubmitHandler, useFormContext} from "react-hook-form";
import {useEffect} from "react";

interface EditUserFormProps {
    user: IUser
    index: number
    editUser: (user: IUser, index: number) => Promise<boolean>
    handleToggleEditUserModal: () => void
}

const EditUserForm = ({user, index, editUser, handleToggleEditUserModal}: EditUserFormProps) => {

    const {handleSubmit, setValue, reset} = useFormContext()

    useEffect(() => {
        setValue("firstname", user.firstname)
        setValue("lastname", user.lastname)
        setValue("email", user.email)
    }, [user, setValue])


    const handleUpdateUser: SubmitHandler<FieldValues> = async (data) => {

        const newUserData: IUser = {id: user.id,...data} as IUser

        const isSuccess = await editUser(newUserData, index)

        if(!isSuccess) {
            return;
        }
        reset()
        handleToggleEditUserModal()


    }

    return <Box>
        <UserFormFields/>
        <Box sx={{marginTop: 2}}>
            <Button type="button" variant="contained" fullWidth onClick={handleSubmit(handleUpdateUser)}>Update</Button>
        </Box>
    </Box>

}

export default EditUserForm