import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Applications.css";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all applications from backend
    const fetchApplications = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/applications");
        setApplications(response.data); // assuming backend returns an array of applications
        setLoading(false);
      } catch (error) {
        console.error("Error fetching applications:", error);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <div className="applications-container"><h2>Loading applications...</h2></div>;
  }

  if (!applications.length) {
    return <div className="applications-container"><h2>No applications found</h2></div>;
  }

  return (
    <div className="applications-container">
      <h2>My Applications</h2>
      <div className="applications-grid">
        {applications.map(app => (
          <div key={app.id} className="application-card">
            <h3>{app.job?.title || app.jobTitle}</h3>
            <p className="company">{app.job?.company || app.company}</p>
            <p className={`status ${app.status?.toLowerCase() || "applied"}`}>
              {app.status || "Applied"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
