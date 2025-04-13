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
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";
import { ProfileMenu } from "./profile-menu";

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
      <SidebarContent className="flex flex-col h-full">
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
      <SidebarFooter className="border-t px-0 py-2 ml-1 ">
        <ProfileMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
