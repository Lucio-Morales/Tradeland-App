import styles from "./Store.module.css";

const Store = ({ name, category }) => {
  return (
    <div className={styles.store_card}>
      <h2 className={styles.store_name}>Store:{name}</h2>
      <h3 className={styles.store_category}>Category:{category}</h3>
      <button className={styles.store_button}>Detail</button>
    </div>
  );
};

export default Store;
