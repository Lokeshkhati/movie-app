import classes from "../searchbar/Searchbar.module.css";
const Searchbar = ({ query, searchHandler }) => {
  return (
    <input
      type="text"
      placeholder="Search here..."
      className={classes.searchInput}
      value={query}
      onChange={searchHandler}
    />
  );
};

export { Searchbar };
