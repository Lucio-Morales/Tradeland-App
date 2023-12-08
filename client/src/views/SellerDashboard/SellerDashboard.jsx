import { useLocation } from "react-router-dom";
import SellerMenu from "../../components/SellerMenu/SellerMenu";

const SellerDashboard = () => {
  const location = useLocation();
  const userId = location.state ? location.state.userId : null;
  console.log(userId);
  return (
    <div>
      <h1>SELLER DASHBOARD</h1>
      <SellerMenu userId={userId} />
    </div>
  );
};

export default SellerDashboard;
