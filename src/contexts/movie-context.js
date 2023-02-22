import { createContext, useContext, useEffect, useReducer } from "react";
import {
  initialState,
  movieReducer,
  storedData
} from "../reducers/movieReducer";
import { useSnackbar } from "./snackbar-context";

const MovieContext = createContext();
const useMovie = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState, storedData);

  const { showSnackbar } = useSnackbar();
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(state));
  }, [state]);

  const addToWatchlist = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
    showSnackbar("A new movie added to watchlist");
  };
  const addToWatched = (movie) => {
    dispatch({ type: "ADD_TO_WATCHED", payload: movie });
    showSnackbar("Movie added to watched");
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
