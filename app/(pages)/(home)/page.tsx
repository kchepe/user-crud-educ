'use client'

import {Button, Box} from "@mui/material";
import { useState} from "react";
import {Lightbox, PageWrapper, DataTable, Form} from "@/components";
import {AddUserForm, Filters, UserActionButtons} from "@/app/(pages)/(home)/components";
import {ColumnDef} from "@tanstack/react-table";
import {IUser} from "@/types";
import {defaultValues, userSchema} from "@/app/(pages)/(home)/schema";
import {useUserActions} from "@/hooks";



const Home = () => {

    const [showAddUserModal, setShowAddUserModal] = useState(false)

    const {users, addUser, removeUser, editUser, isUserLoading, fetchUsers} = useUserActions()

    const handleToggleAddUserModal = () => {
        setShowAddUserModal(prevState => !prevState)
    }


    const columns: ColumnDef<IUser>[] = [{
        id: "firstname",
        header: "Firstname",
        cell: ({row}) => <Box>{row.original.firstname}</Box>
        },
        {
            id: "lastname",
            header: "Lastname",
            cell: ({row}) => <Box>{row.original.lastname}</Box>
        },
        {
            id: "email",
            header: "Email Address",
            cell: ({row}) => <Box>{row.original.email}</Box>
        },
        {
            id: "actions",
            cell: ({row}) => <UserActionButtons user={row.original} index={row.index} removeUser={removeUser} editUser={editUser}/>
        }]


    return <PageWrapper title="Users"
                        subHeader={
                            <Button type="button" variant="contained" onClick={handleToggleAddUserModal}>
                                Add User
                            </Button>}>
        <Box>
            <Lightbox open={showAddUserModal} onClose={handleToggleAddUserModal} title="Add User">
                <Form schema={userSchema} defaultValues={defaultValues}>
                    <AddUserForm addUser={addUser} hideAddModal={handleToggleAddUserModal}/>
                </Form>
            </Lightbox>

            <Box sx={{mb: 5}}>
                <Filters fetchUsers={fetchUsers}/>
            </Box>

            <Box>
                <DataTable data={users} columns={columns} isLoading={isUserLoading}/>
            </Box>
        </Box>
    </PageWrapper>
}

export default Home