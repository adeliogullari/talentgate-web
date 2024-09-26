import { employerDefaultJobs } from "@/lib/mock-data";
import JobListItem from "./../_components/card/JobsListItem";

const JobsArchivePage = () => {
  return (
    <div className="p-8 flex flex-col">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Jobs Archive
      </h1>
      <div className="w-full flex flex-col gap-6">
        {employerDefaultJobs.map((jobItem) => (
          <JobListItem jobItem={jobItem} key={jobItem.id} />
        ))}
      </div>
    </div>
  );
};

export default JobsArchivePage;
