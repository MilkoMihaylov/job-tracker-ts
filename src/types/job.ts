export type JobStatus = "applied" | "interview" | "rejected";

export type Job = {
    id: number;
    title: string;
    company: string;
    status: JobStatus;
};