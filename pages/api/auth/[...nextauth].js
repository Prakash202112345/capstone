import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { login } from "../../../utils/fetcher.js";
import axios from "axios";
import bcrypt from 'bcrypt';


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
      name: "CredentialProvider",
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log("user_datauser_data", credentials.email, password)

        const user_data = await prisma.Student.findUnique({
          where: { email: email },
        });

        if (!user_data) {
          throw new Error("No user found with that email");
        }

        const user = {
          id: user_data.id,
          name: user_data.userName,
          email: user_data.email,
          role: user_data.isRole,
          picture: "na.jpg",
        };
        // const passwordMatch = await bcrypt.compare(password, user_data.hashedPassword);
        // console.log("passwordMatch", passwordMatch)
        // if (!passwordMatch) {
        //   throw new Error("Incorrect password");
        //   return false;
        // } else {
        //   return user;
        // }

        if (credentials.email === user_data.email && credentials.password === user_data.password) {
          return user;
        } else {
          throw new Error("Incorrect password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id
        token.role = user.role // Add the user role to the token
      }
      return token;
    },

    async session({ session, token, user }) {
      if (token) {
        session.accessToken = token.accessToken
        session.user.id = token.id
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
  pages: {
    signIn: '/signin',
  }
})

