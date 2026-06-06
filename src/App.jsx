import { useState } from "react";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Interviews from "./components/Interviews";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar setPage={setPage} />

      <div className="flex-1 bg-gray-100">
        {page === "dashboard" && <Dashboard />}
        {page === "interviews" && <Interviews />}
      </div>
    </div>
  );
}

export default App;