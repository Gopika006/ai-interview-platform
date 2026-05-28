import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InterviewCard from "./components/InterviewCard";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="grid grid-cols-3 gap-5 p-10">
        <InterviewCard title="React Interview" />
        <InterviewCard title="Frontend Interview" />
        <InterviewCard title="HR Interview" />
      </div>
    </div>
  );
}

export default App;