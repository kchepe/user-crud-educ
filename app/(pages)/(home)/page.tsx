'use client'

import {Button, Box} from "@mui/material";
import {useState} from "react";
import {Lightbox, PageWrapper, DataTable, Form} from "@/components";
import {AddUserForm, UserActionButtons} from "@/app/(pages)/(home)/components";
import {ColumnDef} from "@tanstack/react-table";
import {IUser} from "@/types";
import {defaultValues, userSchema} from "@/app/(pages)/(home)/schema";


const Home = () => {

    const [showAddUserModal, setShowAddUserModal] = useState(false)

    const handleToggleAddUserModal = () => {
        setShowAddUserModal(prevState => !prevState)
    }

    const [users, setUsers] = useState<IUser[]>([])

    console.log(structuredClone(users))


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
            id: "actions",
            cell: ({row}) => <UserActionButtons user={row.original}/>
        }]


    return <PageWrapper title="Users"
                        subHeader={
                            <Button type="button" variant="contained" onClick={handleToggleAddUserModal}>
                                Add User
                            </Button>}>
        <Box>
            <Lightbox open={showAddUserModal} onClose={handleToggleAddUserModal} title="Add User">
                <Form schema={userSchema} defaultValues={defaultValues}>
                    <AddUserForm/>
                </Form>
            </Lightbox>
            <Box>
                <DataTable data={users} columns={columns}/>
            </Box>
        </Box>
    </PageWrapper>
}

export default Home