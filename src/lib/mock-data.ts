import { jobType, VacantPositionType, employerJobType, talentPoolListingType } from "@/types/types";

export const defaultJobs: jobType[] = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "EMEA",
    remote: "Remote",
    department: "Engineering",
    employment_type: "Internship",
  },
  {
    id: 2,
    title: "Marketing Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Istanbul, Turkey",
    remote: "Hybrid",
    department: "Marketing",
    employment_type: "Full-Time",
  },
  {
    id: 3,
    title: "Product Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Ankara, Turkey",
    remote: "On-Site",
    department: "Design",
    employment_type: "Part-Time",
  },
  {
    id: 4,
    title: "Data Analyst",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Talinn, Estonia",
    remote: "Hybrid",
    department: "Analytics",
    employment_type: "Full-Time",
  },
  {
    id: 5,
    title: "Sales Representative",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Istanbul, Turkey",
    remote: "Remote",
    department: "Sales",
    employment_type: "Part-Time",
  },
];

export const vacantPositionData: VacantPositionType = {
  companyName: "ABC",
  roleTitle: "Software Engineer",
  remote: "Remote / On-Site / Hybrid",
  location: "Istanbul, Turkey",
  department: "Engineering",
  jobDescription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel soluta non cumque quaerat natus dolorem tempora amet omnis at magni modi rerum ea, commodi voluptatumillum veniam magnam voluptas. Ipsum illum iure voluptatibusfugit, numquam commodi repudiandae doloremque, molestias omnisconsequatur maiores, excepturi recusandae consequunturofficiis laboriosam laborum dolorum. Nulla ad, porro commodiincidunt tempore rem voluptates et voluptatibus! Voluptatibussunt, quibusdam debitis aut veniam ipsum dicta asperioresoptio rerum nisi incidunt laboriosam earum providentvoluptatem at. Iusto dignissimos commodi nihil, rem ex quiconsequatur voluptatibus praesentium harum non!",
  jobRequirements:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci libero iste laborum nobis quia assumenda dolores architecto veniam inventore, ratione quidem vel magnam pariatur, illo doloribus fuga consequuntur unde quaerat.\n-Lorem,\n-Ipsum,\n-Dolor,\n-Sit,\n-Amet",
};

export const employerDefaultJobs: employerJobType[] = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "EMEA",
    remote: "Remote",
    department: "Engineering",
    type: "Internship",
    applicantCount: 8,
    isBookmarked: true,
  },
  {
    id: 2,
    title: "Marketing Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Istanbul, Turkey",
    remote: "Hybrid",
    department: "Marketing",
    type: "Full-Time",
    applicantCount: 14,
    isBookmarked: false,
  },
  {
    id: 3,
    title: "Product Designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Ankara, Turkey",
    remote: "On-Site",
    department: "Design",
    type: "Part-Time",
    applicantCount: 12,
    isBookmarked: true,
  },
  {
    id: 4,
    title: "Data Analyst",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Talinn, Estonia",
    remote: "Hybrid",
    department: "Analytics",
    type: "Full-Time",
    applicantCount: 54,
    isBookmarked: false,
  },
  {
    id: 5,
    title: "Sales Representative",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Istanbul, Turkey",
    remote: "Remote",
    department: "Sales",
    type: "Part-Time",
    applicantCount: 7,
    isBookmarked: false,
  },
];

export const taletPoolListings: talentPoolListingType[] = [
  {
    id: 1,
    title: "Software Engineers",
    department: "Engineering",
    applicantCount: 3,
    isBookmarked: true,
  },
  {
    id: 2,
    title: "Marketing Managers",
    department: "Marketing",
    applicantCount: 102,
    isBookmarked: false,
  },
  {
    id: 3,
    title: "Product Designers",
    department: "Design",
    applicantCount: 45,
    isBookmarked: true,
  },
  {
    id: 4,
    title: "Data Analysts",
    department: "Analytics",
    applicantCount: 25,
    isBookmarked: false,
  },
  {
    id: 5,
    title: "Sales Representatives",
    department: "Sales",
    applicantCount: 17,
    isBookmarked: false,
  },
];