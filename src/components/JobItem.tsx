import type { Job } from "../types/job";

type Props = {
    job: Job;
    onDelete: (id: number) => void;
    onChangeStatus: (id: number, status: Job["status"]) => void;
};

export default function JobItem({ job, onDelete, onChangeStatus }: Props) {
    return (
        <div style={{border: "1px solid gray", marginBottom: 10, padding: 10}}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>Status: {job.status}</p>

            <button onClick={() => onDelete(job.id)}>Delete</button>

            <button onClick={() => onChangeStatus(job.id, "applied")}>Applied</button>
            <button onClick={() => onChangeStatus(job.id, "interview")}>Interview</button>
            <button onClick={() => onChangeStatus(job.id, "rejected")}>Rejected</button>
        </div>
    );
}