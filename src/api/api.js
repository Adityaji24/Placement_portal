import axios from "axios";

const API_URL = "http://localhost:8080/api";

// 🔹 AUTH
export const registerUser = (data) =>
  axios.post(`${API_URL}/auth/register`, data);

export const loginUser = (data) =>
  axios.post(`${API_URL}/auth/login`, data);

// 🔹 JOBS
export const getJobs = () => axios.get(`${API_URL}/jobs`);
export const createJob = (data) => axios.post(`${API_URL}/jobs`, data);

// 🔹 APPLICATIONS
export const applyForJob = (userId, jobId) =>
  axios.post(`${API_URL}/applications`, {
    user: { id: userId },
    job: { id: jobId },
    status: "Pending",
  });

export const getUserApplications = (userId) =>
  axios.get(`${API_URL}/applications/user/${userId}`);
