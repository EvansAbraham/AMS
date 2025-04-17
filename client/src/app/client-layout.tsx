"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { AssetProvider } from "@/context/AssetContext";
import { MobileSidebar } from "@/components/mobile-sidebar";
import AuthSessionProvider from "./session-provider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/auth";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Provider store={store}>
      <AuthSessionProvider>
        <AuthProvider>
          <AssetProvider>
            {isAuthPage ? (
              children
            ) : (
              <>
                <div className="md:hidden">
                  <MobileSidebar />
                </div>
                <SidebarProvider>
                  <div className="hidden md:block">
                    <AppSidebar />
                  </div>
                  {children}
                </SidebarProvider>
              </>
            )}
          </AssetProvider>
        </AuthProvider>
      </AuthSessionProvider>
    </Provider>
  );
}
