import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
