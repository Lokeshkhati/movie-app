import classes from "../loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loader}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export { Loader };
