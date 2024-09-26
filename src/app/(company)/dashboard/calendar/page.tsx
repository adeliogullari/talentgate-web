"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarIcon, PlusCircle, Clock, MapPin, User } from "lucide-react";

// Mock data for events
const events = [
  {
    id: 1,
    title: "Interview with John Doe",
    type: "interview",
    time: "10:00 AM",
    location: "Meeting Room 1",
    candidate: "John Doe",
  },
  {
    id: 2,
    title: "Team Sync",
    type: "meeting",
    time: "2:00 PM",
    location: "Zoom Call",
    candidate: null,
  },
  {
    id: 3,
    title: "Interview with Jane Smith",
    type: "interview",
    time: "4:00 PM",
    location: "Meeting Room 2",
    candidate: "Jane Smith",
  },
];

export default function ATSCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);

  const handleAddEvent = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to add new event would go here
    setIsAddEventOpen(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard Calendar</h1>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <div className="grid items-center h-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-full h-full"
            classNames={{
              months:
                "flex w-full flex-col h-full sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              head_row: "",
              row: "w-full mt-2",
              cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-none [&:has([aria-selected])]:bg-none first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            }}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Events for {date?.toDateString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {events.map((event) => (
                <div key={event.id} className="mb-4 last:mb-0">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={event.candidate || "Event"}
                      />
                      <AvatarFallback>
                        {event.type === "interview" ? "IN" : "MT"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="font-medium leading-none">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {event.location}
                      </div>
                      {event.candidate && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="mr-1 h-4 w-4" />
                          {event.candidate}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsAddEventOpen(true)} className="mt-10">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Event
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
            <DialogDescription>
              Create a new event or schedule an interview.
            </DialogDescription>
          </DialogHeader>
          <div onSubmit={handleAddEvent}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input id="title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Type
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="interview">Interview</SelectItem>
                    <SelectItem value="meeting">Meeting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <div className="col-span-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Pick a date</span>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">
                  Time
                </Label>
                <Input id="time" className="col-span-3" type="time" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input id="location" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Event</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
