"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Clipboard, FileSearch, LayoutDashboard, Upload, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { ProfileMenu } from "./profile-menu";

export function MobileSidebar() {
  const pathname = usePathname();
  
  // Getting session data
  const { data: session } = useSession();

  // Define items for the sidebar with associated roles
  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      role: "admin",
    },
    {
      title: "Assets",
      url: "/assets",
      icon: Clipboard,
      role: "user",
    },
    {
      title: "LA/PA",
      url: "/lapa",
      icon: FileSearch,
      role: "user",
    },
    {
      title: "Add Engineer",
      url: "/addengineer",
      icon: UserPlus,
      role: "admin",
    },
    {
      title: "Upload Master Data",
      url: "/uploaddata",
      icon: Upload,
      role: "admin",
    },
  ];

  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden fixed top-4 left-4 z-20"
        >
          <Menu className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="p-0 w-[250px] border-r z-30 flex flex-col"
      >
        <div className="flex flex-col h-full">
          <div className="px-4 py-2 mb-4 border-b">
            <h1 className="text-lg font-semibold">Assetra</h1>
          </div>
          <nav className="space-y-1 px-2">
            {items
              .filter((item) => {
                // Filter out items that are not accessible based on the user's role
                if (item.role === "admin" && session?.user?.role !== "admin") {
                  return false;
                }
                return true;
              })
              .map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                    pathname === item.url 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-muted-foreground hover:bg-accent'
                  }`}
                  onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  <span>{item.title}</span>
                </Link>
              ))}
          </nav>
          <footer className="mt-auto border-t px-3 py-2">
            <ProfileMenu />
          </footer>
        </div>
      </SheetContent>
    </Sheet>
  );
}
