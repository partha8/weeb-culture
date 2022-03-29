import React from "react";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="nav">
      <h2 className="brand">
        {" "}
        <span className="accent-color">W</span>eeb{" "}
        <span className="accent-color">C</span>ulture
      </h2>

      <section className="search-bar">
        <input placeholder="search videos" className="search" type="text" />
        <AiOutlineSearch className="search-icon" />
      </section>

      <section className="account-section">
        <FaUserAlt className="user" />
      </section>
    </nav>
  );
};
