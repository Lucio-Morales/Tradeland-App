import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyStores from "../MyStores/MyStores";
import { getStores } from "../../redux/actions";
import { useEffect } from "react";

const SellerDashboard = () => {
  const location = useLocation();
  const stores = useSelector((state) => state.stores);
  const userId = location.state ? location.state.userId : null;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStores(userId));
  }, []);

  return (
    <div>
      <div>
        <h1>SELLER DASHBOARD</h1>
        <MyStores stores={stores} />
      </div>
    </div>
  );
};

export default SellerDashboard;
