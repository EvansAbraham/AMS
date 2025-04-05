"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux';
import { store } from '@/app/store'; // Adjust this import path based on where you create your store
import { AssetProvider } from "@/context/AssetContext";

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
    <Provider store={store}>

      <SessionProvider>
        <AuthProvider>
          <AssetProvider>
            {isAuthPage ? (
              children
            ) : (
              <SidebarProvider>
                <AppSidebar />
                {children}
              </SidebarProvider>
            )}
          </AssetProvider>
        </AuthProvider>
      </SessionProvider>
    </Provider>
  );
}