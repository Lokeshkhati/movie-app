const initialState = {
  watchlist: [],
  watched: []
};
const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist]
      };
    case "ADD_TO_WATCHED":
      return {
        ...state,
        watched: [action.payload, ...state.watchlist]
      };
    case "MOVE_TO_WATCHLIST":
      return {};

    default:
      return state;
  }
};

export { initialState, movieReducer };
