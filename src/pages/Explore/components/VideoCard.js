import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CTABtn } from "./CTABtn";

export const VideoCard = (video) => {
  const { _id, thumbnail, creator, title } = video;
  const location = useLocation();
  return (
    <div
      className={`video-card ${
        location.pathname !== "/explore" ? "popular-videos" : ""
      }`}
    >
      <Link to={`/video/${_id}`}>
        <div className="thumbnail">
          <img
            className="video-image"
            src={thumbnail.src}
            alt={thumbnail.alt}
          />
        </div>
      </Link>

      <div className="text-container">
        <img className="avatar avatar-standard" src={creator.avatar} />
        <div className="details">
          <Link to={`/video/${_id}`}>
            <p className="video-title">{title}</p>
          </Link>
          <p className="quiet">{creator.name}</p>
        </div>
        <div className="menu">
          <CTABtn {...video} />
        </div>
      </div>
    </div>
  );
};
