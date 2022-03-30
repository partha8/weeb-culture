import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Toast } from "./components";
import { useAuthContext } from "./context/AuthProvider";
import { useStateContext } from "./context/StateProvider";
import { useGetVideos } from "./hooks";
import { useGetCategories } from "./hooks/useGetCategories";
import { Explore, Home, Login, Profile, SignUp } from "./pages";

export const App = () => {
  useGetCategories();
  useGetVideos();
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
      </Routes>
    </>
  );
};
