import React, { useState } from "react";
import { Footer, Sidebar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import { useFilteredVideos } from "../../hooks";
import "./explore.css";
import { VideoCard } from "./components";

export const Explore = () => {
  const { videosDispatch, categories, sortByCategory } = useStateContext();
  const filteredVideos = useFilteredVideos();

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="pages">
          <section className="category-btns underline">
            <button
              onClick={() =>
                videosDispatch({
                  type: "SORT_BY_CATEGORY",
                  payload: "All",
                })
              }
              className={`btn ${sortByCategory === "All" ? "active" : ""}`}
            >
              All
            </button>
            {categories.map((category) => {
              const { _id, categoryName } = category;
              return (
                <button
                  onClick={() =>
                    videosDispatch({
                      type: "SORT_BY_CATEGORY",
                      payload: categoryName,
                    })
                  }
                  key={_id}
                  className={`btn ${
                    sortByCategory === categoryName ? "active" : ""
                  }`}
                >
                  {categoryName}
                </button>
              );
            })}
          </section>

          <section className="videos-container">
            {filteredVideos.map((video) => {
              return <VideoCard key={video._id} {...video} />;
            })}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
