import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Registration.module.css";
import inputValidations from "./inputValidations";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/actions";

// Este componente renderiza ciertas vistas dependiendo de la fase de registro en la que se encuentre
// el estado local registrationPhase: 0, 1, 2
// FASE 0: opciones de rol de usuario buyer o seller
// FASE 1: registro de datos de usuario
// FASE 2: boton para volver a home.
const Registration = () => {
  const dispatch = useDispatch();
  const [registrationPhase, setRegistrationPhase] = useState(0);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rut: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    type: "",
    name: "",
    email: "",
    rut: "",
    password: "",
  });

  // funcion para manejar cambios en el estado local de los inputs
  // y sus validaciones.
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    inputValidations(
      {
        ...userData,
        [event.target.name]: event.target.value,
      },
      errors,
      setErrors,
      event.target.name
    );
  };

  // funcion para capturar el tipo de usuario
  // y setear la fase del registro.
  const handleUserType = (userType) => {
    setUserData({
      ...userData,
      type: userType,
    });
    setRegistrationPhase(1);
  };

  // funcion que despacha action que realiza la solicitud http
  // con los datos capturados en el formulario y setear la fase
  // del registro.
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(userRegister(userData));
    setUserData({
      type: "",
      name: "",
      email: "",
      rut: "",
      password: "",
    });
    setRegistrationPhase(2);
  };

  return (
    <div>
      {registrationPhase === 0 && (
        <div className={styles.registration_container}>
          <p className={styles.registrarion_message}>Registrarse como:</p>
          <button
            onClick={() => handleUserType("buyer")}
            className={styles.registration_button}
          >
            Buyer
          </button>
          <button
            onClick={() => handleUserType("seller")}
            className={styles.registration_button}
          >
            Seller
          </button>
        </div>
      )}

      {registrationPhase === 1 && (
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {userData.type === "buyer" && (
              <>
                <input
                  type="text"
                  value={userData.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                  className={styles.input}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
                <input
                  type="email"
                  value={userData.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                  className={styles.input}
                />
                {errors.email && (
                  <p className={styles.error}> {errors.email}</p>
                )}
                <input
                  type="password"
                  value={userData.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className={styles.input}
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password}</p>
                )}
              </>
            )}
            {userData.type === "seller" && (
              <>
                <input
                  type="text"
                  value={userData.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                  className={styles.input}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
                <input
                  type="email"
                  value={userData.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                  className={styles.input}
                />
                {errors.email && (
                  <p className={styles.error}> {errors.email}</p>
                )}

                <input
                  type="password"
                  value={userData.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className={styles.input}
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password}</p>
                )}
                <input
                  type="text"
                  value={userData.rut}
                  name="rut"
                  onChange={handleChange}
                  placeholder="Rut"
                  className={styles.input}
                />
                {errors.rut && <p className={styles.error}>{errors.rut}</p>}
              </>
            )}
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      )}
      {registrationPhase === 2 && (
        <div className={styles.registration_container}>
          <Link to="/">
            <button className={styles.button}>Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Registration;
