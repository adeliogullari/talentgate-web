"use client";

import { defaultJobs } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Clock9,
  FacebookIcon,
  Filter,
  FilterX,
  Laptop,
  LinkedinIcon,
  MapPin,
  SearchIcon,
  TwitterIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const filterGroup = {
  keyword: "",
  jobType: [
    {
      id: "full-time",
      label: "Full-Time",
      checked: false,
    },
    {
      id: "part-time",
      label: "Part-Time",
      checked: false,
    },
    {
      id: "internship",
      label: "Internship",
      checked: false,
    },
  ],
  remote: [
    {
      id: "remote",
      label: "Remote",
      checked: false,
    },
    {
      id: "hybrid",
      label: "Hybrid",
      checked: false,
    },
    {
      id: "onsite",
      label: "On-Site",
      checked: false,
    },
  ],
  department: [
    {
      id: "engineering",
      label: "Engineering",
      checked: false,
    },
    {
      id: "marketing",
      label: "Marketing",
      checked: false,
    },
    {
      id: "sales",
      label: "Sales",
      checked: false,
    },
    {
      id: "analytics",
      label: "Analytics",
      checked: false,
    },
  ],
};

const CareerPage = () => {
  const [renderFilterGroup, setRenderFilterGroup] = useState(false);

  const toggleFilterGroup = () => {
    setRenderFilterGroup(!renderFilterGroup);
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-around w-full sticky top-0 bg-background z-10 py-2">
        <div className="size-12 bg-pink-500 rounded-xl grid text-center items-center">
          LOGO
        </div>
        <div className="flex gap-4 items-center lg:gap-14">
          <Button>Company Site</Button>
          <LinkedinIcon></LinkedinIcon>
          <FacebookIcon></FacebookIcon>
          <TwitterIcon></TwitterIcon>
        </div>
      </div>

      <div className="lg:pb-24">
        {/* HERO BANNER */}
        <div className="flex flex-col bg-gradient-to-tr from-secondary to-primary py-14 lg:py-0 lg:h-[45dvh] lg:items-center lg:justify-center">
          <div className="grid place-items-center gap-6">
            <h1 className="text-4xl font-semibold text-center lg:text-5xl">
              Find your next career opportunity
            </h1>
            <p className="text-xl text-center">
              Explore our open positions and join our growing team.
            </p>
            <div className="w-4/5 lg:w-full h-fit relative">
              <Input placeholder="Search" className="w-full h-fit" />
              <button className="right-3 top-0 h-full absolute">
                <SearchIcon className="stroke-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-12 lg:max-h-[55dvh] lg:flex-row lg:gap-32 lg:p-8 lg:pt-16">
          {/* FILTER GROUP */}
          <div className="w-fit">
            <Button
              className={`"flex gap-2 lg:hidden " ${renderFilterGroup && "mb-4"}`}
              onClick={() => toggleFilterGroup()}
            >
              <span>{renderFilterGroup ? <FilterX /> : <Filter />}</span>
              <span>Filters</span>
            </Button>

            <div
              className={cn("hidden lg:flex flex-col gap-6", [
                renderFilterGroup && "flex",
              ])}
            >
              <div>
                <p className="font-semibold pb-2 text-lg">Job Type</p>
                <div className="flex flex-col gap-2">
                  {filterGroup.jobType.map((item) => (
                    <div className="flex items-center gap-2" key={item.id}>
                      <Checkbox className="size-6" />
                      <p className="text-lg">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold pb-2 text-lg">On-Site / Remote</p>
                <div className="flex flex-col gap-2">
                  {filterGroup.remote.map((item) => (
                    <div className="flex items-center gap-2" key={item.id}>
                      <Checkbox className="size-6" />
                      <p className="text-lg">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold pb-2 text-lg">Department</p>
                <div className="flex flex-col gap-2">
                  {filterGroup.department.map((item) => (
                    <div className="flex items-center gap-2" key={item.id}>
                      <Checkbox className="size-6" />
                      <p className="text-lg">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* JOBS GRID */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {defaultJobs.map((job: any) => (
              <Link href="/careers/TODO" key={job.id}>
                <Card key={job.id} className="group cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:underline">
                      {job.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-md">
                      {job.desc}
                    </CardDescription>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="gap-2">
                        <span>
                          <Clock9 />
                        </span>
                        <p>{job.type}</p>
                      </Badge>
                      <Badge className="gap-2">
                        <span>
                          <Laptop />
                        </span>
                        <p>{job.remote}</p>
                      </Badge>
                      <Badge className="gap-2">
                        <span>
                          <Building2 />
                        </span>
                        <p>{job.department}</p>
                      </Badge>
                      <Badge className="gap-2">
                        <span>
                          <MapPin />
                        </span>
                        <p>{job.location}</p>
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
