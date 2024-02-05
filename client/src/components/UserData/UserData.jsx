// import { useDispatch } from "react-redux";
// import { userRegister } from "../../redux/actions";

import { postUser } from "../../views/UserForm/postUser";

const UserData = ({ registrationData, setRegistrationData }) => {
  //Almaceno los datos del usuario
  const handleUserData = (event) => {
    setRegistrationData({
      ...registrationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Mientras se realice la solicitud al servidor para registrar al usuario
    //registrationPhase debe estar en 2, una vez reciba la confirmacion de registro
    //del servidor, registrationPhase : 3
    setRegistrationData({
      ...registrationData,
      registrationPhase: 2,
    });

    postUser(registrationData, setRegistrationData);
  };

  return (
    <div>
      <form>
        <input
          name="name"
          value={registrationData.name}
          type="text"
          placeholder="Name"
          onChange={handleUserData}
        />
        <input
          name="email"
          value={registrationData.email}
          type="text"
          placeholder="Email"
          onChange={handleUserData}
        />
        <input
          name="password"
          value={registrationData.password}
          type="password"
          placeholder="Password"
          onChange={handleUserData}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default UserData;
