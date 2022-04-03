import React, { useEffect } from "react";
import { Footer, Sidebar } from "../../components";
import { useAuthContext } from "../../context/AuthProvider";
import { useStateContext } from "../../context/StateProvider";
import { getPlaylist } from "../../utils/playlistUtils";
import "./playlists-container.css";
import { Link } from "react-router-dom";

export const PlaylistsContainer = () => {
  const { playlists, videosDispatch } = useStateContext();

  useEffect(() => {
    videosDispatch({
      type: "SET_CURRENT_PLAYLIST",
      payload: { playlist: {}, loading: true },
    });
  }, []);

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="pages playlists-page">
          <h3 className="text-center">Playlists {playlists.length}</h3>
          <div className="playlists">
            {playlists.map((playlist) => {
              const { _id, title } = playlist;
              return (
                <Link
                  to={`/playlist/${_id}`}
                  key={_id}
                  className="playlist-card flex-center"
                  onClick={() => getPlaylist(_id, videosDispatch)}
                >
                  <h4>{title}</h4>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
