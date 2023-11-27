import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.buttons}>
        <button className={styles.button}>HOME</button>
        <button className={styles.button}>PRODUCTS</button>
        <button className={styles.button}>CATEGORIES</button>
      </div>
    </div>
  );
};

export default NavBar;
