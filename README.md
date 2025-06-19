# 🩺 AI-Powered Doctor Dashboard – Frontend

This is the **React frontend** for the AI-Powered Doctor Dashboard — a smart system that allows doctors to manage patient data and generate prescriptions using AI.

---

## 🔗 Live URL

👉 [https://doctor-dashboard-frontend.vercel.app](https://doctor-dashboard-frontend.vercel.app)

---

## 🌟 Features

-  **Doctor Login** (via ID + mock OTP)
-  **Patient Dashboard** – view & add patients
-  **AI Prescription Generator** – powered by LLM
-  **Responsive Design** – Tailwind CSS
-  **Live API integration** with FastAPI backend

---

## 🔧 Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Deployment:** Vercel
- **Backend:** FastAPI on Render (connected via API)

---

## ⚙️ Project Structure
```bash
doctor-dashboard-frontend/
├── public/
├── src/
│ ├── pages/ # Dashboard, Login, AddPatient, etc.
│ ├── api.js # Axios calls to backend
│ ├── App.js # App routes
│ └── index.js # Entry point
├── tailwind.config.js
├── package.json
└── README.md
```


---

## 🌐 Backend API

All API requests hit:
🔗 Live Backend: (https://doctor-dashboard-backend-6853.onrender.com)
Swagger UI : (https://doctor-dashboard-backend-6853.onrender.com/docs#/)


Make sure this is reflected in `src/api.js`.

---

## 🖥️ Local Development

```bash
npm install
npm start
```
🛠 Hosting & Deployment
Frontend: React app (planned for Vercel/Netlify or hosted locally)

Backend: FastAPI server deployed on Render

Includes support for AI endpoints using Hugging Face Inference API

🔗 Backend API: https://doctor-dashboard-backend.onrender.com


🧠 AI: Hugging Face Inference API (Mistral 7B)
🚀 Deployment: Render (backend)
📦 Deployment
Platform: Vercel
Automatically redeploys on main push via GitHub.



🔧 Functionality
The AI-Powered Doctor Dashboard streamlines patient management and assists doctors with AI-generated recommendations. Key features include:

👤 Doctor Login
Simple OTP-based login (for prototype/demo purposes).

Simulates doctor session without complex auth systems.

🧾 Add & View Patients
Doctors can add new patients with:

Name, age, gender

Symptoms, diagnosis, and history

Patients are auto-assigned to a medical department using an AI model (based on symptoms).

📋 Dashboard
Displays all patients with essential information.

Click into each patient for full details and AI features.

🧠 AI-Powered Prescription Generator
Uses Hugging Face's Mistral-7B-Instruct model to generate a treatment or prescription based on symptoms.

Available via a separate page or directly in the patient profile.

Sorted based off of the department and severity.
