import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { useGetCategories } from "./hooks/useGetCategories";
import { Home } from "./pages";

export const App = () => {
  useGetCategories();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
