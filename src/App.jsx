import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <Hero />

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">
            AI Interview Dashboard
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow p-6 rounded">
              <h3 className="text-xl font-bold">
                Total Interviews
              </h3>
              <p className="text-3xl mt-3">12</p>
            </div>

            <div className="bg-white shadow p-6 rounded">
              <h3 className="text-xl font-bold">
                Completed
              </h3>
              <p className="text-3xl mt-3">8</p>
            </div>

            <div className="bg-white shadow p-6 rounded">
              <h3 className="text-xl font-bold">
                Pending
              </h3>
              <p className="text-3xl mt-3">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;