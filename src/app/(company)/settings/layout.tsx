import "@/app/globals.css";
import Subbar from "../_components/navigation/Subbar";
import { mainNavbarItem } from "@/types/types";

const subbarCategories: string[] = [
  "My Account",
  "Company",
  "Templates",
];

const subbarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Profile",
    link: "/settings/profile",
    category: "My Account",
  },
  {
    id: 2,
    title: "Password settings",
    link: "/settings/password-settings",
    category: "My Account",
  },
  {
    id: 3,
    title: "Company settings",
    link: "/settings/company-settings",
    category: "Company",
  },
  {
    id: 4,
    title: "Team members",
    link: "/settings/team-members",
    category: "Company",
  },
  {
    id: 5,
    title: "Departments",
    link: "/settings/departments",
    category: "Company",
  },
  {
    id: 6,
    title: "Locations",
    link: "/settings/locations",
    category: "Company",
  },
  {
    id: 7,
    title: "Email templates",
    link: "/settings/email-templates",
    category: "Templates",
  },
  {
    id: 8,
    title: "Application forms",
    link: "/settings/application-forms",
    category: "Templates",
  },
];

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full w-full">
      <div className="hidden lg:block">
        <Subbar subbarItems={subbarItems} categories={subbarCategories} />
      </div>
      <div className="lg:overflow-y-auto w-full">{children}</div>
    </div>
  );
}
