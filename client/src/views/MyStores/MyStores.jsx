import Store from "../../components/Store/Store";
import styles from "./MyStores.module.css";
//Este componente debe mostrar todas las tiendas del usuario
const MyStores = ({ stores }) => {
  return (
    <div>
      <h1 className={styles.header}>MyStores component</h1>
      <div className={styles.container}>
        {stores &&
          stores.map((store) => (
            <Store key={store.id} name={store.name} category={store.category} />
          ))}
      </div>
    </div>
  );
};

export default MyStores;
