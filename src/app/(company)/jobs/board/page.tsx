"use client";

import { employerDefaultJobs } from "@/lib/mock-data";
import JobListItem from "./../_components/card/JobsListItem";
import { useEffect, useState } from "react";
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
import { PlusIcon } from "lucide-react";
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
import { Switch } from "@/components/ui/switch";

const JobsPage = () => {
  const [isNotDesktop, setIsNotDesktop] = useState(false);
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

  useEffect(() => {
    const checkIsNotDesktop = () => setIsNotDesktop(window.innerWidth < 1024);
    checkIsNotDesktop();
    window.addEventListener("resize", checkIsNotDesktop);
    return () => window.removeEventListener("resize", checkIsNotDesktop);
  }, []);

  return (
    <div className="w-full py-6 px-4 flex flex-col">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Jobs</h1>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-fit gap-1">
                  <span>
                    <PlusIcon size={20} />
                  </span>
                  <span>Add Job</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="text-left">
                  <DialogTitle>Add Job</DialogTitle>
                  <DialogDescription>
                    You can create a new job from this section. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid items-start gap-4 px-4 lg:px-0 lg:gap-8">
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
                    <Select defaultValue={jobItem?.department}>
                      <Label htmlFor="jobDepartment">Job Department</Label>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Engineering">Engineering</SelectItem>
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
                  <Button type="submit">
                    {jobItem ? "Create Job" : "Save changes"}
                  </Button>
                </div>
                <DialogFooter className="w-full">
                  <DialogClose className="w-full" asChild>
                    <Button variant="outline">Cancel</Button>
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

export default JobsPage;
