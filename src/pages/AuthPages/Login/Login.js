import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthProvider";
import { useStateContext } from "../../../context/StateProvider";
import { BiShowAlt, BiHide } from "react-icons/bi";

export const Login = () => {
  const [person, setPerson] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuthContext();
  const { toastHandler } = useStateContext();

  const loginHandler = (e) => {
    e.preventDefault();
    if (person.email && person.password) {
      login(person, toastHandler);
      setPerson({ email: "", password: "" });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const guestLogin = () => {
    setPerson({ email: "adarshbalika@gmail.com", password: "adarshBalika123" });
  };

  return (
    <>
      <section className="form-container">
        <section className="tab-group">
          <NavLink
            className={({ isActive }) => `tab ${isActive ? "current-tab" : ""}`}
            to="/login"
          >
            Log In
          </NavLink>
          <NavLink
            className={({ isActive }) => `tab ${isActive ? "current-tab" : ""}`}
            to="/signup"
          >
            Sign up
          </NavLink>
        </section>

        <div className="login" id="login">
          <h3>Welcome Back!</h3>

          <form className="auth-form" onSubmit={loginHandler}>
            <div>
              <label className="auth-label">
                Email Address<span className="req">*</span>
              </label>
              <div className="input-container">
                <input
                  className="auth-input"
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  value={person.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="auth-label">
                Password<span className="req">*</span>
              </label>
              <div className="input-container">
                <input
                  className="auth-input"
                  type={`${showPassword ? "text" : "password"}`}
                  name="password"
                  required
                  autoComplete="off"
                  value={person.password}
                  onChange={handleChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="show-password"
                >
                  {showPassword ? <BiHide /> : <BiShowAlt />}
                </span>
              </div>
            </div>

            <button className="btn btn-form-action">Log In</button>
            <button onClick={guestLogin} className="btn btn-form-action ">
              Guest Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
