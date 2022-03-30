import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Toast } from "./components";
import { useAuthContext } from "./context/AuthProvider";
import { useStateContext } from "./context/StateProvider";

import {
  useGetHistory,
  useGetVideos,
  useSignup,
  useGetCategories,
} from "./hooks";

import {
  Explore,
  Home,
  Login,
  Profile,
  SignUp,
  Error404,
  History,
} from "./pages";

import { PrivateRoute } from "./routes/PrivateRoute";

export const App = () => {
  useGetCategories();
  useGetVideos();
  useGetHistory();
  useSignup();

  const { toast } = useStateContext();
  const { userState } = useAuthContext();

  return (
    <>
      {toast.showToast && <Toast />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        {userState._id && <Route path="/profile" element={<Profile />} />}

        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};
