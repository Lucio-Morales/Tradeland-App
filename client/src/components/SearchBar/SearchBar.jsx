import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
      <button className={styles.button}>Search</button>
    </div>
  );
};

export default SearchBar;
