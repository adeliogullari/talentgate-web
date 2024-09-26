"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Star,
} from "lucide-react";

// Mock data for candidates
const candidates: any = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 234 567 8901",
    location: "New York, NY",
    appliedFor: "Frontend Developer",
    status: "Interview",
    rating: 4,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "+1 234 567 8902",
    location: "San Francisco, CA",
    appliedFor: "Product Manager",
    status: "Screening",
    rating: 3,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "+1 234 567 8903",
    location: "Chicago, IL",
    appliedFor: "Data Scientist",
    status: "Offer",
    rating: 5,
  },
  {
    id: 4,
    name: "Diana Ross",
    email: "diana@example.com",
    phone: "+1 234 567 8904",
    location: "Los Angeles, CA",
    appliedFor: "UX Designer",
    status: "New",
    rating: 0,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan@example.com",
    phone: "+1 234 567 8905",
    location: "Boston, MA",
    appliedFor: "Backend Developer",
    status: "Rejected",
    rating: 2,
  },
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 234 567 8901",
    location: "New York, NY",
    appliedFor: "Frontend Developer",
    status: "Interview",
    rating: 4,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "+1 234 567 8902",
    location: "San Francisco, CA",
    appliedFor: "Product Manager",
    status: "Screening",
    rating: 3,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "+1 234 567 8903",
    location: "Chicago, IL",
    appliedFor: "Data Scientist",
    status: "Offer",
    rating: 5,
  },
  {
    id: 4,
    name: "Diana Ross",
    email: "diana@example.com",
    phone: "+1 234 567 8904",
    location: "Los Angeles, CA",
    appliedFor: "UX Designer",
    status: "New",
    rating: 0,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan@example.com",
    phone: "+1 234 567 8905",
    location: "Boston, MA",
    appliedFor: "Backend Developer",
    status: "Rejected",
    rating: 2,
  },
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 234 567 8901",
    location: "New York, NY",
    appliedFor: "Frontend Developer",
    status: "Interview",
    rating: 4,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "+1 234 567 8902",
    location: "San Francisco, CA",
    appliedFor: "Product Manager",
    status: "Screening",
    rating: 3,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "+1 234 567 8903",
    location: "Chicago, IL",
    appliedFor: "Data Scientist",
    status: "Offer",
    rating: 5,
  },
  {
    id: 4,
    name: "Diana Ross",
    email: "diana@example.com",
    phone: "+1 234 567 8904",
    location: "Los Angeles, CA",
    appliedFor: "UX Designer",
    status: "New",
    rating: 0,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan@example.com",
    phone: "+1 234 567 8905",
    location: "Boston, MA",
    appliedFor: "Backend Developer",
    status: "Rejected",
    rating: 2,
  },
];

export default function CandidatesPage() {
  const initialCandidate = {
    id: -1,
    name: "",
    email: "",
    phone: "",
    location: "",
    appliedFor: "",
    status: "",
    rating: -1,
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(initialCandidate);

  const filteredCandidates = candidates.filter(
    (candidate: any) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.appliedFor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statusColor: any = {
    New: "bg-blue-500",
    Screening: "bg-yellow-500",
    Interview: "bg-purple-500",
    Offer: "bg-green-500",
    Rejected: "bg-red-500",
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Candidates</h1>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex w-full md:w-1/3 items-center space-x-2">
          <Search className="h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search candidates..."
            className="w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Candidate List</CardTitle>
          <CardDescription>Manage and review your candidates</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Applied For</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCandidates.map((candidate: any) => (
                <TableRow key={candidate.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage
                          src={`/placeholder.svg?height=40&width=40`}
                          alt={candidate.name}
                        />
                        <AvatarFallback>
                          {candidate.name
                            .split(" ")
                            .map((n: any) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div>{candidate.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {candidate.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{candidate.appliedFor}</TableCell>
                  <TableCell>
                    <Badge className={`${statusColor[candidate.status]}`}>
                      {candidate.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < candidate.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          onClick={() => setSelectedCandidate(candidate)}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{selectedCandidate?.name}</DialogTitle>
                          <DialogDescription>
                            Candidate Details
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Mail className="h-4 w-4" />
                            <span className="col-span-3">
                              {selectedCandidate?.email}
                            </span>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Phone className="h-4 w-4" />
                            <span className="col-span-3">
                              {selectedCandidate?.phone}
                            </span>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <MapPin className="h-4 w-4" />
                            <span className="col-span-3">
                              {selectedCandidate?.location}
                            </span>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Briefcase className="h-4 w-4" />
                            <span className="col-span-3">
                              {selectedCandidate?.appliedFor}
                            </span>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Calendar className="h-4 w-4" />
                            <span className="col-span-3">
                              Applied on: June 1, 2023
                            </span>
                          </div>
                        </div>
                        <Tabs defaultValue="resume">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="resume">Resume</TabsTrigger>
                            <TabsTrigger value="notes">Notes</TabsTrigger>
                            <TabsTrigger value="timeline">Timeline</TabsTrigger>
                          </TabsList>
                          <TabsContent value="resume">
                            [Resume content placeholder]
                          </TabsContent>
                          <TabsContent value="notes">
                            [Notes content placeholder]
                          </TabsContent>
                          <TabsContent value="timeline">
                            [Timeline content placeholder]
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
