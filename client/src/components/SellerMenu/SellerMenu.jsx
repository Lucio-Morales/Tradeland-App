import { Link } from "react-router-dom";

const SellerMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/createStore">Crear tienda</Link>
        </li>
        <li>
          <Link to="/myStores">Mis tiendas</Link>
        </li>
      </ul>
    </div>
  );
};

export default SellerMenu;
