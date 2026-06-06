function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-5">
        Welcome to AI Interview Platform
      </h1>

      <p className="text-lg">
        Practice technical interviews and improve your skills.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-5 rounded shadow">
          Available Domains: 6
        </div>

        <div className="bg-white p-5 rounded shadow">
          Completed: 0
        </div>

        <div className="bg-white p-5 rounded shadow">
          Score: 0%
        </div>
      </div>
    </div>
  );
}

export default Dashboard;