import React, { useState } from "react";
import { useStateContext } from "../../context/StateProvider";
import "./playlist-modal.css";
import { FaTimes } from "react-icons/fa";
import { useClickOutside } from "../../hooks";
import {
  addToPlaylists,
  addVideoToPlaylist,
  removeVideoFromPlaylist
} from "../../utils/playlistUtils";

export const PlaylistModal = () => {
  const {
    showPlaylistModal,
    setShowPlaylistModal,
    selectedVideo,
    playlists,
    videosDispatch,
    toastHandler,
  } = useStateContext();

  const [title, setTitle] = useState("");

  const domNode = useClickOutside(() => setShowPlaylistModal(false));

  const changeHandler = (e, playlistId) => {
    if (e.target.checked) {
      addVideoToPlaylist(
        selectedVideo,
        videosDispatch,
        playlistId,
        toastHandler
      );
    } else {
      removeVideoFromPlaylist(
        selectedVideo._id,
        videosDispatch,
        playlistId,
        toastHandler
      );
    }
  };

  return (
    <div
      className={`${
        showPlaylistModal ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div ref={domNode} className="modal-container">
        <button
          className="close-modal-btn"
          onClick={() => setShowPlaylistModal(false)}
        >
          <FaTimes />
        </button>
        <h4>Save To</h4>

        {playlists.length > 0 && (
          <div className="playlists-container">
            {playlists.map((playlist) => {
              const { _id, title } = playlist;
              return (
                <div key={_id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={playlist.videos.some(
                        (item) => item._id === selectedVideo._id
                      )}
                      onChange={(e) => {
                        changeHandler(e, _id);
                      }}
                    />
                    {title}
                  </label>
                </div>
              );
            })}
          </div>
        )}

        <div className="create-playlist-input">
          <label className="text-left">Name:</label>
          <input
            placeholder="Playlist name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={(e) => {
              if (!title) {
                toastHandler(true, "Add a title", "error");
              } else {
                addToPlaylists(
                  e,
                  title,
                  playlists,
                  selectedVideo,
                  videosDispatch,
                  toastHandler
                );
                setTitle("");
                setShowPlaylistModal(false);
              }
            }}
            className="btn create-btn"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
