import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useAuthContext } from "../../context/AuthProvider";
import { useClickOutside } from "../../hooks";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { userState, logout } = useAuthContext();
  const domNode = useClickOutside(() => setOpenDrawer(false));
  return (
    <nav className="nav">
      {/* brand logo */}
      <Link to="/">
        <h2 className="brand">
          {" "}
          <span className="accent-color">W</span>eeb{" "}
          <span className="accent-color">C</span>ulture
        </h2>
      </Link>

      {/* account */}
      <section onClick={() => setOpenDrawer(true)} className="account-section">
        <FaUserAlt className="user" />
      </section>

      {/* drawer */}
      {openDrawer &&
        (!userState._id ? (
          <div ref={domNode} className="stacked dropdown auth-drawer">
            <ul>
              <li className="item">
                <Link onClick={() => setOpenDrawer(false)} to="/login">
                  Login
                </Link>
              </li>
              <li className="item">
                <Link onClick={() => setOpenDrawer(false)} to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div ref={domNode} className="stacked dropdown auth-drawer">
            <ul>
              <li className="item">
                <Link onClick={() => setOpenDrawer(false)} to="/profile">
                  Profile
                </Link>
              </li>
              <li
                onClick={() => {
                  setOpenDrawer(false);
                  logout();
                }}
                className="item"
              >
                Logout
              </li>
            </ul>
          </div>
        ))}
    </nav>
  );
};
