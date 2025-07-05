import { z } from 'zod';

export const userSchema = z.object({
    firstname: z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required")
})

export const defaultValues = {
    firstname: "",
    lastname: ""
}

export type UserFormValues = z.infer<typeof userSchema>;
