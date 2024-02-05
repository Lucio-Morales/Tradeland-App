import { useState } from "react";
import styles from "./UserForm.module.css";
import { postUser } from "./postUser";

const UserForm = () => {
  const [userData, setUserData] = useState({
    userType: "",
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postUser(userData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label>
          <input
            type="radio"
            name="userType"
            value="Buyer"
            checked={userData.userType === "Buyer"}
            onChange={handleInputChange}
          />
          Buyer
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="userType"
            value="Seller"
            checked={userData.userType === "Seller"}
            onChange={handleInputChange}
          />
          Seller
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
