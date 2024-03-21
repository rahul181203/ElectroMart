import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { loginSchema } from "./schemas"
import { getUserByEmail } from "./data/users";
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';


export default {
  providers: [
    Credentials({
    async authorize(credentials) {  
        const validatedFields = loginSchema.safeParse(credentials);
        if(validatedFields.success){
          const {email,password} = validatedFields.data;
          const user = await getUserByEmail(email);
          if(!user || !user.password) return null;
          const passMatch = await bcrypt.compare(password,user.password);
          if(passMatch){
            return user;
          }
        }
        return null;
    },
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    allowDangerousEmailAccountLinking: true,
  }),
  FacebookProvider({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    allowDangerousEmailAccountLinking: true,
  })
],
secret:process.env.AUTH_SECRET,
} satisfies NextAuthConfig
