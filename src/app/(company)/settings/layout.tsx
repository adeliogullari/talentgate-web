import "@/app/globals.css";
import Subbar from "../_components/navigation/Subbar";
import { mainNavbarItem } from "@/types/types";

const subbarCategories: string[] = [
  "My Account",
  "Company",
  "Workflow",
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
    title: "Notifications",
    link: "/settings/notifications",
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
    title: "Hiring roles",
    link: "/settings/hiring-roles",
    category: "Company",
  },
  {
    id: 6,
    title: "Billing",
    link: "/settings/billing",
    category: "Company",
  },
  {
    id: 7,
    title: "Meetings",
    link: "/settings/meetings",
    category: "Company",
  },
  {
    id: 8,
    title: "Audit logs",
    link: "/settings/audit-logs",
    category: "Company",
  },
  {
    id: 9,
    title: "Messaging",
    link: "/settings/messaging",
    category: "Company",
  },
  {
    id: 10,
    title: "Requisition approvals",
    link: "/settings/requisiton-approvals",
    category: "Workflow",
  },
  {
    id: 11,
    title: "Disqualify reasons",
    link: "/settings/disqualify-reasons",
    category: "Workflow",
  },
  {
    id: 12,
    title: "Tags & Sources",
    link: "/settings/tags-sources",
    category: "Workflow",
  },
  {
    id: 13,
    title: "Departments",
    link: "/settings/departments",
    category: "Workflow",
  },
  {
    id: 14,
    title: "Public link to candidates",
    link: "/settings/public-links",
    category: "Workflow",
  },
  {
    id: 15,
    title: "Event scheduler",
    link: "/settings/event-scheduler",
    category: "Workflow",
  },
  {
    id: 16,
    title: "Pipelines",
    link: "/settings/pipelines",
    category: "Templates",
  },
  {
    id: 17,
    title: "Profile fields",
    link: "/settings/profile-fields",
    category: "Templates",
  },
  {
    id: 18,
    title: "Email templates",
    link: "/settings/email-templates",
    category: "Templates",
  },
  {
    id: 19,
    title: "Evaluation forms",
    link: "/settings/evaluation-forms",
    category: "Templates",
  },
  {
    id: 20,
    title: "Questionnaires",
    link: "/settings/questionnaires",
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
