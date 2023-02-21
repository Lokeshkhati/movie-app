import { Movie } from "../../components/movie/Movie";
import { useMovie } from "../../contexts/movie-context";

const Watched = () => {
  const {
    state: { watched }
  } = useMovie();
  return (
    <div>
      {watched.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export { Watched };
