import React from "react";
import "./sidebar.css";

import { AiFillHome, AiOutlineLike } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="aside">
      <div className="aside-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <AiFillHome />
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <MdOutlineExplore />
        </NavLink>

        <NavLink
          to="/watch-later"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <MdOutlineWatchLater />
        </NavLink>

        <NavLink
          to="/playlist"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <RiPlayList2Fill />
        </NavLink>

        <NavLink
          to="/liked-videos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <AiOutlineLike />
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <MdOutlineHistory />
        </NavLink>
      </div>
    </aside>
  );
};
