import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useClickOutside } from "../../../hooks";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { useStateContext } from "../../../context/StateProvider";
import { addToLikedVideos, addToWatchLater } from "../../../utils/videoUtils";
import { useLocation } from "react-router-dom";

export const CTABtn = (video) => {
  const [dropdown, setDropdown] = useState(false);

  const domNode = useClickOutside(() => setDropdown(false));
  const { watchLater, likedVideos, videosDispatch, toastHandler } =
    useStateContext();

  const encodedToken = localStorage.getItem("token");

  return (
    <div className="menu-btn">
      <BsThreeDotsVertical onClick={() => setDropdown(!dropdown)} />
      {dropdown && (
        <div ref={domNode} className="stacked dropdown">
          <ul>
            <li
              onClick={() => {
                if (encodedToken) {
                  addToWatchLater(
                    video,
                    watchLater,
                    videosDispatch,
                    toastHandler
                  );
                } else {
                  toastHandler(true, "You need to login first!", "error");
                }
              }}
              className="item "
            >
              {watchLater.some((item) => item._id === video._id) ? (
                <BsDashCircle />
              ) : (
                <BsPlusCircle />
              )}{" "}
              Watch Later
            </li>
            <li
              onClick={() => {
                if (encodedToken) {
                  addToLikedVideos(
                    video,
                    watchLater,
                    videosDispatch,
                    toastHandler
                  );
                } else {
                  toastHandler(true, "You need to login first!", "error");
                }
              }}
              className="item"
            >
              {likedVideos.some((item) => item._id === video._id) ? (
                <BsDashCircle />
              ) : (
                <BsPlusCircle />
              )}
              Like Video
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
