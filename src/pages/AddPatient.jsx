import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPatient } from "../api";

export default function AddPatient() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "Male",
    symptoms: "",
    assigned_department: "General Medicine",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await addPatient(form);
      setSuccess(true);
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      console.error("❌ Error adding patient:", err);
      setError("Failed to add patient.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Add New Patient</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 mb-3 w-full text-black rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="p-2 mb-3 w-full text-black rounded"
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="p-2 mb-3 w-full text-black rounded"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <textarea
          name="symptoms"
          placeholder="Symptoms"
          value={form.symptoms}
          onChange={handleChange}
          className="p-2 mb-3 w-full text-black rounded"
          required
        />
        <select
          name="assigned_department"
          value={form.assigned_department}
          onChange={handleChange}
          className="p-2 mb-4 w-full text-black rounded"
        >
          <option>General Medicine</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Pediatrics</option>
          <option>Oncology</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full"
        >
          Add Patient
        </button>

        {success && (
          <p className="text-green-400 mt-4 text-center">Patient added!</p>
        )}
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
      </form>
    </div>
  );
}

