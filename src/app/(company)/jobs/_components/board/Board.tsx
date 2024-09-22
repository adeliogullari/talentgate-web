"use client";

import {
  DndContext,
  pointerWithin,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragOverEvent,
  DragStartEvent,
} from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";

import BoardCard from "./Card";
import BoardColumn from "./Column";
import { useState } from "react";
import { BoardCardType, BoardColumnType } from "@/types/types";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const defaultCols: BoardColumnType[] = [
  {
    id: 1,
    title: "Applied",
  },
  {
    id: 2,
    title: "1st Interview",
  },
  {
    id: 3,
    title: "On-Site interview",
  },
  {
    id: 4,
    title: "Manager interview",
  },
  {
    id: 5,
    title: "Offer",
  },
  {
    id: 6,
    title: "Reference Check",
  },
];

const defaultCards: BoardCardType[] = [
  {
    id: 10,
    title: "Name Surname 1",
    desc: "Name Surname 1 description",
    columnId: 1,
  },
  {
    id: 20,
    title: "Name Surname 2",
    desc: "Name Surname 2 description",
    columnId: 1,
  },
  {
    id: 30,
    title: "Name Surname 3",
    desc: "Name Surname 3 description",
    columnId: 1,
  },
  {
    id: 40,
    title: "Name Surname 4",
    desc: "Name Surname 4 description",
    columnId: 1,
  },
  {
    id: 50,
    title: "Name Surname 5",
    desc: "Name Surname 5 description",
    columnId: 2,
  },
  {
    id: 60,
    title: "Name Surname 6",
    desc: "Name Surname 6 description",
    columnId: 2,
  },
  {
    id: 70,
    title: "Name Surname 7",
    desc: "Name Surname 7 description",
    columnId: 2,
  },
  {
    id: 80,
    title: "Name Surname 8",
    desc: "Name Surname 8 description",
    columnId: 3,
  },
  {
    id: 90,
    title: "Name Surname 9",
    desc: "Name Surname 9 description",
    columnId: 3,
  },
  {
    id: 100,
    title: "Name Surname 10",
    desc: "Name Surname 10 description",
    columnId: 4,
  },
  {
    id: 110,
    title: "Name Surname 11",
    desc: "Name Surname 11 description",
    columnId: 4,
  },
  {
    id: 120,
    title: "Name Surname 12",
    desc: "Name Surname 12 description",
    columnId: 4,
  },
  {
    id: 130,
    title: "Name Surname 13",
    desc: "Name Surname 13 description",
    columnId: 5,
  },
  {
    id: 140,
    title: "Name Surname 14",
    desc: "Name Surname 14 description",
    columnId: 5,
  },
  {
    id: 150,
    title: "Name Surname 15",
    desc: "Name Surname 15 description",
    columnId: 5,
  },
  {
    id: 160,
    title: "Name Surname 16",
    desc: "Name Surname 16 description",
    columnId: 6,
  },
];

const Board = () => {
  const [cols, setCols] = useState<BoardColumnType[]>(defaultCols);
  const [cards, setCards] = useState<BoardCardType[]>(defaultCards);

  const [activeCol, setActiveCol] = useState<BoardColumnType | null>(null);
  const [activeCard, setActiveCard] = useState<BoardCardType | null>(null);

  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toString() || "";

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 2,
      },
    }),
    useSensor(KeyboardSensor, {})
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    if (active.data.current?.type === "column") {
      setActiveCard(null);
      setActiveCol(active.data.current.column);
      return;
    }

    if (active.data.current?.type === "card") {
      setActiveCol(null);
      setActiveCard(active.data.current.card);
      return;
    }
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) {
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveACard = active.data.current?.type === "card";
    const isOverACard = over.data.current?.type === "card";

    if (!isActiveACard) {
      return;
    }

    if (isActiveACard && isOverACard) {
      setCards((cards) => {
        const activeCardIndex = cards.findIndex((card) => card.id === activeId);
        const overCardIndex = cards.findIndex((card) => card.id === overId);

        if (cards[activeCardIndex].columnId !== cards[overCardIndex].columnId) {
          cards[activeCardIndex].columnId = cards[overCardIndex].columnId;
        }

        return arrayMove(cards, activeCardIndex, overCardIndex);
      });
    }

    const isOverACol = over.data.current?.type === "column";

    if (isActiveACard && isOverACol) {
      setCards((cards) => {
        const activeCardIndex = cards.findIndex((card) => card.id === activeId);

        cards[activeCardIndex].columnId = +overId;

        return arrayMove(cards, activeCardIndex, activeCardIndex);
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      collisionDetection={pointerWithin}
    >
      <ScrollArea className="w-full whitespace-nowrap p-4 h-full">
        <div className="grid lg:grid-flow-col gap-6 self-center w-full">
          {cols.map((col) => (
            <BoardColumn
              key={col.id}
              column={col}
              cards={cards.filter((card) => {
                if ((card.columnId === col.id) && (card.title.toLowerCase().includes(query))) {
                  return card;
                }
              })}
            />
          ))}
          {typeof window === "object" &&
            createPortal(
              <DragOverlay>
                {activeCol && (
                  <BoardColumn
                    column={activeCol}
                    cards={cards.filter((card) => card.columnId === activeCol.id)}
                  />
                )}
                {activeCard && <BoardCard card={activeCard} />}
              </DragOverlay>,
              document.body
            )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </DndContext>
  );
};

export default Board;
