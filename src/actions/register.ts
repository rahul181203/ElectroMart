"use server"

import {registerSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt"
import { db } from "@/lib/prisma";
import { getUserByEmail } from "@/data/users";

export const register = async (values:z.infer<typeof registerSchema>)=>{
    const validateResponse = registerSchema.safeParse(values);

    if(!validateResponse.success){
        return {error:"Invalid fields"}
    }

    const {email, pass, name} = validateResponse.data;
    const hashedpassword = await bcrypt.hash(pass,10)

    const exsistingUser = await getUserByEmail(email);

    if(exsistingUser){
        return {error: "Email aldready exists"}
    }

    await db.user.create({
        data:{
            email,
            fullname:name,
            password:hashedpassword,
        }
    })
    console.log("created");
    

    return {success:"user created"}
}

