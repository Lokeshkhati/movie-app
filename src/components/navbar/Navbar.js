import { NavLink, Link } from "react-router-dom";
import classes from "../navbar/Navbar.module.css";
const Navbar = () => {
  return (
    <header className={classes.header}>
      {/* <Link className={classes.logo} to="/watchlist">
        Logo
      </Link> */}
      <h1> Logo</h1>
      <nav className={classes.navbar}>
        <NavLink to="/watchlist">Watchlist</NavLink>
        <NavLink to="/watched">Watched</NavLink>
        <NavLink to="/add">Add+</NavLink>
      </nav>
    </header>
  );
};

export { Navbar };
