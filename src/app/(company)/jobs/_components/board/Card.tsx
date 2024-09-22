"use client";

import { BoardCardType } from "@/types/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

const BoardCard = ({ card }: { card: BoardCardType }) => {
  const { id, title, desc, columnId } = card;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "card",
      card,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`lg:w-[256px] transition duration-200 ease-in-out hover:ring-2 hover:ring-primary ${
        isDragging ? "opacity-40 ring-2 ring-primary" : ""
      }`}
    >
      <CardContent className="p-1 flex gap-3 items-center">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            alt="@shadcn"
          />
          <AvatarFallback delayMs={6000}>SC</AvatarFallback>
        </Avatar>
        <div>
          <p>{title}</p>
          <p className="text-muted-foreground text-xs flex items-center gap-1"><span><Clock size={14} /></span><span>4mo</span></p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
