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
    default:
      return state;
  }
};
