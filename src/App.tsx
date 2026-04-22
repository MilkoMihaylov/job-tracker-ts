import { useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  status: "applied" | "interview" | "rejected";
};

function App() {

  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      status: "applied",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Meta",
      status: "interview"
    },
  ]);

  return (
    <div>
      <h1>Job Tracker TS</h1>

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} - {job.company} ({job.status})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
