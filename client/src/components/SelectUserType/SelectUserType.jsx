import styles from "./SelectUserType.module.css";

const SelectUserType = ({ registrationData, setRegistrationData }) => {
  const handleUserType = (userType) => {
    setRegistrationData({
      ...registrationData,
      userType: userType,
    });
  };
  const handleNext = () => {
    setRegistrationData({
      ...registrationData,
      registrationPhase: 1,
    });
  };
  return (
    <div className={styles.container}>
      <p>Registrarse como:</p>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => handleUserType("Buyer")}
        >
          Buyer
        </button>
        <button
          className={styles.button}
          onClick={() => handleUserType("Seller")}
        >
          Seller
        </button>
        <button
          className={`${styles.button} ${
            !registrationData.userType && styles.buttonDisabled
          }`}
          onClick={handleNext}
          disabled={!registrationData.userType}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default SelectUserType;
