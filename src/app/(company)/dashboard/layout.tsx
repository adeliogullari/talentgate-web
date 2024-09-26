import "@/app/globals.css";
import MobileSubbar from "../_components/navigation/MobileSubbar";
import Subbar from "../_components/navigation/Subbar";
import { mainNavbarItem } from "@/types/types";
import {
  Calendar,
  CalendarClock,
  CheckCheck,
  Eye,
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
    <div className="hidden lg:grid grid-cols-[15dvw_70dvw] h-full">
      <Subbar subbarItems={subbarItems} />
      <div className="overflow-y-auto">{children}</div>
    </div>
  );
}
