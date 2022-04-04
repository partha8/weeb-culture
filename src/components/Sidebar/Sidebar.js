import React from "react";
import "./sidebar.css";

import {
  AiOutlineHome,
  AiOutlineLike,
  AiFillHome,
  AiFillLike,
} from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineHistory,
  MdOutlineWatchLater,
  MdExplore,
  MdHistory,
  MdWatchLater,
} from "react-icons/md";
import { RiPlayList2Line, RiPlayList2Fill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { VscHistory } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="aside">
      <div className="aside-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (isActive ? <AiFillHome /> : <AiOutlineHome />)}
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (isActive ? <MdExplore /> : <MdOutlineExplore />)}
        </NavLink>

        <NavLink
          to="/watch-later"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) =>
            isActive ? <MdWatchLater /> : <MdOutlineWatchLater />
          }
        </NavLink>

        <NavLink
          to="/playlists"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (isActive ? <RiPlayList2Fill/>:<RiPlayList2Line/>)}
        </NavLink>

        <NavLink
          to="/liked-videos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (isActive ? <AiFillLike /> : <AiOutlineLike />)}
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (isActive ? <FaHistory /> : <VscHistory />)}
        </NavLink>
      </div>
    </aside>
  );
};
