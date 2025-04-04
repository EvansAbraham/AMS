import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import CognitoProvider from "next-auth/providers/cognito";
import { Session } from "next-auth";

// For now, use dummy credentials
const DUMMY_EMAIL = "test@example.com";
const DUMMY_PASSWORD = "password";

interface UserData {
  id: string;
  email: string;
  name?: string;
}

const handler = NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID || "3029s4phrqmadatv56ssoq4335",
      clientSecret: "",
      issuer:
        process.env.COGNITO_ISSUER ||
        "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_zDBRQDCox",
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
          // For development - use dummy credentials
          if (
            credentials.email === DUMMY_EMAIL &&
            credentials.password === DUMMY_PASSWORD
          ) {
            return {
              id: "dummy-user-id",
              email: credentials.email,
              name: "Test User",
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
    maxAge: 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as UserData;
      }
      return session as Session;
    },
  },
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
