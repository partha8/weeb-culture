export const videosReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES": {
      return {
        ...state,
        categories: [...action.payload],
      };
    }

    case "SORT_BY_CATEGORY": {
      return state;
    }
    default:
      return state;
  }
};
