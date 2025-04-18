"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { getSession, signIn, signOut, useSession } from "next-auth/react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  const isLoading = status === "loading";
  const isAuthenticated =
    status === "authenticated" ||
    (typeof window !== "undefined" &&
      localStorage.getItem("isAuthenticated") === "true");

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      console.log(`Attempting to sign in with: ${email}`);
  
      // Try credentials login
      const credResult = await signIn("credentials", {
        redirect: true,
        email,
        password,
      });
  
      if (credResult?.error) {
        console.log("Credentials login failed, trying Cognito...");
  
        // Try Cognito provider
        const cognitoResult = await signIn("cognito", {
          redirect: true,
        });
  
        if (cognitoResult?.error) {
          throw new Error(cognitoResult.error);
        }
      }
  
      // Wait for session to update after sign-in
      const session = await getSession();
      console.log("Session after login:", session); // Add logging
  
      // if (!session?.user) {
      //   throw new Error("Session not found after login");
      // }
  
      // // Redirect based on role
      // if (session.user.role === "admin") {
      //   router.push("/dashboard");
      // } else {
      //   router.push("/assets");
      // }

      let redirectPath;
      if (session?.user?.role === "admin") {
        redirectPath = "/dashboard";
      } else {
        redirectPath = "/assets";
      }

      // Set flags for middleware
      localStorage.setItem("isAuthenticated", "true");
      document.cookie = `isAuthenticated=true; path=/`;

      const callbackUrl = new URL(redirectPath, window.location.origin).toString();
      console.log("Redirecting to:", callbackUrl);
    
      // Manually navigate to the correct page
      router.push(callbackUrl);
      
      console.log("Sign in successful");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  

  const logout = async () => {
    try {
      setLoading(true);
      await signOut({ redirect: false });
      localStorage.removeItem("isAuthenticated");
      document.cookie =
        "isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      router.push("/auth");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, loading: isLoading || loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};