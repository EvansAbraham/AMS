"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/auth";
  const [mounted, setMounted] = useState(false);

  // to Prevent hydration errors by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (typeof window !== "undefined") {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (isAuth) {
      document.cookie = `isAuthenticated=true; path=/`;
    }
  }

  return (
    <SessionProvider>
      <AuthProvider>
        {isAuthPage ? (
          children
        ) : (
          <SidebarProvider>
            <AppSidebar />
            {children}
          </SidebarProvider>
        )}
      </AuthProvider>
    </SessionProvider>
  );
}
