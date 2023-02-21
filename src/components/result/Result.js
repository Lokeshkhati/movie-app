import classes from "../result/Result.module.css";
const Result = ({ movie }) => {
  return (
    <div className={classes.resultContainer}>
      {movie.backdrop_path && (
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
          alt=""
        />
      )}
      <div className={classes.details}>
        <div>
          <p>{movie.title} </p>
          <span>{movie.release_date} </span>
        </div>
        <div className={classes.btns}>
          <button className={classes.primaryBtn}>Add to Watchlist</button>
          <button className={classes.secondaryBtn}>Add to Watched</button>
        </div>
      </div>
    </div>
  );
};

export { Result };
