import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useClickOutside } from "../../../hooks";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { useStateContext } from "../../../context/StateProvider";
import { addToLikedVideos, addToWatchLater } from "../../../utils/videoUtils";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthProvider";

export const CTABtn = (video) => {
  const [dropdown, setDropdown] = useState(false);

  const domNode = useClickOutside(() => setDropdown(false));

  const {
    watchLater,
    likedVideos,
    videosDispatch,
    toastHandler,
    setShowPlaylistModal,
  } = useStateContext();

  const { userState } = useAuthContext();

  return (
    <div className="menu-btn">
      <BsThreeDotsVertical onClick={() => setDropdown(!dropdown)} />
      {dropdown && (
        <div ref={domNode} className="stacked dropdown">
          <ul>
            <li
              onClick={() => {
                if (userState._id) {
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
                if (userState._id) {
                  addToLikedVideos(
                    video,
                    likedVideos,
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
            <li
              onClick={() => {
                if (userState._id) {
                  setShowPlaylistModal(true);
                  setDropdown(false);
                  videosDispatch({
                    type: "SET_SELECTED_VIDEO",
                    payload: video,
                  });
                } else {
                  toastHandler(true, "You need to login first!", "error");
                }
              }}
              className="item"
            >
              <BsPlusCircle />
              Add to Playlist
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
