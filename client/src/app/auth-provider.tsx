"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store";
import { AssetProvider } from "@/context/AssetContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import AuthSessionProvider from "./session-provider";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthSessionProvider>
      <Provider store={store}>
        <AssetProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </AssetProvider>
      </Provider>
    </AuthSessionProvider>
  );
}