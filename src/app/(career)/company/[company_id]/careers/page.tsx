"use client";

import { Button } from "@/components/ui/button";
import {
  Building2,
  CheckIcon,
  ClipboardIcon,
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
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { retrieveCareerJobs } from "./_lib/slice";
import {
  useParams,
  usePathname,
} from "next/navigation";
import { Oval } from "react-loader-spinner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const filterGroup: { [key: string]: any } = {
  title: "",
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
  remoteType: [
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

type JobType = {
  id: string;
  title: string;
  description: string;
  employment_type: string;
  remote: string;
  department: string;
  location: {
    id: number;
    type: string;
    city: string;
    state: string;
    country: string;
  };
};

const JobCard = ({ job }: { job: JobType }) => {
  // Component States
  const [shareLinkTriggered, setShareLinkTriggered] = useState(false);

  // Router States
  const currentRoute = usePathname();
  const shareLink = `${process.env.NEXT_PUBLIC_BASE_URL}${currentRoute}/${job.id}`;

  // Functions
  const handleCopy = async () => {
    navigator.clipboard.writeText(shareLink);
    setShareLinkTriggered(true);
    setTimeout(() => setShareLinkTriggered(false), 2000);
  };

  // Render
  return (
    <div className="border p-6 rounded-md w-full flex group cursor-pointer">
      {/* TITLE & TAGS */}
      <Link href={`careers/${job.id}`} className="w-full h-full">
        <div className="space-y-4 w-5/6 h-full">
          <h3 className="text-2xl font-semibold group-hover:underline">
            {job.title}
          </h3>
          <div className="flex flex-nowrap gap-3">
            <Badge className="gap-2">
              <span>
                <Clock9 />
              </span>
              <p>{job.employment_type}</p>
            </Badge>
            <Badge className="gap-2">
              <span>
                <Laptop />
              </span>
              <p>{job.location?.type}</p>
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
              <p>
                {job.location?.country}, {job.location?.state},{" "}
                {job.location?.city}
              </p>
            </Badge>
          </div>
        </div>
      </Link>

      {/* CTA GROUP */}
      <div className="flex flex-col gap-4 w-1/6">
        <Link href={`careers/${job.id}`}>
          <Button variant={"constructive"} className="w-full">
            Apply Now
          </Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Share</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share</DialogTitle>
              <DialogDescription>
                Share the oppurtunity with your friends!
              </DialogDescription>
              <div className="flex gap-4">
                <Input value={shareLink} readOnly />
                <Button
                  onClick={handleCopy}
                  className={cn("w-fit", [
                    shareLinkTriggered && "bg-green-600 hover:bg-green-600",
                  ])}
                >
                  {shareLinkTriggered ? (
                    <CheckIcon className="size-4" />
                  ) : (
                    <ClipboardIcon className="size-4" />
                  )}
                </Button>
              </div>
            </DialogHeader>
            <DialogClose asChild>
              <Button className="w-fit" variant={"outline"}>
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const CareerPage = () => {
  // Component States
  const [renderFilterGroup, setRenderFilterGroup] = useState(false);

  // Redux States
  const dispatch = useAppDispatch();
  let jobs = useAppSelector((state) => state.careerJobsReducer.jobs || []);
  const loading = useAppSelector((state) => state.careerJobsReducer.loading);

  // Router States
  const company_id = useParams().company_id;

  // Functions
  const toggleFilterGroup = () => {
    setRenderFilterGroup(!renderFilterGroup);
  };

  const fetchJobs = () => {
    dispatch(retrieveCareerJobs(Number(company_id)));
  };

  // Effects
  useEffect(() => {
    if (loading === "idle") {
      fetchJobs();
    }
  }, [dispatch]);

  // Render
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
              <Input
                placeholder="Search"
                className="w-full h-fit"
              />
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
              className={`"flex gap-2 lg:hidden " ${
                renderFilterGroup && "mb-4"
              }`}
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
                  {filterGroup.jobType.map((item: any) => (
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
                  {filterGroup.remoteType.map((item: any) => (
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
                  {filterGroup.department.map((item: any) => (
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
          {loading === "succeeded" && (
            <div className="flex flex-col gap-4 w-full">
              {jobs.length > 0 ? (
                jobs.map((job: any) => <JobCard key={job.id} job={job} />)
              ) : (
                <div className="w-full space-y-4 mx-auto text-center">
                  <h3 className="text-xl font-semibold">
                    Please check back later for new job opportunities.
                  </h3>
                </div>
              )}
            </div>
          )}
          {loading === "pending" && (
            <div className="w-full flex items-center justify-center">
              <Oval color="#ea580c" secondaryColor="gray" />
            </div>
          )}
          {loading === "failed" && (
            <div className="w-full space-y-4 mx-auto text-center">
              <h3 className="text-xl font-semibold">
                We couldn’t load job listings. Please try again.
              </h3>
              <Button className="mx-auto" onClick={fetchJobs}>
                Retry loading jobs
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CareerPage;
