import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Nav.css";

export default function Nav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <div className="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#0EA5E9"/>
            <path d="M6 9L12 17L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="logo-text">Comparoo</h2>
      </div>

      <ul className="nav-links">
        <li className={path === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={path === "/bestpick" ? "active" : ""}>
          <Link to="/bestpick">Best Pick</Link>
        </li>
        <li className={path === "/settings" ? "active" : ""}>
          <Link to="/settings">Settings</Link>
        </li>
        <li className={path === "/share" ? "active" : ""}>
          <Link to="/share">Share</Link>
        </li>
        <li className={path === "/profile" ? "active" : ""}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={path === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="nav-right">
        {path === "/" || path === "/profile" ? (
          <Link to="/" className="btn-primary">Login</Link>
        ) : (
          <Link to="/" className="btn-primary">Sign Up</Link>
        )}
        {path === "/profile" && (
          <div className="nav-avatar"></div>
        )}
      </div>
    </nav>
  );
}
