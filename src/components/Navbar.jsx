import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Placement Portal</div>
      <div className="navbar-links">
        <NavLink to="/dashboard" className="nav-item">
          Dashboard
        </NavLink>
        <NavLink to="/jobs" className="nav-item">
          Jobs
        </NavLink>
        <NavLink to="/applications" className="nav-item">
          Applications
        </NavLink>
      </div>
    </nav>
  );
}
