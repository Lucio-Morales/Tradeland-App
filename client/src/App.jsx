import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import CreateStore from "./views/CreateStore/CreateStore";
import UserRegistration from "./views/UserRegistration/UserRegistration";
import SellerDashboard from "./views/SellerDashboard/SellerDashboard";
import BuyerDashboard from "./views/BuyerDashboard/BuyerDashboard";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createStore/:id" element={<CreateStore />} />
        <Route path="/Seller-dashboard" element={<SellerDashboard />} />
        <Route path="/Buyer-dashboard" element={<BuyerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
