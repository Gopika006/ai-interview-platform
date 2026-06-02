function InterviewCard({ title, level }) {
  return (
    <div className="bg-white p-5 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-gray-600 mt-2">
        Level: {level}
      </p>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Start
      </button>
    </div>
  );
}

export default InterviewCard;