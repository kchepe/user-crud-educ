import {useEffect, useState} from "react";
import {createUser, deleteUser, fetchAllUsers, updateUser} from "@/requests";
import {IUser} from "@/types";
import {useSnackbar} from "@/hooks";

const useUserActions = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [isUserLoading, setIsUserLoading] = useState(true);
    const {success, error} = useSnackbar()


    useEffect(() => {
        const fetchUsers = async () => {
            const {data, success} = await fetchAllUsers()
            setIsUserLoading(false)
            if (!success) {
                setUsers([])
                return;
            }
            setUsers(data)
        }
        fetchUsers()
    }, [])

    const addUser = async (newUser: IUser): Promise<boolean> => {
        const {success: responseSuccess, message, data} = await createUser(newUser)
        if (!responseSuccess) {
            error(message)
            return false
        }
        success(message)
        setUsers(prevState => {
            return [...prevState, {...newUser, id: data}]
        })
        return true
    }

    const removeUser = async (userId: string) => {
        const {success: responseSuccess, message} = await deleteUser(userId)

        if (!responseSuccess) {
            return error(message)
        }
        setUsers(prevState => {
            return prevState.filter(user => user.id !== userId);
        })
        success(message)
    }


    const editUser = async (user: IUser, index: number): Promise<boolean> => {
        const {success: responseSuccess, message} = await updateUser(user);

        if (!responseSuccess) {
            error(message)
            return false
        }
        setUsers(prevState => {
            const newState = [...prevState]
            newState[index] = user;
            return newState
        })
        success(message)
        return true
    }


    return {users, addUser, removeUser, editUser, isUserLoading}

}


export default useUserActions