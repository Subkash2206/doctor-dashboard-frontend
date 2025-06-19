// src/pages/AddPatient.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPatient, suggestDepartment } from "../api";

export default function AddPatient() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    symptoms: "",
    diagnosis: "",
    history: "",
  });

  const [aiDepartment, setAIDepartment] = useState("");
  const [aiLoading, setAILoading] = useState(false);
  const [aiError, setAIError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPatient(formData); // ✅ No assigned_department sent
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Failed to add patient:", err.response?.data || err.message);
      alert("Failed to add patient.");
    }
  };

  const handleAIDepartment = async () => {
    setAILoading(true);
    setAIError("");
    setAIDepartment("");
    try {
      const res = await suggestDepartment(formData.symptoms);
      setAIDepartment(res.data.suggested_department);
    } catch (err) {
      setAIError("Failed to get AI suggestion.");
    } finally {
      setAILoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Add Patient
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="symptoms"
          placeholder="Symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <button
          type="button"
          onClick={handleAIDepartment}
          disabled={aiLoading || !formData.symptoms}
          className="bg-green-600 text-white px-4 py-1 rounded mb-2"
        >
          {aiLoading ? "Getting AI Suggestion..." : "Suggest Department (AI)"}
        </button>

        {aiDepartment && (
          <div className="mb-2 text-blue-700 font-semibold">
            AI Suggests: {aiDepartment}
          </div>
        )}

        {aiError && <div className="mb-2 text-red-500">{aiError}</div>}

        <input
          type="text"
          name="diagnosis"
          placeholder="Diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <textarea
          name="history"
          placeholder="Medical History"
          value={formData.history}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          rows={3}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
}

