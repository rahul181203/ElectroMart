export { GET,POST } from "@/auth"
export const runtime = "edge" // optional


// // import { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import {db} from "@/lib/prisma";

// const authOption:NextAuthOptions = {
//     session:{
//         strategy:"jwt"
//     },
//     providers:[
//         GoogleProvider({
//             clientId:process.env.GOOGLE_CLIENT_ID!,
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET!
//         })
//     ],
//     callbacks:{
//         async signIn({account,profile}) {
//             if(!profile?.email){
//                 throw new Error("No Profile");
//             }

//             await db.user.upsert({
//                 where:{
//                     email: profile.email,
//                 },
//                 create:{
//                     email:profile.email,
//                     fullname:profile.name
//                 },
//                 update:{
//                     fullname:profile.name
//                 }
//             });
//             return true;
//         },
//     }
// }

// const handler = NextAuth(authOption)
// export {handler as GET, handler as POST}