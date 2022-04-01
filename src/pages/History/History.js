import React from "react";
import { Footer, HorizontalVideoCard, Sidebar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import { clearHistory } from "../../utils/videoUtils";
import "./history.css";

export const History = () => {
  const { history, videosDispatch, toastHandler } = useStateContext();
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="pages history-page">
          <div className="flex-center history-btn-container">
            <h3>Watch History</h3>
            <button
              onClick={() => {
                if (history.length) {
                  clearHistory(videosDispatch, toastHandler);
                }
              }}
              className="btn"
            >
              Clear All
            </button>
          </div>
          {history.map((item) => {
            return <HorizontalVideoCard key={item._id} {...item} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
