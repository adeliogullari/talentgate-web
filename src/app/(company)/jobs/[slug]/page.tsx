"use client";

import Board from "../_components/board/Board";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, Ellipsis, PencilIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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
          <button>
            <Avatar className="border justify-center items-center transition ease-in-out hover:bg-border">
              <PlusIcon />
            </Avatar>
          </button>
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
          <button>
            <Avatar className="border justify-center items-center transition ease-in-out hover:bg-border">
              <Ellipsis />
            </Avatar>
          </button>
        </div>
      </div>

      {/* BOARD */}
      <Board />
    </div>
  );
};

export default JobSlugPage;
