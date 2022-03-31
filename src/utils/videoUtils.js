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
