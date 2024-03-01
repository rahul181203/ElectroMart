import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { loginSchema } from "./schemas"
import { getUserByEmail } from "./data/users";


export default {
  providers: [
    Credentials({
    async authorize(credentials) {  
      console.log(credentials);
        const validatedFields = loginSchema.safeParse(credentials);
        if(validatedFields.success){
          const {email,password} = validatedFields.data;
          const user = await getUserByEmail(email);
          console.log(user);
          if(!user || !user.password) return null;
          const passMatch = await bcrypt.compare(password,user.password);
          console.log(passMatch);
          if(passMatch){
            return user;
          }
        }
        return null;
    },
  })
],
} satisfies NextAuthConfig