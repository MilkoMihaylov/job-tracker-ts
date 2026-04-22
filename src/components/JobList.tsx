import type { Job } from "../types/job";
import JobItem from "./JobItem";

type Props = {
  jobs: Job[];
  onDelete: (id: number) => void;
  onChangeStatus: (id: number, status: Job["status"]) => void;
};

export default function JobList({ jobs, onDelete, onChangeStatus }: Props) {
  return (
    <div>
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          onDelete={onDelete}
          onChangeStatus={onChangeStatus}
        />
      ))}
    </div>
  );
}