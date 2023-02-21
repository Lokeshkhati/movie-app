import classes from "../searchbar/Searchbar.module.css";
const Searchbar = ({ query, searchHandler }) => {
  return (
    <div className={classes.searchbar}>
      <input
        type="text"
        placeholder="Search here..."
        className={classes.searchInput}
        value={query}
        onChange={searchHandler}
      />
    </div>
  );
};

export { Searchbar };
