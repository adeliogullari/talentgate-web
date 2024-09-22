"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useTheme } from "next-themes";
import { mainNavbarItem } from "@/types/types";

const avatarDropdownMenuItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Profile",
    link: "/",
  },
  {
    id: 2,
    title: "Team",
    link: "/",
  },
  {
    id: 3,
    title: "Settings",
    link: "/settings",
  },
];

const Account = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none transition ease-in-out hover:ring-2 ring-primary rounded-full">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 relative top-4 right-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {avatarDropdownMenuItems.map((item) => (
          <Link href={item.link} key={item.id}>
            <DropdownMenuItem>{item.title}</DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuLabel className="mt-4">Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme === "light"}
          disabled={theme === "light"}
          onCheckedChange={() => {
            setTheme("light");
          }}
        >
          Light Mode
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "dark"}
          disabled={theme === "dark"}
          onCheckedChange={() => {
            setTheme("dark");
          }}
        >
          Dark Mode
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Account;
