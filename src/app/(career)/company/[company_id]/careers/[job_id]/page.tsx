"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  BookUser,
  CalendarIcon,
  HomeIcon,
  MapPin,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { useDropzone } from "react-dropzone";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { retrieveCareerJob } from "./_lib/slice";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useParams } from "next/navigation";
import { Oval } from "react-loader-spinner";

const ApplyPage = ({ params }: { params: { job_id: string } }) => {
  const [tab, setTab] = useState<string>("job details");
  const dispatch = useAppDispatch();
  const job = useAppSelector((state) => state.careerJobReducer.job || {});
  const loading = useAppSelector((state) => state.careerJobReducer.loading);
  const company_id = useParams().company_id;

  useEffect(() => {
    if (job?.id !== Number(params.job_id)) {
      dispatch(
        retrieveCareerJob({
          job_id: Number(params.job_id),
          company_id: Number(company_id),
        })
      );
    }
  }, [dispatch]);

  const onTabChange = (value: string) => {
    setTab(value);
  };

  const handleApplyButtonClick = (value: string) => {
    setTab(value);
    if (window.scrollY > 100) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        console.log(acceptedFiles);
      };
    });
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
    acceptedFiles,
  } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
    maxSize: 50000000,
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.name} className="text-destructive">
        {file.name}
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  if (loading === "failed") {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">
          Failed to load the requested job.
        </h1>
        <Link href={"../careers"}>
          <Button className="gap-2">
            <span>
              <ArrowLeft className="size-4" />
            </span>
            <span>Go back to available jobs list</span>
          </Button>
        </Link>
      </div>
    );
  }

  if (loading === "pending") {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Oval color="#ea580c" secondaryColor="gray" />
      </div>
    );
  }

  return (
    <div className="lg:w-1/2 lg:mx-auto">
      <Link href={`/company/${company_id}/careers`}>
        <Button className="absolute top-4 left-4" variant="ghost">
          <ArrowLeft />
        </Button>
      </Link>

      <div className="h-full flex flex-col gap-8 p-4 lg:max-w-[70dvw] lg:mx-auto">
        {/* JOB DETAIL BANNER */}
        <div className="flex flex-col gap-4 p-4 rounded-md bg-gradient-to-tr from-secondary to-primary lg:h-[45dvh] items-center lg:justify-center lg:gap-12">
          <div className="size-20 rounded-full bg-blue-700 grid place-items-center lg:size-40 lg:text-2xl">
            {company_id}
          </div>
          <h1 className="text-3xl font-semibold lg:text-5xl">{job?.title}</h1>
          <div className="flex gap-4 flex-wrap">
            <Badge className="w-fit h-fit flex gap-3">
              <span>
                <HomeIcon size={24} />
              </span>
              <span>{job?.location?.type}</span>
            </Badge>
            <Badge className="w-fit h-fit flex gap-3">
              <span>
                <MapPin size={24} />
              </span>
              <p>
                {job?.location?.address?.country},{" "}
                {job?.location?.address?.city}, {job?.location?.address?.state}
              </p>
            </Badge>
            <Badge className="w-fit h-fit flex gap-3">
              <span>
                <BookUser size={24} />
              </span>
              <span>{job?.department}</span>
            </Badge>
          </div>
        </div>

        {/* JOB APPLICATION FORM / JOB DESCRIPTION TABS */}
        <Tabs value={tab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="job details">Job Details</TabsTrigger>
            <TabsTrigger value="apply">Apply</TabsTrigger>
          </TabsList>

          {/* JOB DETAILS TAB */}
          <TabsContent value="job details">
            <Card>
              <CardHeader className="h-fit pb-0">
                <ReactQuill
                  value={job?.description}
                  theme="bubble"
                  readOnly={true}
                  className="quillComponent h-fit"
                />
              </CardHeader>

              {/* CTA GROUP */}
              <CardFooter className="w-full grid place-items-center">
                <div className="grid gap-6 place-items-center w-full lg:w-96 lg:pt-12">
                  <Button
                    className="w-full"
                    onClick={() => handleApplyButtonClick("apply")}
                  >
                    Apply
                  </Button>
                  {/* <span className="font-semibold">Or</span>
                  <Button className="w-full" variant={"secondary"}>
                    Refer a Friend
                  </Button> */}
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* APPLY TAB */}
          <TabsContent value="apply">
            <Card>
              {/* DRAG AND DROP CV SECTION */}
              <CardHeader>
                <CardTitle>Upload CV</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  {...getRootProps()}
                  className={`w-full h-fit border-2 ${
                    isDragActive ? "border-white" : ""
                  }  mt-2 rounded-md border-dashed space-y-2 p-2 text-muted-foreground/40`}
                >
                  <input {...getInputProps()} />
                  <p>
                    <span className="text-primary/80 hover:text-primary active:text-primary/60">
                      Upload your CV
                    </span>{" "}
                    or drag and drop here.
                  </p>
                  <p>Accepted files: PDF, DOC and DOCX up to 50MB.</p>
                  {acceptedFiles.length > 0 && (
                    <>
                      <p className="text-green-500 font-semibold">
                        Accepted file(s):
                      </p>
                      <p className="text-green-500">{acceptedFiles[0].name}</p>
                    </>
                  )}
                  {fileRejections.length > 0 && (
                    <p className="text-destructive font-semibold">
                      File(s) rejected:
                    </p>
                  )}
                  {fileRejectionItems}
                </div>
              </CardContent>

              <hr />

              {/* MY INFORMATION SECTION */}
              <CardHeader>
                <CardTitle>My Information</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input placeholder="Full Name" />
                </div>

                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input placeholder="Email Address" />
                </div>

                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input placeholder="Phone Number" />
                </div>

                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input placeholder="Address" />
                </div>

                <div className="space-y-2">
                  <Label>City</Label>
                  <Input placeholder="City" />
                </div>

                <div className="space-y-2">
                  <Label>Province / State</Label>
                  <Input placeholder="Province / State" />
                </div>

                <div className="space-y-2">
                  <Label>Postal Code</Label>
                  <Input placeholder="Postal Code" />
                </div>

                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="w-full pl-3 text-left font-normal"
                      >
                        {/* {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                          )} */}
                        <span className="text-muted-foreground">
                          Pick a date
                        </span>
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        // selected={field.value}
                        // onSelect={field.onChange}
                        disabled={(date: any) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>LinkedIn URL</Label>
                  <Input placeholder="LinkedIn URL" />
                </div>

                <div className="space-y-2">
                  <Label>Website, Blog, or Portfolio</Label>
                  <Input placeholder="Website, Blog, or Portfolio" />
                </div>

                <div className="space-y-2">
                  <Label>Cover Letter</Label>
                  <Textarea
                    className="resize-none md:resize-y"
                    placeholder="You can write your cover letter here ..."
                  />
                </div>
                <Button type="submit">Submit</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ApplyPage;
