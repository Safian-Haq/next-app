import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "@/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';
import GoogleProvider from "next-auth/providers/google";



export const authOptions: NextAuthOptions = { 
    adapter: PrismaAdapter(prisma),
    providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: {label: "Email", type: "email", placeholder: "Email"},
            password: {label: "Password", type: "password", placeholder: "Password"}
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials.password) return null;

            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            })

            if (!user) return null;

            const isPasswordMatched = await bcrypt.compare(credentials.password, user.hashedPassword!)
            
            return isPasswordMatched ? user : null;
        } 
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
],
session:
{strategy: 'jwt'}}  

export default authOptions;