import { useEffect, useState } from "react";

const Add = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const fetchMoviesData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=bf761cfd19e5584144495a88025c73a7&language=en-US&page=2"
    );
    const { results } = await response.json();

    setMoviesData(results);
  };

  return (
    <div>
      {/* <input type="text" placeholder="search here..." /> */}
      {moviesData.map((movie) => (
        <h1>{movie.title} </h1>
      ))}
    </div>
  );
};

export { Add };
