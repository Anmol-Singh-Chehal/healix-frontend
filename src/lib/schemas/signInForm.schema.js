import { z } from "zod";

export const signInFormSchema = z.object({
    email: z.email("Please eneter valid email.")
    .nonempty("Email is required."),

    password: z.string()
    .nonempty("Password is required."),
});