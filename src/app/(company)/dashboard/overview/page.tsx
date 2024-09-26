"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Users, Briefcase, Calendar } from "lucide-react";

const data = [
  { month: "Jan", applications: 400 },
  { month: "Feb", applications: 300 },
  { month: "Mar", applications: 500 },
  { month: "Apr", applications: 280 },
  { month: "May", applications: 590 },
  { month: "Jun", applications: 320 },
];

const chartConfig = {
  applications: {
    label: "Applications",
    color: "#000000",
  },
  month: {
    label: "Month",
  },
} satisfies ChartConfig;

const recentActivities = [
  {
    id: 1,
    action: "New application",
    position: "Frontend Developer",
    applicant: "Jane Doe",
  },
  {
    id: 2,
    action: "Interview scheduled",
    position: "Product Manager",
    applicant: "John Smith",
  },
  {
    id: 3,
    action: "Offer sent",
    position: "UX Designer",
    applicant: "Emily Brown",
  },
];

const topOpenings = [
  {
    id: 1,
    position: "Senior React Developer",
    department: "Engineering",
    applicants: 45,
  },
  {
    id: 2,
    position: "Product Marketing Manager",
    department: "Marketing",
    applicants: 32,
  },
  { id: 3, position: "Data Scientist", department: "Data", applicants: 28 },
];

const DashobardOverviewPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applicants
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Open Positions
            </CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">+2 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Interviews Scheduled
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">For the next 7 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Application Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
              <BarChart data={data}>
                <CartesianGrid vertical={true} />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} />
                <YAxis dataKey="applications" tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
                <Bar
                  dataKey="applications"
                  className="fill-primary"
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`/placeholder.svg?height=36&width=36`}
                      alt={activity.applicant}
                    />
                    <AvatarFallback>
                      {activity.applicant
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.position} - {activity.applicant}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Open Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topOpenings.map((opening) => (
              <div
                key={opening.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium">{opening.position}</p>
                  <p className="text-sm text-muted-foreground">
                    {opening.department}
                  </p>
                </div>
                <Badge variant="secondary">
                  {opening.applicants} applicants
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashobardOverviewPage;
