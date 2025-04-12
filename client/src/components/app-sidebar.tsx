import { Clipboard, FileSearch, LayoutDashboard, Upload, UserPlus } from "lucide-react";
import { useSession } from "next-auth/react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";

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

export function AppSidebar() {
  const { data: session } = useSession();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex">
              <SidebarTrigger className="mx-0.5" />
              <SidebarGroupLabel className="text-sm font-bold">
                Assetra
              </SidebarGroupLabel>
            </div>
            <Separator className="" />
            <SidebarMenu>
              {items
                .filter((item) => {
                  if (item.role === "admin" && session?.user?.role !== "admin") {
                    return false;
                  }
                  return true;
                })
                .map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
