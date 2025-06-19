// src/pages/PatientDetails.jsx

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPatients, generatePrescription } from "../api";

export default function PatientDetails() {
  const { id } = useParams(); // get the patient index from URL
  const navigate = useNavigate();

  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [aiPrescription, setAiPrescription] = useState("");

  useEffect(() => {
    const loadPatient = async () => {
      try {
        const res = await fetchPatients();
        const target = res.data[parseInt(id)];
        setPatient(target);
      } catch (err) {
        console.error("Failed to fetch patient:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPatient();
  }, [id]);

  const handleGenerate = async () => {
    try {
      const res = await generatePrescription(patient.symptoms);
      setAiPrescription(res.data.ai_prescription);
    } catch (err) {
      console.error("AI generation failed:", err);
      setAiPrescription("AI generation failed. Try again.");
    }
  };

  if (loading) return <p className="p-8 text-center">Loading...</p>;
  if (!patient) return <p className="p-8 text-red-500">Patient not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        ← Back to Dashboard
      </button>

      <div className="bg-white shadow rounded p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">{patient.name}</h2>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Symptoms:</strong> {patient.symptoms}</p>
        <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
        <p><strong>History:</strong> {patient.history}</p>
        <p><strong>Department:</strong> {patient.assigned_department}</p>
      </div>

      <div className="mt-6">
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate AI Prescription
        </button>

        {aiPrescription && (
          <div className="mt-4 bg-white border rounded p-4 shadow">
            <h3 className="font-bold mb-2">AI Prescription Suggestion:</h3>
            <p className="whitespace-pre-wrap">{aiPrescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}

