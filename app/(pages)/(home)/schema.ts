import { z } from 'zod';

export const userSchema = z.object({
    firstname: z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
    email: z.string().email("Enter valid email")
})

export const defaultValues = {
    firstname: "",
    lastname: "",
    email: ""
}

