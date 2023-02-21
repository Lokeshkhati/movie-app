import { useState } from "react";
import { Result } from "../../components/result/Result";
import { Searchbar } from "../../components/searchbar/Searchbar";
import classes from "../add/Add.module.css";
const Add = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [query, setQuery] = useState("");

  const searchHandler = (event) => {
    setQuery(event.target.value);
    fetchMoviesData();
  };

  const fetchMoviesData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bf761cfd19e5584144495a88025c73a7&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const { results } = await response.json();
    setMoviesData(results);
  };

  return (
    <div className={classes.add}>
      <Searchbar query={query} searchHandler={searchHandler} />
      {query &&
        moviesData &&
        moviesData.map((movie) => <Result key={movie.id} movie={movie} />)}
    </div>
  );
};

export { Add };
