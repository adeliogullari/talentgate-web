"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { MoreHorizontal, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

const mockData: any = [
  {
    id: 1,
    name: "Name",
    description: "Name",
    type: "Text",
    category: "General",
  },
  {
    id: 2,
    name: "Start Date",
    description: "What is the earliest date you can start?",
    type: "Date",
    category: "General",
  },
  {
    id: 3,
    name: "Sponsorship Required",
    description: "Do you require sponsorship?",
    type: "Single Choice",
    category: "General",
  },
  {
    id: 4,
    name: "English",
    description: "Do you have at least C1 level English?",
    type: "Multi Choice",
    category: "General",
  },
  {
    id: 5,
    name: "JavaScript / TypeScript",
    description: "How many years of JS/TS experience do you have?",
    type: "Text",
    category: "Engineering",
  },
  {
    id: 6,
    name: "Sales Experience",
    description: "How many years of sales experience do you have?",
    type: "Text",
    category: "Sales",
  },
];

const QuestionDialog = ({
  data,
  open,
  setOpen,
}: {
  data?: any;
  open: boolean;
  setOpen: any;
}) => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [multiChoiceCount, setMultiChoiceCount] = useState<number>(2);

  const handleDialogClosed = () => {
    setOpen();
    setMultiChoiceCount(2);
    setSelectedType("");
  };

  useEffect(() => {
    if (selectedType !== "Multi Choice") {
      setMultiChoiceCount(2);
    }
  }, [selectedType]);

  return (
    <Dialog open={open} onOpenChange={handleDialogClosed}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Question</DialogTitle>
          <DialogDescription>
            Add a new question to the application form.
          </DialogDescription>
        </DialogHeader>
        <div className="grid items-start gap-4 px-4 lg:px-0 lg:gap-8">
          <div className="grid gap-2">
            <Label htmlFor="questionLabel">Question Label</Label>
            <Input
              type="text"
              id="questionLabel"
              placeholder="Question Label"
              defaultValue={data?.name}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="questionDescription">Question Description</Label>
            <Textarea
              id="questionDescription"
              placeholder="Question Description"
              defaultValue={data?.description}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="questionType">Question Type</Label>
            <Select
              defaultValue={data?.type}
              onValueChange={(e) => setSelectedType(e)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select question type" />
              </SelectTrigger>
              <SelectContent id="questionType">
                <SelectItem value="Text">Text</SelectItem>
                <SelectItem value="Date">Date</SelectItem>
                <SelectItem value="Single Choice">Single Choice</SelectItem>
                <SelectItem value="Multi Choice">Multi Choice</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {selectedType === "Single Choice" && (
            <div className="grid gap-2">
              <Label htmlFor="questionOptions">Question Options</Label>
              <Input
                type="text"
                id="questionOptions"
                placeholder="Question Options"
              />
            </div>
          )}
          {selectedType === "Multi Choice" && (
            <div className="grid gap-2">
              <Label htmlFor="questionOptions">Question Options</Label>
              {[...Array(multiChoiceCount)].map((_, index) => (
                <div className="grid gap-2">
                  <Input
                    key={index}
                    type="text"
                    id="questionOptions"
                    placeholder="Question Options"
                  />
                </div>
              ))}
              <Button
                variant={"ghost"}
                className="gap-1"
                onClick={() => setMultiChoiceCount(multiChoiceCount + 1)}
              >
                <span>
                  <PlusIcon className="size-4" />
                </span>
                <span>Add Option</span>
              </Button>
            </div>
          )}
          <Button type="submit">Create New Question</Button>
        </div>
        <DialogFooter className="w-full">
          <DialogClose className="w-full" asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ApplcationFormsTemplatePage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [dialogRender, setDialogRender] = useState(false);

  const handleSetSelectedQuestion = (question: any) => {
    setSelectedQuestion(question);
    setDialogRender(true);
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Application Forms</h1>

      <Card>
        <CardHeader className="flex-row justify-between space-y-0 mb-1.5">
          <CardTitle>Manage Application Forms</CardTitle>
          <Button
            className="gap-1 w-fit"
            onClick={() => handleSetSelectedQuestion(null)}
          >
            <span>
              <PlusIcon className="size-4" />
            </span>
            <span>Add Question</span>
          </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full h-[400px] rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field Label</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        className="size-8 p-0"
                        onClick={() => handleSetSelectedQuestion(item)}
                      >
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ScrollBar />
          </ScrollArea>
        </CardContent>
      </Card>

      <QuestionDialog
        data={selectedQuestion}
        open={dialogRender}
        setOpen={setDialogRender}
      />
    </div>
  );
};

export default ApplcationFormsTemplatePage;
