import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // const [loginResponse, setLoginResponse] = useState(null);

  const handleLoginData = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  const handleAccessLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        loginData
      );

      const data = response.data;
      console.log(data.id);
      // setLoginResponse(data);
      if (data.access === true) {
        if (data.userType === "Buyer") {
          navigate("/buyerDashboard", { state: { userId: data.id } });
        } else if (data.userType === "Seller") {
          navigate("/sellerDashboard", { state: { userId: data.id } });
        }
      }
    } catch (error) {
      console.error("Error en la petición:", error.message);
    }
  };
  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleAccessLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={loginData.email}
          onChange={handleLoginData}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleLoginData}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
