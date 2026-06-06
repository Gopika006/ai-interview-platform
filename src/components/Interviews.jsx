import { useState } from "react";

function Interviews() {
  const [domain, setDomain] = useState("");

  return (
    <div className="p-8">
      {!domain ? (
        <>
          <h1 className="text-3xl font-bold mb-6">
            Choose Interview Domain
          </h1>

          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => setDomain("Frontend Developer")}
              className="bg-blue-500 text-white p-4 rounded"
            >
              Frontend Developer
            </button>

            <button
              onClick={() => setDomain("Backend Developer")}
              className="bg-green-500 text-white p-4 rounded"
            >
              Backend Developer
            </button>

            <button
              onClick={() => setDomain("Full Stack Developer")}
              className="bg-purple-500 text-white p-4 rounded"
            >
              Full Stack Developer
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">
            {domain}
          </h1>

          <h2 className="text-xl mb-4">
            Select Difficulty
          </h2>

          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded">
              Easy
            </button>

            <button className="bg-yellow-500 text-white px-6 py-3 rounded">
              Medium
            </button>

            <button className="bg-red-500 text-white px-6 py-3 rounded">
              Hard
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Interviews;