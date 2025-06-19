// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginDoctor } from "../api";

export default function Login() {
  const [doctorId, setDoctorId] = useState("");
  const [otp, setOtp] = useState("1234");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
console.log("✅ Login.jsx rendered");

    try {
      const res = await loginDoctor(doctorId, otp);
      console.log("✅ Login successful:", res.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Login failed:", err.response?.data || err.message);
      setError("Invalid Doctor ID or OTP.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Doctor Login</h1>

      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Doctor ID"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          className="p-2 mb-3 w-full text-black rounded"
          required
        />
        <input
          type="password"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="p-2 mb-4 w-full text-black rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>

      {error && <p className="text-red-400 mt-4">{error}</p>}
    </div>
  );
}

