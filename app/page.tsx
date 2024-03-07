import { AboutUs } from "./components/AboutUs";
import JobCard from "./components/JobCard";
import { JobList } from "@/JobList";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-yellow-200 overflow-hidden">
      <AboutUs />
      {JobList.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
}
