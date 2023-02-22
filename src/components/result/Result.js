import { useMovie } from "../../contexts/movie-context";
import classes from "../result/Result.module.css";
const Result = ({ movie }) => {
  const { addToWatchlist, addToWatched } = useMovie();
  return (
    <div className={classes.resultContainer}>
      {movie.backdrop_path && (
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
      )}
      <div className={classes.details}>
        <div>
          <p>{movie.title} </p>
          <span>{movie.release_date} </span>
        </div>
        <div className={classes.btns}>
          <button
            className={classes.primaryBtn}
            onClick={() => addToWatchlist(movie)}
          >
            Add to Watchlist
          </button>
          <button
            className={classes.secondaryBtn}
            onClick={() => addToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export { Result };
