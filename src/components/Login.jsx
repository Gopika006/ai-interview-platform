function Login({ onLogin }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-3xl font-bold mb-5 text-center">
          AI Interview Platform
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="border p-3 w-full mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-3 rounded"
        />

        <button
          onClick={onLogin}
          className="bg-blue-600 text-white w-full p-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;