import styles from "./loader.module.css";

function Loader() {
  return (
    <div
      className={`${styles.loaderContainer} d-flex justify-content-center align-items-center`}
    >
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;
