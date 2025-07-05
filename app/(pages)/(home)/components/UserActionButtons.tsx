'use client'

import {IconButton, Box} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {ConfirmationModal, Form, Lightbox} from "@/components";
import {useState} from "react";
import {EditUserForm} from "@/app/(pages)/(home)/components";
import {IUser} from "@/types";
import {defaultValues, userSchema} from "@/app/(pages)/(home)/schema";

interface UserActionButtonsProps {
    user: IUser
}

const UserActionButtons = ({user}: UserActionButtonsProps) => {

    const [showEditUserModal, setEditUserModal] = useState(false)
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleToggleEditUserModal = () => {
        setEditUserModal(prevState => !prevState)
    }

    const handleToggleConfirmationModal = () => {
        setShowConfirmationModal(prevState => !prevState)
    }

    const handleDeleteUser = () => {

    }

    return <Box sx={{display: "flex", justifyContent: "flex-end"}}>

        <Lightbox open={showEditUserModal} onClose={handleToggleEditUserModal} title="Edit User">
            <Form schema={userSchema} defaultValues={defaultValues}>
                <EditUserForm user={user}/>
            </Form>
        </Lightbox>

        <ConfirmationModal open={showConfirmationModal} onClose={handleToggleConfirmationModal} confirmAction={handleDeleteUser}/>

        <IconButton onClick={handleToggleEditUserModal}>
            <EditOutlinedIcon/>
        </IconButton>

        <IconButton onClick={handleToggleConfirmationModal}>
            <DeleteOutlineOutlinedIcon/>
        </IconButton>
    </Box>
}

export default UserActionButtons