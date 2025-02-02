"use client";

import {
  Archive,
  BookUser,
  Briefcase,
  ChartNoAxesCombined,
  HomeIcon,
  AppWindow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNavbarItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    title: "Jobs",
    link: "/jobs",
    icon: <Briefcase />,
  },
  {
    id: 4,
    title: "Talent pools",
    link: "/talent-pools",
    icon: <Archive />,
  },
  {
    id: 5,
    title: "Career Page",
    link: "/company/1/careers",
    icon: <AppWindow />,
  },
];

const Sidebar = () => {
  const currentRoute = usePathname();

  return (
    <div className="flex flex-col gap-2 border border-y-0 z-10">
      <div className="text-xl text-primary border-b grid place-items-center h-[7dvh]">
        PEOPLEGATE
      </div>
      <div className="flex flex-col gap-1 mx-2">
        {sidebarItems.map((item) => (
          <Link href={item.link} key={item.id}>
            <Button
              variant="ghost"
              className={cn("justify-start w-full", [
                currentRoute.includes(item.link) && "bg-accent",
              ])}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.title}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
