import React from "react";
import PrescriptionAI from "./pages/PrescriptionAI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddPatient from "./pages/AddPatient";
import PatientDetails from "./pages/PatientDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path="/generate-prescription" element={<PrescriptionAI />} />
      </Routes>
    </Router>
  );
}

export default App;

