import React from "react";
import { Footer, Sidebar } from "../../components";
import { useAuthContext } from "../../context/AuthProvider";
import "./profile.css";

export const Profile = () => {
  const { userState, logout } = useAuthContext();

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="pages">
          <div className="flex-center margin-top-1">
            <h2>Hey {userState.firstName}</h2>
            <button onClick={() => logout()} className="btn ">
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
