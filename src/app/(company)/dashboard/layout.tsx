import "@/app/globals.css";
import MobileSubbar from "../_components/navigation/MobileSubbar";
import Subbar from "../_components/navigation/Subbar";
import { mainNavbarItem } from "@/types/types";
import {
  Calendar,
  CalendarClock,
  CheckCheck,
  Eye,
  NotebookPen,
  SquareActivity,
} from "lucide-react";

const subbarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Overview",
    link: "/dashboard/overview",
    icon: <Eye />,
  },
  {
    id: 2,
    title: "Calendar",
    link: "/dashboard/calendar",
    icon: <Calendar />,
  },
  {
    id: 3,
    title: "Events",
    link: "/dashboard/events",
    icon: <CalendarClock />,
  },
  {
    id: 4,
    title: "Tasks",
    link: "/dashboard/tasks",
    icon: <CheckCheck />,
  },
  {
    id: 5,
    title: "Activity",
    link: "/dashboard/activity",
    icon: <SquareActivity />,
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col lg:hidden">
        {children}
        <MobileSubbar subbarItems={subbarItems} />
      </div>

      <div className="hidden lg:flex h-full">
        <Subbar subbarItems={subbarItems} />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
