import { useEffect, useState } from "react";
import { fetchPatients, deletePatient } from "../api";

export default function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const res = await fetchPatients();
        setPatients(res.data);
      } catch (err) {
        console.error("Error fetching patients:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  const handleDelete = async (index) => {
    setDeleting(index);
    setDeleteError("");
    try {
      await deletePatient(index);
      setPatients((prev) => prev.filter((_, i) => i !== index));
    } catch (err) {
      setDeleteError("Failed to delete patient.");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Patient Dashboard</h1>

      <div className="flex justify-end gap-4 mb-4">
        <a
          href="/add-patient"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Patient
        </a>
        <a
          href="/generate-prescription"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          🔮 AI Prescription
        </a>
      </div>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : patients.length === 0 ? (
        <p className="text-center text-gray-500">No patients yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((patient, index) => (
            <div
              key={index}
              className="bg-white shadow rounded p-4 border border-gray-200"
            >
              <a
                href={`/patient/${index}`}
                className="text-xl font-semibold mb-2 text-blue-600 hover:underline"
              >
                {patient.name}
              </a>
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Gender:</strong> {patient.gender}</p>
              <p><strong>Symptoms:</strong> {patient.symptoms}</p>
              <p><strong>Assigned Dept:</strong> {patient.assigned_department}</p>
              <button
                onClick={() => handleDelete(index)}
                disabled={deleting === index}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                {deleting === index ? "Deleting..." : "Delete"}
              </button>
              {deleteError && deleting === index && (
                <div className="text-red-500 mt-1">{deleteError}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

