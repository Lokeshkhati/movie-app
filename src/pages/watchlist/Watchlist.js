import { Movie } from "../../components/movie/Movie";
import { useMovie } from "../../contexts/movie-context";

const Watchlist = () => {
  const {
    state: { watchlist }
  } = useMovie();
  return (
    <div>
      {watchlist.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export { Watchlist };
