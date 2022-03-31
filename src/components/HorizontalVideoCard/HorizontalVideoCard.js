import React from "react";
import "./horizontal-video-card.css";
import { AiOutlineClose } from "react-icons/ai";
import { CTABtn } from "../../pages/Explore/components/CTABtn";
import { useLocation } from "react-router-dom";
import { removeFromHistory } from "../../utils/videoUtils";
import { useStateContext } from "../../context/StateProvider";

export const HorizontalVideoCard = ({
  _id,
  title,
  thumbnail,
  creator,
  desc,
}) => {
  let location = useLocation();
  const { videosDispatch, toastHandler } = useStateContext();

  return (
    <div className="horizontal-video-card">
      <div className="hz-thumbnail">
        <img className="video-image" src={thumbnail.src} alt={thumbnail.alt} />
      </div>
      <div className="hz-text-container">
        <h6>{title}</h6>
        <p className="quiet hz-creator">{creator.name}</p>
        <p className="quiet hz-desc">{desc.substr(0, 100) + "..."}</p>
      </div>
      <div className="hz-btn-container">
        <AiOutlineClose
          onClick={() => {
            if (location.pathname === "/history") {
              removeFromHistory(_id, videosDispatch, toastHandler);
            }
          }}
        />
        <CTABtn />
      </div>
    </div>
  );
};
