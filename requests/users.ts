import {errorResponse, successResponse} from "@/helpers";
import {ApiResponse, IUser} from "@/types";


export const fetchAllUsers = async (): Promise<ApiResponse<IUser[]>> => {
    const response = await fetch("/api/users");
    const users = await response.json()
    if(users.error) {
        return errorResponse({message: users.error})
    }
    return successResponse<IUser[]>({message: "Successfully fetch all users", result: users})
}

export const createUser = async (newUser: Omit<IUser, "id">): Promise<ApiResponse<string>> => {

    const response = await fetch("/api/users", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser),
    })

    const data = await response.json()
    if (data.error) {
        return errorResponse(({message: data.error}))
    }
    return successResponse({result: data.id, message: "User Successfully Added!"})

}

export const updateUser = async (user: IUser): Promise<ApiResponse<IUser>> => {

    const response = await fetch("/api/users", {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    })

    const data = await response.json()
    if (data.error) {
        return errorResponse(({message: data.error}))
    }
    return successResponse({result: data.user, message: "User Successfully Updated!"})
}

export const deleteUser = async (id: string) => {
    const response = await fetch('/api/users', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id}),
    });
    const data = await response.json()
    if (data.error) {
        return errorResponse(({message: data.error}))
    }
    return successResponse({result: data, message: "User Successfully Deleted!"})

}


