import classes from "../movie/Movie.module.css";
const Movie = ({ movie }) => {
  return (
    <div className={classes.movieContainer}>
      {movie.backdrop_path && (
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
      )}
      {/* <div>
        <div>
          <p>{movie.title} </p>
          <span>{movie.release_date} </span>
        </div>
        <button> Move to Watched</button>
        <button> Remove </button>
      </div> */}
    </div>
  );
};

export { Movie };
