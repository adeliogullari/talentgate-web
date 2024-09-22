import "@/app/globals.css";
import MobileSubbar from "../_components/navigation/MobileSubbar";
import Subbar from "../_components/navigation/Subbar";
import { mainNavbarItem } from "@/types/types";
import {
  Archive,
  Bookmark,
  Calendar,
  CalendarClock,
  CheckCheck,
  Eye,
  NotebookPen,
  PersonStanding,
  SquareActivity,
} from "lucide-react";

const subbarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Board",
    link: "/jobs/board",
    icon: <Eye />,
  },
  {
    id: 2,
    title: "Archive",
    link: "/jobs/archive",
    icon: <Archive />,
  },
  {
    id: 3,
    title: "Candidates",
    link: "/jobs/Candidates",
    icon: <PersonStanding />,
  },
  {
    id: 4,
    title: "Evaluations",
    link: "/jobs/evaluations",
    icon: <NotebookPen />,
  },
  {
    id: 5,
    title: "Bookmarked",
    link: "/jobs/bookmarked",
    icon: <Bookmark />,
  },
];

export default function JobsLayout({
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

      <div className="hidden lg:flex h-full w-full">
        <Subbar subbarItems={subbarItems} />
        <div className="overflow-y-auto w-full">{children}</div>
      </div>
    </>
  );
}
