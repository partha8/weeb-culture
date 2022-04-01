import axios from "axios";

export const addToHistory = async (video, videosDispatch) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      videosDispatch({
        type: "SET_HISTORY",
        payload: response.data.history,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeFromHistory = async (id, videosDispatch, toastHandler) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.delete(`/api/user/history/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200 || response.status === 201) {
      videosDispatch({
        type: "SET_HISTORY",
        payload: response.data.history,
      });
      toastHandler(true, "Video removed from history", "success");
    }
  } catch (error) {
    console.error(error);
  }
};

export const clearHistory = async (videosDispatch, toastHandler) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200 || response.status === 201) {
      videosDispatch({
        type: "SET_HISTORY",
        payload: response.data.history,
      });
      toastHandler(true, "History Clear!", "success");
    }
  } catch (error) {
    console.error(error);
  }
};

export const addToWatchLater = async (
  video,
  watchLater,
  videosDispatch,
  toastHandler
) => {
  const encodedToken = localStorage.getItem("token");

  if (!watchLater.some((item) => item._id === video._id)) {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        videosDispatch({
          type: "SET_WATCHLATER",
          payload: response.data.watchlater,
        });
        toastHandler(true, "Added to watch later!", "success");
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    removeFromWatchLater(video._id, videosDispatch, toastHandler);
  }
};

export const removeFromWatchLater = async (
  id,
  videosDispatch,
  toastHandler
) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.delete(`/api/user/watchlater/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200 || response.status === 201) {
      videosDispatch({
        type: "SET_WATCHLATER",
        payload: response.data.watchlater,
      });
      toastHandler(true, "Video removed from Watch Later", "success");
    }
  } catch (error) {
    console.error(error);
  }
};

export const addToLikedVideos = async (
  video,
  likedVideos,
  videosDispatch,
  toastHandler
) => {
  const encodedToken = localStorage.getItem("token");

  if (!likedVideos.some((item) => item._id === video._id)) {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        videosDispatch({
          type: "SET_LIKEDVIDEOS",
          payload: response.data.likes,
        });
        toastHandler(true, "Added to Likes!", "success");
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    removeFromLikedVideos(video._id, videosDispatch, toastHandler);
  }
};

export const removeFromLikedVideos = async (
  id,
  videosDispatch,
  toastHandler
) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.delete(`/api/user/likes/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200 || response.status === 201) {
      videosDispatch({
        type: "SET_LIKEDVIDEOS",
        payload: response.data.likes,
      });
      toastHandler(true, "Video removed from Likes", "success");
    }
  } catch (error) {
    console.error(error);
  }
};
