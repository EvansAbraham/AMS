import { Clipboard, FileSearch, LayoutDashboard, Upload, UserPlus } from "lucide-react";

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
  },
  {
    title: "Assets",
    url: "/assets",
    icon: Clipboard,
  },
  {
    title: "LA/PA",
    url: "/lapa",
    icon: FileSearch,
  },
  {
    title: "Add Engineer",
    url: "/addengineer",
    icon: UserPlus,
  },
  {
    title: "Upload Master Data",
    url: "/uploaddata",
    icon: Upload,
  },
];

export function AppSidebar() {
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
              {items.map((item) => (
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
