function Sidebar({ setPage }) {
  return (
    <div className="w-64 bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">
        AI Interview
      </h2>

      <ul className="space-y-4">
        <li
          className="cursor-pointer hover:text-blue-400"
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </li>

        <li
          className="cursor-pointer hover:text-blue-400"
          onClick={() => setPage("interviews")}
        >
          Interviews
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;