import { NavLink, Link } from "react-router-dom";
import classes from "../navbar/Navbar.module.css";
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#7600dc" : "#000",
      fontWeight: isActive ? "bold" : "normal"
    };
  };
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/watchlist">
        HDMovies
      </Link>
      <nav className={classes.navbar}>
        <NavLink to="/watchlist" style={navLinkStyles}>
          Watchlist
        </NavLink>
        <NavLink to="/watched" style={navLinkStyles}>
          Watched
        </NavLink>
        <NavLink to="/add" className={classes.btn}>
          Add+
        </NavLink>
      </nav>
    </header>
  );
};

export { Navbar };
