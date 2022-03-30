import React from "react";
import { CTABtn } from "./CTABtn";

export const VideoCard = ({ thumbnail, creator, title }) => {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <img className="video-image" src={thumbnail.src} alt={thumbnail.alt} />
      </div>
      <div className="text-container">
        <img className="avatar avatar-standard" src={creator.avatar} />
        <div className="details">
          <p className="video-title">{title}</p>
          <p className="quiet">{creator.name}</p>
        </div>
        <div className="menu">
          <CTABtn/>
        </div>
      </div>
    </div>
  );
};
