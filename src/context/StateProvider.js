import React, {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
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

  const initialStates = {
    videos: [],
    watchLater: [],
    playlists: [],
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

        toast,

        videosDispatch,
        toastHandler,
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
