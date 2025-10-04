import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import StudentDashboard from "./pages/Student/StudentDashboard";
import JobListings from "./pages/Student/JobListings";
import Applications from "./pages/Student/Applications";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddJob from "./pages/Admin/AddJob";
import ManageApplications from "./pages/Admin/ManageApplications";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student routes */}
        <Route
          path="/student/*"
          element={<ProtectedRoute role="STUDENT"><StudentRoutes /></ProtectedRoute>}
        />

        {/* Admin routes */}
        <Route
          path="/admin/*"
          element={<ProtectedRoute role="ADMIN"><AdminRoutes /></ProtectedRoute>}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function StudentRoutes() {
  return (
    <Routes>
      <Route path="" element={<StudentDashboard />} />
      <Route path="jobs" element={<JobListings />} />
      <Route path="applications" element={<Applications />} />
    </Routes>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="" element={<AdminDashboard />} />
      <Route path="add-job" element={<AddJob />} />
      <Route path="manage-applications" element={<ManageApplications />} />
    </Routes>
  );
}
