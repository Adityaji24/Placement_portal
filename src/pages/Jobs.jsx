import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import { motion } from "framer-motion";
import axios from "axios";
import "./jobs.css";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

  // Fetch jobs from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  // Filter jobs based on search input
  const filteredJobs = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      job.company?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-container">
      <h2 className="jobs-title">Available Jobs</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Job Listings */}
      <div className="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))
        ) : (
          <p className="no-jobs">No jobs found for "{search}"</p>
        )}
      </div>
    </div>
  );
}
