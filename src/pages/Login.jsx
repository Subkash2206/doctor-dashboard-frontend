import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginDoctor } from "../api";

export default function Login() {
  const [doctorId, setDoctorId] = useState("");
  const [otp, setOtp] = useState("1234");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginDoctor(doctorId, otp);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid Doctor ID or OTP.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Doctor Login</h1>

      <input
        type="text"
        placeholder="Doctor ID"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
        className="p-2 mb-3 w-64 text-black rounded"
      />
      <input
        type="password"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="p-2 mb-4 w-64 text-black rounded"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Login
      </button>

      {error && <p className="text-red-400 mt-3">{error}</p>}
    </div>
  );
}

