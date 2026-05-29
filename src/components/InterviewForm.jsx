import { useState } from "react";

export default function InterviewForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    if (name === "" || role === "") {
      alert("Please fill all fields");
      return;
    }

    alert(`Welcome ${name} for ${role} interview`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10 mb-20">
      
      <h2 className="text-3xl font-bold text-center mb-6">
        Start Mock Interview
      </h2>

      <input
        type="text"
        placeholder="Enter your name"
        className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Interview Type</option>
        <option value="React Developer">React Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="HR Interview">HR Interview</option>
      </select>

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Start Interview
      </button>

    </div>
  );
}