import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "./lib/prisma"
import { getUserById } from "./data/users";


export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth({
  callbacks:{
    async signIn({user,account,profile}) {
      console.log(account);
      
      if(!profile?.email){
        throw new Error('no account')
      }
      
      await db.user.upsert({
          where:{
              email: profile.email,
          },
          create:{
              email:profile.email,
              fullname:profile.name
          },
          update:{
              fullname:profile.name
          }
      });
      return true;
      // const exsistinguser = await getUserById(user.id as string);
      // if(!exsistinguser || !exsistinguser.emailVerified) return false;
      // return true;
    },
    async session({token,session}){
      console.log({sessionToken:token,session});
      if(token.sub && session.user){
        session.user.id= token.sub;
      }
      return session;
    },
    async jwt({token}){
      // if(!token.sub) return token;
      // const exsistingUser = await getUserById(token.sub);
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})