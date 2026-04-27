import { useState } from "react";
import type { Job } from "./types/job";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState<Job[]>([
    { id: 1, title: "Frontend Dev", company: "Google", status: "applied" },
    { id: 2, title: "Backend Dev", company: "Meta", status: "interview" },
  ]);

  function addJob(title: string, company: string) {
    const newJob: Job = {
      id: Date.now(),
      title,
      company,
      status: "applied",
    };

    setJobs((prev) => [...prev, newJob]);
  }

  function deleteJob(id: number) {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  }

  function changeStatus(id: number, status: Job["status"]) {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, status } : job
      )
    );
  }

  return (
    <div className="app-container">
      <h1>Job Tracker TS</h1>

      <JobForm onAdd={addJob} />

      <JobList
        jobs={jobs}
        onDelete={deleteJob}
        onChangeStatus={changeStatus}
      />
    </div>
  );
}

export default App;