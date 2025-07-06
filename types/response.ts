export type ApiSuccess<T> = {
    success: true;
    message: string;
    data: T;
};

export type ApiError = {
    success: false;
    message: string;
    errors?: Record<string, string>;
    data: undefined
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;
