import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InterviewCard from "./components/InterviewCard";
import InterviewForm from "./components/InterviewForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Interview Cards */}
      <div className="grid md:grid-cols-3 gap-6 p-10">
        <InterviewCard title="React Interview" />
        <InterviewCard title="Frontend Interview" />
        <InterviewCard title="HR Interview" />
      </div>

      {/* Interview Form */}
      <InterviewForm />

    </div>
  );
}

export default App;