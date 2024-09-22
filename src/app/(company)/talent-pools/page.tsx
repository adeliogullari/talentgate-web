import { taletPoolListings } from "@/lib/mock-data";
import TalentPoolListItem from "./_components/card/TalentPoolListItem";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { talentPoolListingType } from "@/types/types";

const talentPoolItem: talentPoolListingType = {
  id: 0,
  title: "",
  department: "",
  applicantCount: 0,
  isBookmarked: false
}

const TalentPoolsPage = () => {
  return (
    <div className="w-full py-6 px-4 flex flex-col">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Talent Pool
      </h1>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-fit gap-1">
                <span>
                  <PlusIcon size={20} />
                </span>
                <span>Add Talent Pool</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="text-left">
                <DialogTitle>Add Talent Pool</DialogTitle>
                <DialogDescription>
                  You can create a new talent pool from this section. Click save
                  when you&apos;re done.
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
              <DialogFooter className="w-full">
                <DialogClose className="w-full" asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        {taletPoolListings.map((talentPoolItem) => (
          <TalentPoolListItem
            talentPoolItem={talentPoolItem}
            key={talentPoolItem.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TalentPoolsPage;
