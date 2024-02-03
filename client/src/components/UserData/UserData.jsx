import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/actions";

const UserData = ({ registrationData, setRegistrationData }) => {
  const dispatch = useDispatch();

  const handleUserData = (event) => {
    setRegistrationData({
      ...registrationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(userRegister(registrationData));
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
