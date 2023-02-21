import { createContext, useContext, useReducer } from "react";
import { initialState, movieReducer } from "../reducers/movieReducer";

const MovieContext = createContext();
const useMovie = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const addToWatchlist = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };
  const addToWatched = (movie) => {
    dispatch({ type: "ADD_TO_WATCHED", payload: movie });
  };

  const moveToWatched = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  return (
    <MovieContext.Provider
      value={{ state, addToWatchlist, addToWatched, moveToWatched }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, useMovie };
