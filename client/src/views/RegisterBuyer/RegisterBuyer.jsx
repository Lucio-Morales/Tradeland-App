import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./RegisterBuyer.module.css";
import validations from "./validations";
import { registerBuyer } from "../../redux/actions";

const RegisterBuyer = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setBuyerData({
      ...buyerData,
      [event.target.name]: event.target.value,
    });
    validations(
      {
        ...buyerData,
        [event.target.name]: event.target.value,
      },
      errors,
      setErrors,
      event.target.name
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // aca despacho la action de la solicitud http
    dispatch(registerBuyer(buyerData));

    setBuyerData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={buyerData.name}
          name="name"
          onChange={handleChange}
          className={styles.input}
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}

        <input
          value={buyerData.email}
          name="email"
          onChange={handleChange}
          className={styles.input}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className={styles.error}> {errors.email}</p>}

        <input
          value={buyerData.password}
          name="password"
          onChange={handleChange}
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default RegisterBuyer;
