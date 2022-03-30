import React from "react";
import { useAuthContext } from "../../context/AuthProvider";
import "./profile.css";

export const Profile = () => {
  const { userState, logout } = useAuthContext();

  return (
    <>
      <h2>Hey {userState.firstName}</h2>
      <button
        onClick={() => logout()}
        className="btn btn-primary-solid cta-btn"
      >
        Logout
      </button>
    </>
  );
};
