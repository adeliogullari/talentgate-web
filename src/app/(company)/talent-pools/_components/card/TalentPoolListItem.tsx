"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Ellipsis } from "lucide-react";
import { cn } from "@/lib/utils";
import { talentPoolListingType } from "@/types/types";
import Link from "next/link";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TalentPoolListItem = ({
  talentPoolItem,
}: {
  talentPoolItem: talentPoolListingType;
}) => {
  return (
    <Card className="lg:hover:cursor-pointer group">
      <CardContent className="p-4 flex flex-nowrap justify-between">
        <Link href={`talent-pools/${talentPoolItem.id}`} className="w-full">
          <div className="flex flex-col gap-4 w-4/5 lg:w-11/12">
            <h3 className="font-semibold text-xl group-hover:underline">
              {talentPoolItem.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge>{talentPoolItem.department}</Badge>
            </div>
            <hr />
            <div className="flex justify-between w-full">
              <p className="text-muted-foreground">
                <span className="text-primary font-semibold">
                  {talentPoolItem.applicantCount}
                </span>{" "}
                Applicants
              </p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col justify-between">
          <Dialog>
            <DialogTrigger>
              <Ellipsis className="transition ease-in-out hover:stroke-primary active:stroke-primary" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="text-left">
                <DialogTitle>Edit Talent Pool</DialogTitle>
                <DialogDescription>
                  Delete or make changes to the selected talent pool here. Click
                  save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid items-start gap-4 px-4 lg:px-0 lg:gap-8">
                <div className="grid gap-2">
                  <Label htmlFor="talentPoolTitle">Talent Pool Title</Label>
                  <Input
                    type="text"
                    id="talentPoolTitle"
                    defaultValue={talentPoolItem?.title}
                    placeholder="Talent Pool Title"
                  />
                </div>
                <div className="grid gap-2">
                  <Select defaultValue={talentPoolItem?.department}>
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
                <Button type="submit">
                  {talentPoolItem ? "Create Talent Pool" : "Save changes"}
                </Button>
              </div>
              <DialogFooter>
                <div className="h-full w-full flex flex-col gap-4">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <hr />
                  <DialogClose asChild>
                    <Button variant="destructive">Delete Talent Pool</Button>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <button>
            <Bookmark
              className={cn("hover:stroke-primary", [
                talentPoolItem.isBookmarked
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

export default TalentPoolListItem;
