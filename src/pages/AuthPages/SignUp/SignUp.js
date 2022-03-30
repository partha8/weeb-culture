import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthProvider";
import { useStateContext } from "../../../context/StateProvider";
import { BiShowAlt, BiHide } from "react-icons/bi";

export const SignUp = () => {
  const { signup } = useAuthContext();
  const { toastHandler } = useStateContext();

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    signup(person, toastHandler);
    setPerson({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // just checks whether passwords match
  useEffect(() => {
    if (person.password !== person.confirmPassword) {
      setError("The passwords do not match");
    } else if (person.confirmPassword === "") {
      setError("");
    } else {
      setError("The passwords match");
    }
  }, [person.confirmPassword]);

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

        <div className="signup" id="signup">
          <h3>Sign Up for Free</h3>

          <form className="auth-form" onSubmit={signupHandler}>
            <div>
              <div>
                <label className="auth-label" htmlFor="first-name">
                  First Name<span className="req">*</span>
                </label>
                <div className="input-container">
                  <input
                    className="auth-input"
                    id="first-name"
                    type="text"
                    required
                    autoComplete="off"
                    value={person.firstName}
                    name="firstName"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="auth-label" htmlFor="last-name">
                  Last Name<span className="req">*</span>
                </label>
                <div className="input-container">
                  <input
                    className="auth-input"
                    id="last-name"
                    type="text"
                    required
                    autoComplete="off"
                    value={person.lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="auth-label" htmlFor="email">
                Email Address<span className="req">*</span>
              </label>
              <div className="input-container">
                <input
                  className="auth-input"
                  id="email"
                  type="email"
                  required
                  autoComplete="off"
                  value={person.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="auth-label" htmlFor="set-password">
                Set A Password<span className="req">*</span>
              </label>
              <div className="input-container">
                <input
                  className="auth-input"
                  id="set-password"
                  type="password"
                  required
                  autoComplete="off"
                  value={person.password}
                  name="password"
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
            <div>
              <label className="auth-label" htmlFor="confirm-password">
                Confirm Password<span className="req">*</span>
              </label>
              <div className="input-container">
                <input
                  className="auth-input"
                  id="confirm-password"
                  type="password"
                  required
                  autoComplete="off"
                  value={person.confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="show-password"
                >
                  {showPassword ? <BiHide /> : <BiShowAlt />}
                </span>
              </div>
              <span>{error}</span>
            </div>

            <button type="submit" className="btn btn-form-action">
              Get Started
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
