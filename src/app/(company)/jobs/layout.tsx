import "@/app/globals.css";
import MobileSubbar from "../_components/navigation/MobileSubbar";
import Subbar from "../_components/navigation/Subbar";
import { mainNavbarItem } from "@/types/types";
import {
  Archive,
  Bookmark,
  ClipboardList,
  NotebookPen,
  PersonStanding,
} from "lucide-react";

const subbarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Board",
    link: "/jobs/board",
    icon: <ClipboardList />,
  },
  {
    id: 2,
    title: "Bookmarked",
    link: "/jobs/bookmarked",
    icon: <Bookmark />,
  },
  {
    id: 3,
    title: "Archive",
    link: "/jobs/archive",
    icon: <Archive />,
  },
  {
    id: 4,
    title: "Candidates",
    link: "/candidates",
    icon: <PersonStanding />,
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

      <div className="hidden lg:grid grid-cols-[15dvw_70dvw] h-full">
        <Subbar subbarItems={subbarItems} />
        <div className="overflow-y-auto">
        {children}
        </div>
      </div>
    </>
  );
}
