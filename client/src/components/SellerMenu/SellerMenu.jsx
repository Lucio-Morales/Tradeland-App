import { Link } from "react-router-dom";
import styles from "./SellerMenu.module.css";
import { useDispatch } from "react-redux";
import { getStores } from "../../redux/actions";

const SellerMenu = ({ userId }) => {
  const dispatch = useDispatch();

  const handleGetStores = () => {
    dispatch(getStores(userId));
  };
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link className={styles.link} to={`/createStore/${userId}`}>
            Create store
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SellerMenu;
