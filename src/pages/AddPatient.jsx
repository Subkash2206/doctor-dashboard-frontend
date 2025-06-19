import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPatient } from "../api";

export default function AddPatient() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    symptoms: "",
    diagnosis: "",
    history: "",
  });

  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await addPatient({ ...formData, age: parseInt(formData.age) });
      setStatus("Patient added successfully ✅");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Add New Patient</h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
        {["name", "age", "symptoms", "diagnosis", "history"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ))}

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>

        {status && <p className="text-center mt-2">{status}</p>}
      </div>
    </div>
  );
}

