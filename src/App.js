import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { useGetVideos } from "./hooks";
import { useGetCategories } from "./hooks/useGetCategories";
import { Explore, Home } from "./pages";

export const App = () => {
  useGetCategories();
  useGetVideos();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
};
