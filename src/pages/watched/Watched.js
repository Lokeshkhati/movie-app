import { Movie } from "../../components/movie/Movie";
import { useMovie } from "../../contexts/movie-context";

import classes from "../watched/Watched.module.css";

const Watched = () => {
  const {
    state: { watched }
  } = useMovie();
  console.log(watched);

  return (
    <>
      <div>
        <h1> Watched Movies </h1>
        <h1> {watched.length} </h1>
      </div>
      <div className={classes.watched}>
        {watched.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export { Watched };
