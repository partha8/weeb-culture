import React from "react";
import { Footer, HorizontalVideoCard, Sidebar } from "../../components";
import { useStateContext } from "../../context/StateProvider";
import "./history.css";

export const History = () => {
  const { history } = useStateContext();
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="pages history-page">
          {history.map((item) => {
            return <HorizontalVideoCard key={item._id} {...item} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
