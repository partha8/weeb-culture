import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initalAuthState = {
    _id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    createdAt: null,
    updatedAt: null,
    encodedToken: null,
  };

  const [userState, authDispatch] = useReducer(authReducer, initalAuthState);
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from.pathname || "/profile";

  const login = async ({ email, password }, toastHandler) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      if (response.status === 200 || response.status === 201) {
        authDispatch({
          type: "HANDLE_USER",
          payload: {
            user: response.data.foundUser,
            encodedToken: response.data.encodedToken,
          },
        });

        localStorage.setItem(
          "token",
          JSON.stringify(response.data.encodedToken)
        );
        toastHandler(
          true,
          `Welcome back ${response.data.foundUser.firstName}!`,
          "success"
        );
        navigate(from, { replace: true });
      }
    } catch (error) {
      toastHandler(true, "Error, check console", "error");
      console.error(error);
    }
  };

  const signup = async (
    { firstName, lastName, email, password },
    toastHandler
  ) => {
    console.log(firstName, lastName, email, password);
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        const loginResp = await axios.post("api/auth/login", {
          email,
          password,
        });

        if (loginResp.status === 200 || loginResp.status === 201) {
          authDispatch({
            type: "HANDLE_USER",
            payload: {
              user: loginResp.data.foundUser,
              encodedToken: loginResp.data.encodedToken,
            },
          });
          localStorage.setItem(
            "token",
            JSON.stringify(loginResp.data.encodedToken)
          );
          toastHandler(
            true,
            `Welcome ${firstName} to Weeb Culture!`,
            "success"
          );
          navigate("/profile");
        }
      }
    } catch (error) {
      toastHandler(true, "Error,check console", "error");
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    authDispatch({
      type: "HANDLE_USER",
      payload: {
        user: {
          _id: null,
          firstName: null,
          lastName: null,
          email: null,
          password: null,
          createdAt: null,
          updatedAt: null,
        },
        encodedToken: null,
      },
    });
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ userState, authDispatch, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
