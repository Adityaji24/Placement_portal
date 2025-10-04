import React, { useState } from "react";
import axios from "axios";
import "./JobCard.css";

export default function JobCard({ job }) {
  const [showDescription, setShowDescription] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    cgpa: "",
    skills: "",
    jobType: "Remote",
    resume: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("address", formData.address);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("cgpa", formData.cgpa);
      data.append("skills", formData.skills);
      data.append("jobType", formData.jobType);
      data.append("resume", formData.resume);
      data.append("jobId", job.id); // link application to job

      await axios.post("http://localhost:8080/api/applications", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Application submitted successfully!");
      setShowApplyForm(false);
      setFormData({
        name: "",
        address: "",
        phone: "",
        email: "",
        cgpa: "",
        skills: "",
        jobType: "Remote",
        resume: null,
      });
    } catch (err) {
      console.error("Error submitting application:", err);
      alert("Failed to submit application.");
    }
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>

      {showDescription && (
        <div className="job-description">
          <p><strong>Requirements:</strong> {job.requirements}</p>
          <p><strong>Skills:</strong> {job.skills}</p>
          <p><strong>About Company:</strong> {job.description}</p>
        </div>
      )}

      <div className="job-card-buttons">
        <button
          className={`view-more-btn ${showDescription ? "view-less" : ""}`}
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "View Less" : "View More"}
        </button>

        <button
          className="apply-btn"
          onClick={() => setShowApplyForm(!showApplyForm)}
        >
          Apply
        </button>
      </div>

      {showApplyForm && (
        <form className="apply-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            CGPA:
            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Skill Set:
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Job Type:
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="Remote">Remote</option>
              <option value="Offline">Offline</option>
            </select>
          </label>

          <label>
            Resume / Documents:
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
