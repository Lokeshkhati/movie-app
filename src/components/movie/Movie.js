import classes from "../movie/Movie.module.css";
const Movie = ({ movie }) => {
  console.log(`data ${movie.title}`);
  return (
    <div className={classes.movieContainer}>
      {movie.backdrop_path && (
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
          alt=""
        />
      )}
      <button> Move to Watched</button>
      <button> Remove </button>
    </div>
  );
};

export { Movie };
