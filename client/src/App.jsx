import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
// import RegisterBuyer from "./views/RegisterBuyer/RegisterBuyer";
import Registration from "./views/Registration/Registration";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
