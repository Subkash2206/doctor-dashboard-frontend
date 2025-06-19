// src/api.js
import axios from "axios";

// ✅ Use deployed backend URL
const API = axios.create({
  baseURL: "https://doctor-dashboard-backend-6853.onrender.com",
});

// Doctor login
export const loginDoctor = (doctorId, otp = "1234") =>
  API.post("/auth/login", { doctor_id: doctorId, otp });

// Patients
export const fetchPatients = () => API.get("/patients");
export const addPatient = (patient) => API.post("/patients", patient);

// AI Prescription
export const generatePrescription = (symptoms) =>
  API.post("/prescription/ai", { symptoms });

