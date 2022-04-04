import React, { createContext, useContext, useReducer, useState } from "react";
import { videosReducer } from "../reducers/videosReducer";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  // for toast
  const [toast, setToast] = useState({
    showToast: false,
    message: "",
    type: "",
  });

  const toastHandler = (showToast = false, message = "", type = "") => {
    setToast({ showToast, message, type });
  };

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const initialStates = {
    loading: true,
    videos: [],
    watchLater: [],
    playlists: [],
    currentPlaylist: null,
    selectedVideo: null,
    history: [],
    categories: [],
    likedVideos: [],
    sortByCategory: "All",
  };

  const [
    {
      videos,
      watchLater,
      playlists,
      history,
      categories,
      likedVideos,
      sortByCategory,
      selectedVideo,
      loading,
      currentPlaylist,
    },
    videosDispatch,
  ] = useReducer(videosReducer, initialStates);

  return (
    <StateContext.Provider
      value={{
        videos,
        watchLater,
        playlists,
        history,
        categories,
        likedVideos,
        sortByCategory,
        selectedVideo,
        showPlaylistModal,
        currentPlaylist,
        loading,

        toast,

        videosDispatch,
        toastHandler,
        setShowPlaylistModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => {
  return useContext(StateContext);
};

export { StateProvider, useStateContext };
