import { Link } from "react-router-dom";
import styles from "./SellerMenu.module.css";

const SellerMenu = ({ userId }) => {
  console.log(userId);
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link className={styles.link} to={`/createStore/${userId}`}>
            Crear tienda
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/myStores">
            Mis tiendas
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SellerMenu;
