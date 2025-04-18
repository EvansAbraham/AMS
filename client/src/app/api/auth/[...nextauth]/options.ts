import type { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import CredentialsProvider from "next-auth/providers/credentials";

const DUMMY_EMAIL = "test@example.com";
const DUMMY_PASSWORD = "password";
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "adminpassword";

export const options: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID || "",
      issuer: process.env.COGNITO_ISSUER,
      clientSecret: ""
    }),

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Dummy login for admin
          if (
            credentials.email === ADMIN_EMAIL &&
            credentials.password === ADMIN_PASSWORD
          ) {
            return {
              id: "admin-id",
              email: credentials.email,
              name: "Admin User",
              role: "admin",
            };
          }

          // Dummy login for dev
          if (
            credentials.email === DUMMY_EMAIL &&
            credentials.password === DUMMY_PASSWORD
          ) {
            return {
              id: "dummy-user-id",
              email: credentials.email,
              name: "Test User",
              role: "user",
            };
          }

          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      console.log("JWT callback token:", token);
      return token;
    },
    async session({ session, token }) {
      try {
        if (token?.user) {
          session.user = token.user;
        }
        console.log("Session callback:", session);
        return session;
      } catch (error) {
        console.error("Error during session callback:", error);
        throw error;
      }
    }
  },

  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      },
    },
  },

  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth",
  },

  secret: process.env.NEXTAUTH_SECRET || "JLUjLhpgnL+wqFQWN7vWD+oSEAjy6jOSvjXooLh8iuk=",
};