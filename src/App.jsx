import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InterviewForm from "./components/InterviewForm";
import InterviewCard from "./components/InterviewCard";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto p-6">
        <InterviewForm />

        <h2 className="text-3xl font-bold mt-10 mb-6">
          Available Interviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <InterviewCard
            title="React Interview"
            level="Beginner"
          />

          <InterviewCard
            title="JavaScript Interview"
            level="Intermediate"
          />

          <InterviewCard
            title="Frontend Developer"
            level="Advanced"
          />
        </div>
      </div>
    </>
  );
}

export default App;