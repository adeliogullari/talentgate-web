"use client";

import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import {
  User,
  Users,
  Briefcase,
  FileText,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  XCircle,
  Filter,
  Search,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for activities
const activities = [
  {
    id: 1,
    user: "Alice Johnson",
    action: "added a new candidate",
    target: "John Doe",
    targetType: "candidate",
    date: "2023-09-25T10:00",
    position: "Frontend Developer",
  },
  {
    id: 2,
    user: "Bob Smith",
    action: "scheduled an interview",
    target: "Jane Smith",
    targetType: "candidate",
    date: "2023-09-25T11:30",
    position: "Product Manager",
  },
  {
    id: 3,
    user: "Carol Williams",
    action: "rejected a candidate",
    target: "Mike Brown",
    targetType: "candidate",
    date: "2023-09-25T14:00",
    position: "UX Designer",
  },
  {
    id: 4,
    user: "David Lee",
    action: "posted a new job",
    target: "Senior Software Engineer",
    targetType: "job",
    date: "2023-09-26T09:00",
  },
  {
    id: 5,
    user: "Eva Garcia",
    action: "sent an offer",
    target: "Sarah Johnson",
    targetType: "candidate",
    date: "2023-09-26T13:00",
    position: "Data Analyst",
  },
  {
    id: 6,
    user: "Frank Chen",
    action: "updated job description",
    target: "Marketing Specialist",
    targetType: "job",
    date: "2023-09-27T10:00",
  },
  {
    id: 7,
    user: "Grace Kim",
    action: "conducted a phone screening",
    target: "Tom Wilson",
    targetType: "candidate",
    date: "2023-09-27T14:30",
    position: "DevOps Engineer",
  },
  {
    id: 8,
    user: "Henry Nguyen",
    action: "moved candidate to next round",
    target: "Emily Davis",
    targetType: "candidate",
    date: "2023-09-28T11:00",
    position: "Sales Representative",
  },
  {
    id: 1,
    user: "Alice Johnson",
    action: "added a new candidate",
    target: "John Doe",
    targetType: "candidate",
    date: "2023-09-25T10:00",
    position: "Frontend Developer",
  },
  {
    id: 2,
    user: "Bob Smith",
    action: "scheduled an interview",
    target: "Jane Smith",
    targetType: "candidate",
    date: "2023-09-25T11:30",
    position: "Product Manager",
  },
  {
    id: 3,
    user: "Carol Williams",
    action: "rejected a candidate",
    target: "Mike Brown",
    targetType: "candidate",
    date: "2023-09-25T14:00",
    position: "UX Designer",
  },
  {
    id: 4,
    user: "David Lee",
    action: "posted a new job",
    target: "Senior Software Engineer",
    targetType: "job",
    date: "2023-09-26T09:00",
  },
  {
    id: 5,
    user: "Eva Garcia",
    action: "sent an offer",
    target: "Sarah Johnson",
    targetType: "candidate",
    date: "2023-09-26T13:00",
    position: "Data Analyst",
  },
  {
    id: 6,
    user: "Frank Chen",
    action: "updated job description",
    target: "Marketing Specialist",
    targetType: "job",
    date: "2023-09-27T10:00",
  },
  {
    id: 7,
    user: "Grace Kim",
    action: "conducted a phone screening",
    target: "Tom Wilson",
    targetType: "candidate",
    date: "2023-09-27T14:30",
    position: "DevOps Engineer",
  },
  {
    id: 8,
    user: "Henry Nguyen",
    action: "moved candidate to next round",
    target: "Emily Davis",
    targetType: "candidate",
    date: "2023-09-28T11:00",
    position: "Sales Representative",
  },
];

const actionIcons: any = {
  "added a new candidate": <User className="h-4 w-4" />,
  "scheduled an interview": <Calendar className="h-4 w-4" />,
  "rejected a candidate": <XCircle className="h-4 w-4" />,
  "posted a new job": <Briefcase className="h-4 w-4" />,
  "sent an offer": <Mail className="h-4 w-4" />,
  "updated job description": <FileText className="h-4 w-4" />,
  "conducted a phone screening": <Phone className="h-4 w-4" />,
  "moved candidate to next round": <CheckCircle className="h-4 w-4" />,
};

export default function DashobardActivityPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard Activity Log</h1>

      <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0">
        <div className="flex w-full md:w-1/3 items-center space-x-2">
          <Search className="h-4 w-4 text-gray-400" />
          <Input placeholder="Search activities..." className="w-full" />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Filter by action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              {Object.keys(actionIcons).map((action) => (
                <SelectItem key={action} value={action}>
                  {action}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-4 border rounded-lg"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={`/placeholder.svg?height=40&width=40`}
                alt={activity.user}
              />
              <AvatarFallback>
                {activity.user
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">{activity.user}</p>
              <p className="text-sm text-gray-500 flex gap-1">
                <span className="inline-flex items-center space-x-1">
                  {actionIcons[activity.action]}
                  <span>{activity.action}</span>
                </span>{" "}
                <span className="font-medium">{activity.target}</span>
                {activity.position && ` for ${activity.position}`}
              </p>
              <p className="text-xs text-gray-400">
                {format(parseISO(activity.date), "MMM d, yyyy HH:mm")}
              </p>
            </div>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
