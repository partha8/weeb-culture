import axios from "axios";

export const addToPlaylists = async (
  e,
  title,
  playlists,
  selectedVideo,
  videosDispatch,
  toastHandler
) => {
  e.preventDefault();
  const encodedToken = localStorage.getItem("token");

  if (!playlists.some((item) => item.title === title)) {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: { title } },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        videosDispatch({
          type: "SET_PLAYLISTS",
          payload: response.data.playlists,
        });
        if (selectedVideo) {
          const playlistId = response.data.playlists[playlists.length]._id;
          addVideoToPlaylist(
            selectedVideo,
            videosDispatch,
            playlistId,
            toastHandler
          );
        }
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    toastHandler(true, "Playlist already exists!", "error");
  }
};

export const addVideoToPlaylist = async (
  selectedVideo,
  videosDispatch,
  playlistId,
  toastHandler
) => {
  const encodedToken = localStorage.getItem("token");

  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video: selectedVideo },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    videosDispatch({ type: "SET_PLAYLIST", payload: response.data.playlist });
    toastHandler(true, "Video added to playlist!", "success");
  } catch (error) {
    console.error(error);
  }
};

export const removeVideoFromPlaylist = async (
  id,
  videosDispatch,
  playlistId,
  toastHandler
) => {
  const encodedToken = localStorage.getItem("token");

  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${id}`,
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    videosDispatch({ type: "SET_PLAYLIST", payload: response.data.playlist });
    videosDispatch({
      type: "SET_CURRENT_PLAYLIST",
      payload: { playlist: response.data.playlist, loading: false },
    });
    toastHandler(true, "Video removed from playlist!", "success");
  } catch (error) {
    console.error(error);
  }
};

export const getPlaylist = async (playlistId, videosDispatch) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200 || response.status === 201) {
      videosDispatch({
        type: "SET_CURRENT_PLAYLIST",
        payload: { playlist: response.data.playlist, loading: false },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const deletePlaylist = async (
  playlistId,
  videosDispatch,
  toastHandler
) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200 || response.status === 201) {
      videosDispatch({
        type: "SET_PLAYLISTS",
        payload: response.data.playlists,
      });
      toastHandler(true, "Playlist removed!", "error");
    }
  } catch (error) {
    console.error(error);
  }
};
