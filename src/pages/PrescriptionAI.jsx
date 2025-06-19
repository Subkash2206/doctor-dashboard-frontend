import { useState } from "react";
import { generatePrescription } from "../api";
import { useNavigate } from "react-router-dom";

export default function PrescriptionAI() {
  const [symptoms, setSymptoms] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setGenerated("");
    setDepartment("");
    try {
      const res = await generatePrescription(symptoms);
      setGenerated(res.data.ai_prescription || "No prescription returned.");
      setDepartment(res.data.suggested_department || "");
    } catch (err) {
      const msg = err.response?.data?.detail || err.message;
      setError("Failed to generate prescription: " + msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-2xl mx-auto bg-gray-50 rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          AI Prescription Generator
        </h1>

        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Enter patient symptoms here..."
          className="w-full p-4 rounded border mb-4 h-32"
        ></textarea>

        <div className="flex justify-between items-center">
          <button
            onClick={handleGenerate}
            disabled={loading || !symptoms}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Generating..." : "Generate"}
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="text-gray-500 underline text-sm"
          >
            ← Back to Dashboard
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {generated && (
          <div className="mt-6 bg-white border border-gray-300 rounded p-4">
            <h2 className="text-lg font-semibold mb-2 text-green-700">
              Generated Prescription:
            </h2>
            <pre className="whitespace-pre-wrap text-gray-800">{generated}</pre>
            {department && (
              <div className="mt-4 text-blue-700 font-semibold">
                Suggested Department: {department}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

