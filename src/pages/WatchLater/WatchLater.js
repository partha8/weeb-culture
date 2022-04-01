import React from "react";
import { Footer, HorizontalVideoCard, Sidebar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import "./watch-later.css";

export const WatchLater = () => {
  const { watchLater, videosDispatch, toastHandler } = useStateContext();
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="pages watchLater-page">
          <h3 className="text-center">Watch Later {watchLater.length}</h3>

          {watchLater.map((item) => {
            return <HorizontalVideoCard key={item._id} {...item} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
