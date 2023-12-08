import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Registration from "./views/Registration/Registration";
import Login from "./views/Login/Login";
import SellerDashboard from "./views/SellerDashboard/SellerDashboard";
import BuyerDashboard from "./views/BuyerDashboard/BuyerDashboard";
import CreateStore from "./views/CreateStore/CreateStore";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sellerDashboard" element={<SellerDashboard />} />
        <Route path="/createStore/:id" element={<CreateStore />} />
        <Route path="/buyerDashboard" element={<BuyerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
