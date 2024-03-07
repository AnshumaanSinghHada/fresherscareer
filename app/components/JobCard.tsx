import Image from "next/image";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <>
      <div className="container mx-auto flex bg-white hover:shadow-zinc-500 hover:shadow-md shadow-md rounded-3xl p-1 items-center m-7 w-[95%] md:w-[80%] lg:w-[60%]">
        <div id="JobImage" className="p-2 basis-1/6">
          <Image src={job.image_url} alt="job image" width={200} height={200} />
        </div>
        <div id="JobHeading" className="p-2 basis-5/6">
          <Link href={job.link} target="_blank">
            <h5 className="text-black text-sm">{job.heading}</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobCard;
