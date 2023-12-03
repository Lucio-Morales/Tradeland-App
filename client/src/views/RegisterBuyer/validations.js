const validations = (buyerData, errors, setErrors, name) => {
  if (name === "name") {
    if (buyerData.name === "")
      setErrors({ ...errors, name: "Por favor, ingrese su nombre." });
    else setErrors({ ...errors, name: "" });
  }
  if (name === "email") {
    if (buyerData.email === "")
      setErrors({
        ...errors,
        email: "Por favor, ingrese su correo electronico.",
      });
    else setErrors({ ...errors, email: "" });
  }
  if (name === "password") {
    if (buyerData.password === "")
      setErrors({ ...errors, password: "Por favor, ingrese su contraseña." });
    else setErrors({ ...errors, password: "" });
  }
};

export default validations;
