const inputValidations = (userData, errors, setErrors, name) => {
  if (name === "name") {
    if (userData.name === "")
      setErrors({ ...errors, name: "Ingrese su nombre, por favor." });
    else setErrors({ ...errors, name: "" });
  }
  if (name === "email") {
    if (userData.name === "")
      setErrors({ ...errors, email: "Ingrese su email, por favor." });
    else setErrors({ ...errors, email: "" });
  }
  if (name === "password") {
    if (userData.password === "")
      setErrors({ ...errors, password: "Ingrese una contraseña, por favor." });
    else setErrors({ ...errors, password: "" });
  }
  if (name === "rut") {
    if (userData.rut === "")
      setErrors({ ...errors, rut: "Ingrese un rut, por favor." });
    else setErrors({ ...errors, rut: "" });
  }
};

export default inputValidations;
