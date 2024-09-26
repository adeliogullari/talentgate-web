"use client";

import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import {
  Calendar,
  Filter,
  Search,
  Users,
  Briefcase,
  Clock,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for events
const events = [
  {
    id: 1,
    title: "Interview with John Doe",
    type: "interview",
    date: "2023-09-25T10:00",
    candidate: "John Doe",
    position: "Frontend Developer",
  },
  {
    id: 2,
    title: "Application Deadline",
    type: "deadline",
    date: "2023-09-27T23:59",
    position: "UX Designer",
  },
  { id: 3, title: "Team Sync", type: "meeting", date: "2023-09-28T14:00" },
  {
    id: 4,
    title: "Interview with Jane Smith",
    type: "interview",
    date: "2023-09-29T11:00",
    candidate: "Jane Smith",
    position: "Product Manager",
  },
  {
    id: 5,
    title: "Resume Screening",
    type: "task",
    date: "2023-09-26T09:00",
    position: "Data Analyst",
  },
  {
    id: 6,
    title: "Offer Review",
    type: "meeting",
    date: "2023-09-30T15:00",
    position: "Software Engineer",
  },
  {
    id: 7,
    title: "Phone Screening",
    type: "interview",
    date: "2023-10-01T13:00",
    candidate: "Mike Johnson",
    position: "DevOps Engineer",
  },
  {
    id: 8,
    title: "Candidate Assessment",
    type: "task",
    date: "2023-10-02T10:00",
    position: "Marketing Specialist",
  },
];

const eventTypeIcons: any = {
  interview: <Users className="h-4 w-4" />,
  deadline: <Clock className="h-4 w-4" />,
  meeting: <Briefcase className="h-4 w-4" />,
  task: <FileText className="h-4 w-4" />,
};

export default function DashobardEventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredEvents = events.filter(
    (event) =>
      (filterType === "all" || event.type === filterType) &&
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (event.candidate &&
          event.candidate.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (event.position &&
          event.position.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard Events</h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Event Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Interviews</p>
                  <p className="text-2xl font-bold">
                    {events.filter((e) => e.type === "interview").length}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium">Deadlines</p>
                  <p className="text-2xl font-bold">
                    {events.filter((e) => e.type === "deadline").length}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm font-medium">Meetings</p>
                  <p className="text-2xl font-bold">
                    {events.filter((e) => e.type === "meeting").length}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium">Tasks</p>
                  <p className="text-2xl font-bold">
                    {events.filter((e) => e.type === "task").length}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0">
              <div className="flex w-full md:w-1/3 items-center space-x-2">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="interview">Interviews</SelectItem>
                    <SelectItem value="deadline">Deadlines</SelectItem>
                    <SelectItem value="meeting">Meetings</SelectItem>
                    <SelectItem value="task">Tasks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>
                      <div className="font-medium">{event.title}</div>
                      {event.position && (
                        <div className="text-sm text-muted-foreground">
                          {event.position}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="flex items-center w-fit space-x-1"
                      >
                        {eventTypeIcons[event.type]}
                        <span>
                          {event.type.charAt(0).toUpperCase() +
                            event.type.slice(1)}
                        </span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>
                          {format(parseISO(event.date), "MMM d, yyyy HH:mm")}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {event.candidate && (
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={`/placeholder.svg?height=32&width=32`}
                              alt={event.candidate}
                            />
                            <AvatarFallback>
                              {event.candidate
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{event.candidate}</span>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
