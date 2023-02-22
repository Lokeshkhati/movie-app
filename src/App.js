import { Navbar } from "./components/navbar/Navbar";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Watchlist } from "./pages/watchlist/Watchlist";
import { Add } from "./pages/add/Add";
import { Watched } from "./pages/watched/Watched";
import { useSnackbar } from "./contexts/snackbar-context";
import Snackbar from "./components/snackbar/Snackbar";
import { useTheme } from "./contexts/theme-context";

const App = () => {
  const { message } = useSnackbar();
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
    >
      <Navbar />
      {message && <Snackbar />}
      <Routes>
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
};

export { App };
