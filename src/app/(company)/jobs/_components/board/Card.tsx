"use client";

import { BoardCardType } from "@/types/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarClock,
  CalendarIcon,
  Clock,
  Clock3,
  Ellipsis,
  Mail,
  MapPin,
  Star,
  User,
  UserPen,
  UserRoundX,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const BoardCard = ({ card }: { card: BoardCardType }) => {
  const { id, title, desc, columnId } = card;
  const [openApplicantWindow, setOpenApplicantWindow] = useState(false);
  const [openScheduleInterviewModal, setOpenScheduleInterviewModal] =
    useState(false);

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
    <>
      {/* BOARD CARD */}
      <Card
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className={`lg:w-[256px] transition duration-200 ease-in-out hover:ring-2 hover:ring-primary ${
          isDragging ? "opacity-40 ring-2 ring-primary" : ""
        }`}
        onClick={() => setOpenApplicantWindow(true)}
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
            <p className="text-muted-foreground text-xs flex items-center gap-1">
              <span>
                <Clock size={14} />
              </span>
              <span>4mo</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CARD SHEET MENU */}
      <Sheet open={openApplicantWindow} onOpenChange={setOpenApplicantWindow}>
        <SheetContent className="min-w-[70dvw] place-content-start p-8">
          <SheetHeader className="flex-row items-center h-1/5 justify-between">
            {/* HEADER LEFT-SIDE INFO */}
            <div className="flex flex-row gap-8 items-center">
              <Avatar className="size-28">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/124599?v=4"
                  alt="@shadcn"
                />
                <AvatarFallback delayMs={6000}>SC</AvatarFallback>
              </Avatar>
              <div className="space-y-4 w-80">
                <div>
                  <SheetTitle className="text-2xl">Name Surname</SheetTitle>
                  <SheetDescription>name.surname@gmail.com</SheetDescription>
                </div>
                <div className="flex gap-1">
                  <Star className="fill-primary stroke-primary" />
                  <p className="italic">
                    <span className="font-light">4.5 </span>
                    <span className="font-bold">/ 5</span>
                  </p>
                </div>
                <div className="w-fit flex flex-wrap gap-2">
                  <Badge className="text-nowrap bg-blue-500 hover:bg-blue-500/80">
                    Software Engineer
                  </Badge>
                  <Badge className="text-nowrap bg-yellow-500 hover:bg-yellow-500/80">
                    Engineering
                  </Badge>
                  <Badge className="text-nowrap bg-purple-500 hover:bg-purple-500/80">
                    Remote
                  </Badge>
                  <Badge className="text-nowrap bg-emerald-500 hover:bg-emerald-500/80">
                    EMEA
                  </Badge>
                </div>
              </div>
            </div>

            {/* HEADER STAGE SELECT */}
            <div className="flex gap-6">
              <Select defaultValue="1st interview">
                <SelectTrigger className="gap-3">
                  <span className="text-muted-foreground">Set Status:</span>
                  <Badge className="text-nowrap">1st Interview</Badge>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="applied">
                    <Badge className="text-nowrap">Applied</Badge>
                  </SelectItem>
                  <SelectItem value="1st interview">
                    <Badge className="text-nowrap">1st Interview</Badge>
                  </SelectItem>
                  <SelectItem value="on-site interview">
                    <Badge className="text-nowrap">On-Site Interview</Badge>
                  </SelectItem>
                  <SelectItem value="manager interview">
                    <Badge className="text-nowrap">Manager Interview</Badge>
                  </SelectItem>
                  <SelectItem value="offer">
                    <Badge className="text-nowrap">Offer</Badge>
                  </SelectItem>
                  <SelectItem value="reference check">
                    <Badge className="text-nowrap">Reference Check</Badge>
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* HEADER MORE DROPDOWN MENU */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <Ellipsis />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="lg:w-96">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="space-x-2"
                    onClick={() => setOpenScheduleInterviewModal(true)}
                  >
                    <span>
                      <CalendarClock />
                    </span>
                    <span>Schedule Interview</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <span>
                      <Mail />
                    </span>
                    <span>Send E-mail</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="space-x-2 text-destructive focus:bg-destructive">
                    <span>
                      <UserRoundX />
                    </span>
                    <span>Disqualify</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SheetHeader>

          {/* SHEET TABS */}
          <Tabs defaultValue="Information" className="h-full w-full">
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="Information">
                Information
              </TabsTrigger>
              <TabsTrigger className="w-full" value="Evaluations">
                Evaluations
              </TabsTrigger>
              <TabsTrigger className="w-full" value="Resume">
                Resume
              </TabsTrigger>
              <TabsTrigger className="w-full" value="Interviews">
                Interviews
              </TabsTrigger>
            </TabsList>

            {/* INFORMATION TAB */}
            <TabsContent value="Information" className="h-full">
              <ScrollArea className="h-3/4">
                <div className="h-full space-y-8">
                  {/* APPLICANT DETAILS TABLE */}
                  <Table className="rounded-md">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-lg text-foreground">
                          Applicant Details
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableHead>Name Surname</TableHead>
                        <TableCell>Name Surname</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Email</TableHead>
                        <TableCell>name.surname@gmail.com</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Phone Number</TableHead>
                        <TableCell>+905123456789</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Reference Number</TableHead>
                        <TableCell>123456</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Gender</TableHead>
                        <TableCell>Male</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Diploma</TableHead>
                        <TableCell>Bachelor's Degree</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>University</TableHead>
                        <TableCell>XYZ University</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Major</TableHead>
                        <TableCell>Computer Science</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Current Company</TableHead>
                        <TableCell>Acme Inc.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Current Position</TableHead>
                        <TableCell>QA Engineer</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Address</TableHead>
                        <TableCell>Istanbul, Turkey</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Birthdate</TableHead>
                        <TableCell>2000-10-10</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  {/* PAST EXPERIENCE TABLE */}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-lg text-foreground">
                          Past Experience
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Years</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Acme Inc.</TableCell>
                        <TableCell>QA Engineer</TableCell>
                        <TableCell>2024-2023 (1 year)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>XYZ Corps.</TableCell>
                        <TableCell>Business Analyst</TableCell>
                        <TableCell>2020-2023 (3 years)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  {/* SKILLS CARD */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-nowrap text-sm">HTML</Badge>
                        <Badge className="text-nowrap text-sm">CSS</Badge>
                        <Badge className="text-nowrap text-sm">
                          JavaScript
                        </Badge>
                        <Badge className="text-nowrap text-sm">React</Badge>
                        <Badge className="text-nowrap text-sm">NextJS</Badge>
                        <Badge className="text-nowrap text-sm">
                          TailwindCSS
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollArea>
            </TabsContent>

            {/* EVALUATIONS TAB */}
            <TabsContent className="h-full space-y-4" value="Evaluations">
              {/* PAST COMMENTS */}
              <ScrollArea className="h-[45%] py-4 px-2 border-2 rounded-md">
                <div className="flex flex-col gap-4">
                  <Comment hasScore />
                  <Separator />
                  <Comment hasScore />
                  <Separator />
                  <Comment />
                  <Separator />
                  <Comment hasScore />
                  <Separator />
                  <Comment />
                  <Separator />
                  <Comment hasScore />
                </div>
                <ScrollBar />
              </ScrollArea>

              <div className="h-[30%] space-y-3">
                {/* COMMENTS FORM */}
                <div className="space-y-2">
                  <Label>Comment</Label>
                  <Textarea placeholder="Leave a comment..." />
                </div>
                <div className="space-y-2">
                  <Label>Rating</Label>
                  <Select defaultValue="none">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Rate the Applicant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">
                        <div className="flex gap-2">
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                        </div>
                      </SelectItem>
                      <SelectItem value="4">
                        <div className="flex gap-2">
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                        </div>
                      </SelectItem>
                      <SelectItem value="3">
                        <div className="flex gap-2">
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                        </div>
                      </SelectItem>
                      <SelectItem value="2">
                        <div className="flex gap-2">
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                          <Star
                            size="18"
                            className="stroke-primary fill-primary"
                          />
                        </div>
                      </SelectItem>
                      <SelectItem value="1">
                        <Star
                          size="18"
                          className="stroke-primary fill-primary"
                        />
                      </SelectItem>
                      <SelectItem value="none">No Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>Submit Evaluation</Button>
              </div>
            </TabsContent>

            {/* RESUME TAB */}
            <TabsContent className="h-full" value="Resume">
              <div className="h-3/4">
                <iframe
                  className="h-full w-full rounded-md"
                  src="/assets/resume.pdf"
                />
              </div>
            </TabsContent>

            {/* INTERVIEWS TAB */}
            <TabsContent className="h-full" value="Interviews">
              <ScrollArea className="h-3/4 border-2 rounded-md py-4 px-2">
                <div className="flex flex-col gap-4">
                  <InterviewItem />
                  <Separator />
                  <InterviewItem />
                  <Separator />
                  <InterviewItem />
                  <Separator />
                  <InterviewItem />
                  <Separator />
                  <InterviewItem />
                  <Separator />
                  <InterviewItem />
                  <Separator />
                  <InterviewItem />
                </div>
                <ScrollBar />
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      {/* SCHEDULE INTERVIEW MODAL */}
      <ScheduleInterviewModal
        openScheduleInterviewModal={openScheduleInterviewModal}
        setOpenScheduleInterviewModal={setOpenScheduleInterviewModal}
      />
    </>
  );
};

export default BoardCard;

const ScheduleInterviewModal = ({
  openScheduleInterviewModal,
  setOpenScheduleInterviewModal,
}: {
  openScheduleInterviewModal: boolean;
  setOpenScheduleInterviewModal: (open: boolean) => void;
}) => {
  return (
    <Dialog
      open={openScheduleInterviewModal}
      onOpenChange={setOpenScheduleInterviewModal}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule New Interview</DialogTitle>
          <DialogDescription>
            Fill in the details to schedule a new interview event.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Type
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select interview type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Phone Screening">Phone Screening</SelectItem>
                <SelectItem value="Technical Interview">
                  Technical Interview
                </SelectItem>
                <SelectItem value="Culture Fit">Culture Fit</SelectItem>
                <SelectItem value="Final Interview">Final Interview</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-[280px] justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Pick a date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time
            </Label>
            <Input id="time" type="time" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="duration" className="text-right">
              Duration
            </Label>
            <Input
              id="duration"
              type="text"
              placeholder="e.g., 30 min, 1 hour"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="interviewer" className="text-right">
              Interviewer
            </Label>
            <Input id="interviewer" type="text" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input id="location" type="text" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Schedule Interview</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const InterviewItem = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <Avatar>
          <User className="mx-auto my-auto" />
        </Avatar>
        <div className="flex flex-col text-sm">
          <p className="font-bold">Technical Interview</p>
          <p className="text-muted-foreground">2024-10-10 10:10</p>
        </div>
      </div>

      <div className="ml-3 flex gap-6">
        <div className="flex gap-1 items-center">
          <UserPen className="size-5" />
          <p className="text-sm text-muted-foreground">HR Name Surname</p>
        </div>
        <div className="flex gap-1 items-center">
          <MapPin className="size-5" />
          <p className="text-sm text-muted-foreground">Zoom Meeting</p>
        </div>
        <div className="flex gap-1 items-center">
          <Clock3 className="size-5" />
          <p className="text-sm text-muted-foreground">45 Min</p>
        </div>
      </div>
    </div>
  );
};

const Comment = ({ hasScore }: { hasScore?: boolean }) => {
  return (
    <div className="flex gap-4">
      <Avatar className="size-12">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="@shadcn"
        />
        <AvatarFallback delayMs={6000}>SC</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 text-sm">
        <p className="font-bold">Name Surname</p>
        <p className="text-muted-foreground">2024-10-10 10:10</p>
        {hasScore && (
          <div className="flex gap-2">
            <Star size={14} className="fill-primary stroke-primary" />
            <Star size={14} className="fill-primary stroke-primary" />
            <Star size={14} className="fill-primary stroke-primary" />
            <Star size={14} />
            <Star size={14} />
          </div>
        )}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis amet
          tempora veniam iure, ratione quasi porro fugiat, maxime nostrum
          deleniti officiis, reiciendis quisquam optio. Cum aperiam
          reprehenderit modi vero eum?
        </p>
      </div>
    </div>
  );
};
