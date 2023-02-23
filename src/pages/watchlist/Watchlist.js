import { Movie } from "../../components/movie/Movie";
import { useMovie } from "../../contexts/movie-context";
import { useTitle } from "../../hooks/useTitle";
import classes from "../watchlist/Watchlist.module.css";

const Watchlist = () => {
  const {
    state: { watchlist }
  } = useMovie();
  useTitle("HDMovies | Watchlist");
  return (
    <div className={classes.watchlistContainer}>
      <div>
        <h1> My WatchList </h1>
        <h1> {watchlist.length} </h1>
      </div>
      <div className={classes.watchlist}>
        {watchlist.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export { Watchlist };
