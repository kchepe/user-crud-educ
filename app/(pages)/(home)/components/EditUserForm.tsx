'use client'

import {UserFormFields} from "@/app/(pages)/(home)/components/index";
import {Button} from "@mui/material";
import {Box} from "@mui/system";
import {IUser} from "@/types";
import {FieldValues, SubmitHandler, useFormContext} from "react-hook-form";
import {useEffect} from "react";

interface EditUserFormProps {
    user: IUser
}

const EditUserForm = ({user}: EditUserFormProps) => {

    const {handleSubmit, setValue} = useFormContext()

    useEffect(() => {
        setValue("firstname", user.firstname)
        setValue("lastname", user.lastname)
    }, [user, setValue])


    const handleUpdateUser: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    return <Box>
        <UserFormFields/>
        <Box sx={{marginTop: 2}}>
            <Button type="button" variant="contained" fullWidth onClick={handleSubmit(handleUpdateUser)}>Update</Button>
        </Box>
    </Box>

}

export default EditUserForm