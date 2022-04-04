import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { HorizontalVideoCard, Sidebar } from "../../components";
import "./playlist.css";
import { useStateContext } from "../../context/StateProvider";
import { deletePlaylist } from "../../utils/playlistUtils";

export const Playlist = () => {
  let { playlistId } = useParams();
  const { currentPlaylist, loading, videosDispatch, toastHandler } =
    useStateContext();

  let navigate = useNavigate();
  return (
    <>
      <div className="container">
        <Sidebar />
        {!loading && (
          <div className="pages playlist">
            <Link to="/playlists" className="underline">
              Go back
            </Link>
            <div className="flex-center playlist-btn-container margin-top-1">
              <h2>{currentPlaylist.title}</h2>
              <small>Videos: {currentPlaylist.videos.length}</small>
              <button
                onClick={() => {
                  deletePlaylist(playlistId, videosDispatch, toastHandler);
                  navigate("/playlists");
                }}
                className="btn"
              >
                Delete Playlist
              </button>
            </div>
            {currentPlaylist.videos.map((item) => {
              return (
                <HorizontalVideoCard
                  key={item._id}
                  {...item}
                  playlistId={playlistId}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
