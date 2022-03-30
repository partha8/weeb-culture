import React from "react";
import error from "../../assets/404.png";

export const Error404 = () => {
  return (
    <div className="text-center">
      <img src={error} alt="error" />
      <h1>Page Not Found</h1>
    </div>
  );
};
