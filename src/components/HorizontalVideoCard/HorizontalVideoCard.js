import React from "react";
import "./horizontal-video-card.css";
import { AiOutlineClose } from "react-icons/ai";
import { CTABtn } from "../../pages/Explore/components/CTABtn";
import { Link, useLocation } from "react-router-dom";
import {
  removeFromHistory,
  removeFromWatchLater,
} from "../../utils/videoUtils";
import { useStateContext } from "../../context/StateProvider";

export const HorizontalVideoCard = (video) => {
  const { _id, title, thumbnail, creator, desc } = video;
  let location = useLocation();
  const { videosDispatch, toastHandler } = useStateContext();

  return (
    <div className="horizontal-video-card">
      <Link to={`/video/${_id}`}>
        <div className="hz-thumbnail">
          <img
            className="video-image"
            src={thumbnail.src}
            alt={thumbnail.alt}
          />
        </div>
      </Link>
      <div className="hz-text-container">
        <Link to={`/video/${_id}`}>
          <h6>{title}</h6>
        </Link>
        <p className="quiet hz-creator">{creator.name}</p>
        <p className="quiet hz-desc">{desc.substr(0, 100) + "..."}</p>
      </div>

      <div className="hz-btn-container">
        <AiOutlineClose
          onClick={() => {
            if (location.pathname === "/history") {
              removeFromHistory(_id, videosDispatch, toastHandler);
            }
            if (location.pathname === "/watch-later") {
              removeFromWatchLater(_id, videosDispatch, toastHandler);
            }
          }}
        />
      </div>
    </div>
  );
};
