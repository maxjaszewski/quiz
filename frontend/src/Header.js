import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#353531",
      }}
    >
      <nav style={{ height: '100%' }}>
        <ul className="my-list" style={{ display: "flex" }}>
          <li style={{ flex: 1 }}>
            <Link
              to="/quiz"
              className="nav-link"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li style={{ flex: 20 }}></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
