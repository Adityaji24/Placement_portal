import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true); // default to dark mode
  const [stats, setStats] = useState({
    jobs: 0,
    applications: 0,
    interviews: 0,
  });

  // Simulate fetching stats dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        jobs: Math.floor(Math.random() * 50) + 10,
        applications: Math.floor(Math.random() * 20),
        interviews: Math.floor(Math.random() * 10),
      });
    }, 3000); // update every 3 seconds for dynamic effect
    return () => clearInterval(interval);
  }, []);

  // Card animation variants
  const cardVariants = {
    hover: { scale: 1.08, boxShadow: darkMode ? "0 0 20px #0ff" : "0 12px 30px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };

  return (
    <div className={`dashboard-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Theme Toggle */}
      <button
        className="theme-toggle-btn"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Title Section */}
      <motion.h2
        className="dashboard-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Placement Portal 🚀
      </motion.h2>

      <motion.p
        className="dashboard-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Quick access to Jobs and Applications.
      </motion.p>

      {/* Stats Section */}
      <motion.div
        className="dashboard-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {["jobs", "applications", "interviews"].map((key) => (
          <motion.div
            key={key}
            className="stat-card"
            whileHover={{ scale: 1.1, boxShadow: darkMode ? "0 0 25px #0ff" : "0 12px 30px rgba(0,0,0,0.2)" }}
            animate={{ scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } }}
          >
            <motion.h3
              key={stats[key]}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              {stats[key]}
            </motion.h3>
            <p>{key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive Cards */}
      <div className="dashboard-cards">
        <motion.div
          className="dashboard-card"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/jobs")}
        >
          <h3>💼 Jobs</h3>
          <p>Explore the latest job opportunities and internships.</p>
          <motion.button
            className="card-btn"
            whileHover={{ scale: 1.1, backgroundColor: darkMode ? "#0ff" : "#1d4ed8" }}
            whileTap={{ scale: 0.9 }}
          >
            Explore
          </motion.button>
        </motion.div>

        <motion.div
          className="dashboard-card"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/applications")}
        >
          <h3>📝 Applications</h3>
          <p>Track your application status and updates in real-time.</p>
          <motion.button
            className="card-btn"
            whileHover={{ scale: 1.1, backgroundColor: darkMode ? "#0ff" : "#15803d" }}
            whileTap={{ scale: 0.9 }}
          >
            View
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
