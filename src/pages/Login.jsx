import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { Lightbulb } from "lucide-react"; // bulb icon
import "./Login.css"; // your custom styling

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call login from AuthContext
      const userData = await login({ email, password });
      console.log("Logged in user:", userData);
      alert("✅ Login successful!");
      navigate("/dashboard"); // redirect to dashboard
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert("❌ Login failed: " + (err.response?.data || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`login-container ${isOn ? "light" : "dark"}`}>
      {/* Bulb Icon */}
      <motion.div
        className="bulb-wrapper"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`bulb ${isOn ? "on" : "off"}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOn(true)}
        >
          <Lightbulb size={80} />
        </motion.div>
      </motion.div>

      {/* Login Card */}
      {isOn && (
        <motion.div
          className="login-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h2
            className="login-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Welcome Back
          </motion.h2>

          <form onSubmit={handleLogin}>
            <motion.input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              required
            />

            <motion.input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              required
            />

            <motion.button
              type="submit"
              className="login-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>
          </form>

          <motion.p
            className="login-register"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
