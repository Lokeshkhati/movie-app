import classes from "../movie/Movie.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
const Movie = ({ movie }) => {
  return (
    <div>
      <div className={classes.movieContainer}>
        {movie.backdrop_path && (
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt=""
          />
        )}
      </div>
      <div>
        <AiFillEye size="30" />
        <AiFillEyeInvisible size="30" />
        <TiDelete size="30" />
      </div>
    </div>
  );
};

export { Movie };
