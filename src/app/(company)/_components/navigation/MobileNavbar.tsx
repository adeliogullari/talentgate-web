"use client";

import {
  Archive,
  Bell,
  BookUser,
  Briefcase,
  ChartNoAxesCombined,
  CircleHelp,
  HomeIcon,
  Mail,
  MenuIcon,
  Notebook,
  Rss,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { mainNavbarItem } from "@/types/types";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileAvatar from "../button/MobileAvatar";
import SearchField from "../input/SearchField";

const sidebarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Candidates",
    link: "/candidates",
    icon: <BookUser />,
  },
  {
    id: 3,
    title: "Requisitons",
    link: "/requisitons",
    icon: <Notebook />,
  },
  {
    id: 4,
    title: "Jobs",
    link: "/jobs",
    icon: <Briefcase />,
  },
  {
    id: 5,
    title: "Mailbox",
    link: "/mailbox",
    icon: <Mail />,
  },
  {
    id: 6,
    title: "Analytics",
    link: "/analytics",
    icon: <ChartNoAxesCombined />,
  },
  {
    id: 7,
    title: "Talent pools",
    link: "/talent-pools",
    icon: <Archive />,
  },
  {
    id: 8,
    title: "Acquisiton",
    link: "/acquisiton",
    icon: <Rss />,
  },
];

const topbarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Notifications",
    link: "/notifications",
    icon: <Bell />,
  },
  {
    id: 2,
    title: "Help",
    link: "/help",
    icon: <CircleHelp />,
  },
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const currentRoute = usePathname();

  return (
    <div className="border-b h-14 flex items-center justify-between px-4 lg:hidden sticky top-0 bg-background z-10">
      {/* LEFT MENU */}
      <Drawer open={open} onOpenChange={setOpen}>
        {/* LEFT MENU TRIGGER */}
        <DrawerTrigger>
          <div>
            <span>
              <MenuIcon size={30}></MenuIcon>
            </span>
          </div>
        </DrawerTrigger>

        {/* LEFT MENU CONTENT */}
        <DrawerContent className="w-full h-4/5">
          <div className="flex flex-col gap-6 p-3 overflow-y-auto">
            {/* AVATAR */}
            <MobileAvatar />

            {/* SEARCH FIELD */}
            <SearchField />

            {/* SIDEBAR ITEMS */}
            <div className="flex flex-col gap-2 w-full">
              {sidebarItems.map((item) => (
                <Link href={item.link} key={item.id}>
                  <Button
                    key={item.id}
                    onClick={() => setOpen(false)}
                    variant={"ghost"}
                    className={cn("gap-3 justify-start w-full", [
                      currentRoute.includes(item.link) && "bg-accent",
                    ])}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Button>
                </Link>
              ))}
            </div>

            <hr className="w-full" />

            {/* TOPBAR ITEMS */}
            <div className="flex flex-col gap-2">
              {topbarItems.map((item) => (
                <Link href={item.link} key={item.id}>
                  <Button
                    key={item.id}
                    onClick={() => setOpen(false)}
                    variant={"ghost"}
                    className="gap-3 justify-start"
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      {/* LOGO / HOME BUTTON */}
      <div className="absolute right-1/2 translate-x-1/2">
        <span className="text-2xl text-primary">PEOPLEGATE</span>
      </div>

      <div />
    </div>
  );
};

export default MobileNavbar;
