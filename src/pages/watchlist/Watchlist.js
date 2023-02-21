import { Movie } from "../../components/movie/Movie";
import { useMovie } from "../../contexts/movie-context";
import classes from "../watchlist/Watchlist.module.css";

const Watchlist = () => {
  const {
    state: { watchlist }
  } = useMovie();
  return (
    <div className={classes.watchlist}>
      {watchlist.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export { Watchlist };
