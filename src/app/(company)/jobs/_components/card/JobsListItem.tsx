"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Ellipsis } from "lucide-react";
import { cn } from "@/lib/utils";
import { employerJobType } from "@/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const JobListItem = ({ jobItem }: { jobItem: employerJobType }) => {
  return (
    <Card className="lg:hover:cursor-pointer group">
      <CardContent className="p-4 flex flex-nowrap justify-between">
        <Link href={`${jobItem.id}`} className="w-full">
          <div className="flex flex-col gap-4 w-4/5 lg:w-11/12">
            <h3 className="font-semibold text-xl group-hover:underline">
              {jobItem.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge>{jobItem.department}</Badge>
              <Badge>{jobItem.location}</Badge>
              <Badge>{jobItem.remote}</Badge>
            </div>
            <hr />
            <div className="flex justify-between w-full">
              <p className="text-muted-foreground">
                <span className="text-primary font-semibold">
                  {jobItem.applicantCount}
                </span>{" "}
                Applicants
              </p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col justify-between">
          <div className="hidden lg:block">
            <Dialog>
              <DialogTrigger>
                <Ellipsis className="transition ease-in-out hover:stroke-primary active:stroke-primary" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="text-left">
                  <DialogTitle>Edit Job</DialogTitle>
                  <DialogDescription>
                    Delete or make changes to the selected job here. Click save
                    when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                {/* FORM */}
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
                <DialogFooter>
                  <div className="h-full w-full flex flex-col gap-4">
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <hr />
                    <DialogClose asChild>
                      <Button variant="destructive">Delete Job</Button>
                    </DialogClose>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <button>
            <Bookmark
              className={cn("hover:stroke-primary", [
                jobItem.isBookmarked
                  ? "hover:fill-transparent transition ease-in-out fill-primary stroke-primary"
                  : "transition ease-in-out fill-background stroke",
              ])}
            />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobListItem;
