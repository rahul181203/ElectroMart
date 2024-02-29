import * as z from "zod";

export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(1,{
        message:"password is required"
    })
})

export const registerSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    pass:z.string(),
    cpass:z.string()
})