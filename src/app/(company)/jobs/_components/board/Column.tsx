"use client";

import { SortableContext, useSortable } from "@dnd-kit/sortable";

import { Card, CardContent } from "@/components/ui/card";
import BoardCard from "./Card";
import { useEffect, useMemo, useState } from "react";
import { BoardColumnType } from "@/types/types";
import Header from "./header/Header";

const BoardColumn = ({
  column,
  cards,
}: {
  column: BoardColumnType;
  cards: any;
}) => {
  const { id, title } = column;

  const cardsIds = useMemo(() => {
    return cards.map((card: any) => card.id);
  }, [cards]);

  const { setNodeRef } = useSortable({
    id: id,
    data: {
      type: "column",
      column,
    },
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Header columnTitle={title} cardsLength={cards.length} />
      <Card
        ref={setNodeRef}
        className="bg-secondary flex flex-col flex-shrink-0 snap-center"
      >
        <CardContent className="flex flex-col gap-2 p-2">
          <SortableContext items={cardsIds} disabled={isMobile}>
            {cards.map((card: any) => (
              <BoardCard key={card.id} card={card} />
            ))}
          </SortableContext>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardColumn;
