"use client";

import { employerDefaultJobs } from "@/lib/mock-data";
import JobListItem from "./../_components/card/JobsListItem";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  LinkedinIcon,
  PanelTop,
  PlusIcon,
  SearchIcon,
  TwitterIcon,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { employerJobType } from "@/types/types";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const mockAddJobFormStep = [
  "CV?",
  "Name?",
  "Surname?",
  "Email?",
  "Phone?",
  "Location?",
  "City?",
  "Country?",
  "Linkedin URL?",
  "Personal Portfolio?",
  "Cover Letter",
];

const AddJobFormDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full gap-1">
          <PlusIcon className="size-5" />
          <span>Add new question</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        {/* DIALOG HEADER */}
        <DialogHeader>
          <DialogTitle>Add new question</DialogTitle>
          <DialogDescription>
            Add a new question to your job post.
          </DialogDescription>
        </DialogHeader>

        {/* SEARCH QUESTION FIELD */}
        <div className="flex items-center gap-4">
          <SearchIcon className="stroke-muted-foreground" />
          <Input type="text" placeholder="Search a question..." />
        </div>

        {/* QUESTIONS LIST */}
        <ScrollArea className="max-h-[570px] border rounded-md p-3">
          <div className="grid gap-2">
            {mockAddJobFormStep.map((item, i) => (
              <div className="flex w-full justify-between gap-2" key={i}>
                <p className="border rounded-md py-1 px-2 bg-secondary w-full">
                  {item}
                </p>
                <Button>
                  <PlusIcon className="size-5" />
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

const JobsBoardPage = () => {
  const [formPage, setFormPage] = useState(1);

  const jobItem: employerJobType = {
    id: 0,
    title: "",
    desc: "",
    location: "",
    remote: "",
    department: "",
    type: "",
    applicantCount: 0,
    isBookmarked: false,
  };

  return (
    <div className="p-8 flex flex-col">
      {/* JOB BOARD HEADER */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Jobs Board
      </h1>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div>
            {/* ADD NEW JOB MODAL */}
            <Dialog onOpenChange={() => setFormPage(1)}>
              <DialogTrigger asChild>
                <Button className="w-fit gap-1">
                  <span>
                    <PlusIcon size={20} />
                  </span>
                  <span>Add Job</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="min-w-[800px]">
                {/* DIALOG HEADER */}
                <DialogHeader className="text-left">
                  <DialogTitle>Add Job</DialogTitle>
                  <DialogDescription>
                    You can create a new job from this section. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>

                {/* FORM BREADCRUMB */}
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      {formPage === 1 ? (
                        <BreadcrumbPage>Step 1: Job Details</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          onClick={() => setFormPage(1)}
                          className="cursor-pointer"
                        >
                          Step 1: Job Details
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {formPage === 2 ? (
                        <BreadcrumbPage>
                          Step 2: Application Form
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          onClick={() => setFormPage(2)}
                          className="cursor-pointer"
                        >
                          Step 2: Application Form
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {formPage === 3 ? (
                        <BreadcrumbPage>
                          Step 3: Pipeline Observers
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          onClick={() => setFormPage(3)}
                          className="cursor-pointer"
                        >
                          Step 3: Pipeline Observers
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {formPage === 4 ? (
                        <BreadcrumbPage>
                          Step 4: Publish Job Post
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          onClick={() => setFormPage(4)}
                          className="cursor-pointer"
                        >
                          Step 4: Publish Job Post
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                {/* FORM PAGE 1 */}
                {formPage === 1 && (
                  <div className="grid items-start gap-8">
                    <div className="grid gap-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        type="text"
                        id="jobTitle"
                        defaultValue={jobItem?.title}
                        placeholder="Job Title"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="jobDescription">Job Description</Label>
                      <Textarea
                        id="jobDescription"
                        defaultValue={jobItem?.title}
                        placeholder="Job Description"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Select defaultValue={jobItem?.department}>
                        <Label htmlFor="jobDepartment">Job Department</Label>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Engineering">
                            Engineering
                          </SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                          <SelectItem value="Analytics">Analytics</SelectItem>
                          <SelectItem value="Design">Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Select defaultValue={jobItem?.location}>
                        <Label htmlFor="jobLocation">Job Location</Label>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Istanbul, Turkey">
                            Istanbul, Turkey
                          </SelectItem>
                          <SelectItem value="Ankara, Turkey">
                            Ankara, Turkey
                          </SelectItem>
                          <SelectItem value="Talinn, Estonia">
                            Talinn, Estonia
                          </SelectItem>
                          <SelectItem value="EMEA">EMEA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="jobRemote">Job Remote</Label>
                      <RadioGroup
                        defaultValue={jobItem?.remote}
                        className="space-y-1 lg:flex lg:gap-6"
                      >
                        <div className="self-end flex items-center space-x-2">
                          <RadioGroupItem value="On-Site" id="on-site" />
                          <Label htmlFor="on-site">On-Site</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Hybrid" id="hybrid" />
                          <Label htmlFor="hybrid">Hybrid</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Remote" id="remote" />
                          <Label htmlFor="remote">Remote</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <Button
                      type="submit"
                      variant={"secondary"}
                      onClick={() => setFormPage(2)}
                    >
                      Next step
                    </Button>
                  </div>
                )}

                {/* FORM PAGE 2 */}
                {formPage === 2 && (
                  <div className="grid gap-2">
                    <ScrollArea className="max-h-[570px] border rounded-md p-3">
                      <div className="grid gap-2">
                        {mockAddJobFormStep.map((item, i) => (
                          <div
                            className="py-1 px-2 border rounded-md flex justify-between items-center"
                            key={i}
                          >
                            <div className="flex items-center gap-1 py-1">
                              <span>{item}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Checkbox className="size-5" />
                              <p>Required?</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <AddJobFormDialog />
                    <Button
                      type="submit"
                      variant={"secondary"}
                      className="w-full mt-6"
                      onClick={() => setFormPage(3)}
                    >
                      Next step
                    </Button>
                  </div>
                )}

                {/* FORM PAGE 3 */}
                {formPage === 3 && (
                  <div className="space-y-4 w-full mt-5">
                    <div className="flex items-center gap-4">
                      <SearchIcon className="stroke-muted-foreground" />
                      <Input type="text" placeholder="Search..." />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant={"outline"}
                        className="justify-start gap-2 h-full"
                      >
                        <Avatar>
                          <AvatarImage
                            src="https://avatars.githubusercontent.com/u/124599?v=4"
                            alt="@shadcn"
                          />
                          <AvatarFallback delayMs={6000}>SC</AvatarFallback>
                        </Avatar>
                        <p>Name Surname</p>
                      </Button>
                      <Button
                        variant={"outline"}
                        className="justify-start gap-2 h-full"
                      >
                        <Avatar>
                          <AvatarImage
                            src="https://avatars.githubusercontent.com/u/124599?v=4"
                            alt="@shadcn"
                          />
                          <AvatarFallback delayMs={6000}>SC</AvatarFallback>
                        </Avatar>
                        <p>Name Surname</p>
                      </Button>
                      <Button
                        variant={"outline"}
                        className="justify-start gap-2 h-full"
                      >
                        <Avatar>
                          <AvatarImage
                            src="https://avatars.githubusercontent.com/u/124599?v=4"
                            alt="@shadcn"
                          />
                          <AvatarFallback delayMs={6000}>SC</AvatarFallback>
                        </Avatar>
                        <p>Name Surname</p>
                      </Button>
                    </div>
                    <Button
                      type="submit"
                      variant={"secondary"}
                      className="w-full"
                      onClick={() => setFormPage(4)}
                    >
                      Next step
                    </Button>
                  </div>
                )}

                {/* FORM PAGE 4 */}
                {formPage === 4 && (
                  <div className="space-y-4 px-0 gap-8">
                    <div className="flex gap-3">
                      <Checkbox className="size-6" checked disabled />
                      <p className="flex gap-2 items-center">
                        <span>
                          <PanelTop className="size-5" />
                        </span>
                        <span>Career Page</span>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="size-6" />
                      <p className="flex gap-2 items-center">
                        <span>
                          <LinkedinIcon className="size-5" />
                        </span>
                        <span>LinkedIn</span>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="size-6" />
                      <p className="flex gap-2 items-center">
                        <span>
                          <TwitterIcon className="size-5" />
                        </span>
                        <span>X</span>
                      </p>
                    </div>
                    <Button type="submit" className="w-full">
                      Create Job Post
                    </Button>
                  </div>
                )}

                <DialogFooter className="w-full">
                  <DialogClose className="w-full" asChild>
                    <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {employerDefaultJobs.map((jobItem) => (
          <JobListItem jobItem={jobItem} key={jobItem.id} />
        ))}
      </div>
    </div>
  );
};

export default JobsBoardPage;
