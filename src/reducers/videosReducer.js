import { act } from "@testing-library/react";

export const videosReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES": {
      return {
        ...state,
        categories: [...action.payload],
      };
    }
    case "SET_VIDEOS": {
      return {
        ...state,
        videos: action.payload,
      };
    }

    case "SORT_BY_CATEGORY": {
      return {
        ...state,
        sortByCategory: action.payload,
      };
    }
    case "SET_HISTORY": {
      return {
        ...state,
        history: action.payload,
      };
    }
    case "SET_WATCHLATER": {
      return {
        ...state,
        watchLater: action.payload,
      };
    }
    case "SET_LIKEDVIDEOS": {
      return {
        ...state,
        likedVideos: action.payload,
      };
    }
    
    case "SET_PLAYLISTS": {
      return {
        ...state,
        playlists: action.payload,
      };
    }
    case "SET_SELECTED_VIDEO": {
      return {
        ...state,
        selectedVideo: action.payload,
      };
    }
    case "SET_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        }),
      };
    }
    case "SET_CURRENT_PLAYLIST": {
      return {
        ...state,
        currentPlaylist: action.payload.playlist,
        loading: action.payload.loading,
      };
    }
    default:
      return state;
  }
};
