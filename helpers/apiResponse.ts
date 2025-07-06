import {ApiSuccess, ApiError} from "@/types"

export function successResponse<T>({message, result}: {message: string, result: T}): ApiSuccess<T> {
    return {
        success: true,
        message,
        data: result,
    };
}

export function errorResponse({message, errors}: {message: string, errors?: Record<string, string>}): ApiError {
    return {
        success: false,
        message,
        errors,
        data: undefined
    };
}
