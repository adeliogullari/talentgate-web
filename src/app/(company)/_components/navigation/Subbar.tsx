"use client";

import { Button } from "@/components/ui/button";
import { mainNavbarItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const SubbarItem = ({ item }: { item: mainNavbarItem }) => {
  const currentRoute = usePathname();

  return (
    <Link href={item.link} key={item.id}>
      <Button
        variant="ghost"
        className={cn("justify-start w-full", [
          currentRoute.endsWith(item.link) && "bg-accent",
        ])}
      >
        <span className="mr-3">{item.icon}</span>
        <span>{item.title}</span>
      </Button>
    </Link>
  );
};

const Subbar = ({
  subbarItems,
  categories,
}: {
  subbarItems: mainNavbarItem[];
  categories?: string[];
}) => {
  if (categories) {
    return (
      <ScrollArea className="flex flex-col gap-3 border-r h-full min-w-60 py-4 px-3 overflow-y-auto scrollbar-thin">
        {categories.map((catItem) => {
          return (
            <>
              <Label className="text-muted-foreground">{catItem}</Label>
              <div className="flex flex-col gap-1">
                {subbarItems.map((item) => {
                  if (item.category?.toLowerCase() === catItem.toLowerCase()) {
                    return <SubbarItem item={item} key={item.id} />;
                  }
                })}
              </div>
            </>
          );
        })}
        <ScrollBar />
      </ScrollArea>
    );
  }

  return (
    <div className="flex flex-col gap-1 border-r h-full min-w-60 pt-2 px-2">
      {subbarItems.map((item) => (
        <SubbarItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Subbar;
