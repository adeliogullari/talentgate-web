"use client";

import Board from "../_components/board/Board";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bookmark,
  Ellipsis,
  PencilIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const mockObservers = [1, 2, 3, 4, 5];

const JobSlugPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="p-5 space-y-8 h-full flex flex-col">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-4 lg:gap-0">
        {/* HEADER & TITLE */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="flex gap-2 items-center">
            <button className="flex gap-2 items-center">
              <Bookmark
                size={22}
                className={cn("hover:stroke-primary", [
                  true
                    ? "hover:fill-transparent transition ease-in-out fill-primary stroke-primary"
                    : "transition ease-in-out fill-background stroke",
                ])}
              />
            </button>
            <button>
              <PencilIcon
                size={22}
                className="transition ease-in-out hover:stroke-primary active:stroke-primary"
              />
            </button>
            <h1 className="text-2xl md:text-3xl font-bold">Job Pipeline</h1>
          </div>
          <div className="flex gap-2 items-center flex-wrap lg:flex-nowrap">
            <Badge>Location</Badge>
            <Badge>Type</Badge>
            <Badge>Remote</Badge>
          </div>
        </div>

        {/* OBSERVER LIST */}
        <div className="flex gap-2 items-center">
          {/* ADD NEW OBSERVER */}
          <Dialog>
            <DialogTrigger asChild>
              <button>
                <Avatar className="border justify-center items-center transition ease-in-out hover:bg-border">
                  <PlusIcon />
                </Avatar>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Observer</DialogTitle>
                <DialogDescription>
                  Search and add new observer(s) to the pipeline.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
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
              </div>
            </DialogContent>
          </Dialog>

          {/* BOARD OBSERVERS */}
          <div className="flex -space-x-5">
            {mockObservers.map((item) => (
              <Avatar key={item}>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/124599?v=4"
                  alt="@shadcn"
                />
                <AvatarFallback delayMs={6000}>SC</AvatarFallback>
              </Avatar>
            ))}
          </div>

          {/* VIEW ALL OBSERVERS */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Avatar className="border justify-center items-center transition ease-in-out hover:bg-border">
                  <Ellipsis />
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>All Observers</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {mockObservers.map((item) => (
                <>
                  <DropdownMenuItem key={item}>
                    <div className="flex gap-2 items-center">
                      <Avatar>
                        <AvatarImage
                          src="https://avatars.githubusercontent.com/u/124599?v=4"
                          alt="@shadcn"
                        />
                        <AvatarFallback delayMs={6000}>SC</AvatarFallback>
                      </Avatar>
                      <p>HR Name Surname {item}</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* BOARD */}
      <Board />
    </div>
  );
};

export default JobSlugPage;
