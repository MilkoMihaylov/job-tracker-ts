import { useState } from "react";

type Props = {
    onAdd: (title: string, company: string) => void;
};

export default function JobForm({onAdd}: Props) {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");

    function handleSubmit() {
        if (!title || !company) return;
        
        onAdd(title, company);
        setTitle("");
        setCompany("");
    }

    return (
        <div>
      <h2>Add Job</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
    );
}