# 🩺 AI-Powered Doctor Dashboard – Frontend

This is the **React frontend** for the AI-Powered Doctor Dashboard — a smart system that allows doctors to manage patient data and generate prescriptions using AI.

---

## 🔗 Live URL

👉 [https://doctor-dashboard-frontend.vercel.app](https://doctor-dashboard-frontend.vercel.app)

---

## 🌟 Features

- 👨‍⚕️ **Doctor Login** (via ID + mock OTP)
- 👥 **Patient Dashboard** – view & add patients
- 🤖 **AI Prescription Generator** – powered by LLM
- 💅 **Responsive Design** – Tailwind CSS
- 🔌 **Live API integration** with FastAPI backend

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

📦 Deployment
Platform: Vercel

Automatically redeploys on main push via GitHub.
