import { useEffect } from "react";
import { useSnackbar } from "../../contexts/snackbar-context";
import classes from "./Snackbar.module.css";
const Snackbar = () => {
  const { message, dismissSnackbar } = useSnackbar();

  useEffect(() => {
    setTimeout(dismissSnackbar, 3000);
  });

  return (
    <div className={classes.snackbar}>
      <div className={classes.msg}>{message} </div>
      <button className={classes.btn} onClick={dismissSnackbar}>
        X
      </button>
    </div>
  );
};

export default Snackbar;
