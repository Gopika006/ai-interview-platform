import { useState } from "react";

function InterviewForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Enter interview role");
      return;
    }

    alert(`Interview Created for ${name}`);
    setName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-6 rounded"
    >
      <h2 className="text-2xl font-bold mb-4">
        Create Interview
      </h2>

      <input
        type="text"
        placeholder="Frontend Developer"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border w-full p-3 rounded mb-4"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Create
      </button>
    </form>
  );
}

export default InterviewForm;