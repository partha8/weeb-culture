import React from "react";
import { Footer, HorizontalVideoCard, Sidebar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import "./liked-videos.css";

export const LikedVideos = () => {
  const { likedVideos } = useStateContext();
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="pages likedVideos-page">
          <h3 className="text-center">
            Liked Videos {likedVideos.length}
          </h3>

          {likedVideos.map((item) => {
            return <HorizontalVideoCard key={item._id} {...item} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
