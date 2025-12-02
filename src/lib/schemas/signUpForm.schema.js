import { z } from "zod";

export const signUpFormSchema = z.object({
    firstname: z.string().
    min(2, "Firstname should have length greater than 1 character.").
    max(20, "Firstname should have length less than 21 character."),

    lastname: z.string().
    min(2, "Lastname should have length greater than 1 character.")
    .max(20, "Firstname should have length less than 21 character."),

    dateOfBirth: z.string().
    nonempty("Date of birth is required"),

    gender: z.enum(["male", "female"], {
        errorMap: () => ({ message: "Please select at least one option." }),
    }),

    email: z.email("Please enter valid email."),

    password: z.string()
    .min(5, "Password should have length greater than 4 characters")
    .max(15, "Password should have length less than 15 characters."),

    confirmPassword: z.string()
    .min(5, "Confirmation password should have length greater than 4 characters")
    .max(15, "Confirmation password should have length less than 15 characters.")
});