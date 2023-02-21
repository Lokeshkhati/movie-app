import { createContext, useContext, useReducer } from "react";
import { initialState, movieReducer } from "../reducers/movieReducer";

const MovieContext = createContext();
const useMovie = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
};

export { MovieProvider, useMovie };
