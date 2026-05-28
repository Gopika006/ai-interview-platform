export default function InterviewCard({ title }) {
  return (
    <div className="p-5 shadow rounded-xl">
      <h2 className="text-xl font-semibold">{title}</h2>

      <button className="mt-4 bg-black text-white px-4 py-2 rounded">
        Start
      </button>
    </div>
  );
}