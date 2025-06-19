// src/api.js
import axios from "axios";

// ✅ Deployed backend URL
const API = axios.create({
  baseURL: "https://doctor-dashboard-backend-6853.onrender.com",
});

export const loginDoctor = (doctorId, otp = "1234") =>
  API.post("/auth/login", { doctor_id: doctorId, otp });

export const fetchPatients = () => API.get("/patients");
export const addPatient = (patient) => API.post("/patients", patient);
export const generatePrescription = (symptoms) =>
  API.post("/prescription/ai", { symptoms });
export const suggestDepartment = (symptoms) =>
  API.post("/patients/suggest-department", { symptoms });
export const deletePatient = (id) =>
  API.delete(`/patients/${id}`);

