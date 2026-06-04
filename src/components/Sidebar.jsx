import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-gray-900 text-white min-h-screen transition-all duration-300 ${
          open ? "w-64" : "w-20"
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="p-4 text-xl"
        >
          ☰
        </button>

        <ul className="mt-6 space-y-4 px-4">
          <li className="hover:text-blue-400 cursor-pointer">
            {open ? "Dashboard" : "🏠"}
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            {open ? "Interviews" : "🎤"}
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            {open ? "Reports" : "📊"}
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            {open ? "Settings" : "⚙️"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;