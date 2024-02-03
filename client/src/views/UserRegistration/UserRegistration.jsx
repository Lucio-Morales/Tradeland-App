import { useState } from "react";
import SelectUserType from "../../components/SelectUserType/SelectUserType";
import UserData from "../../components/UserData/UserData";

const UserRegistration = () => {
  const [registrationData, setRegistrationData] = useState({
    registrationPhase: 0,
    userType: "",
    name: "",
    email: "",
    password: "",
  });

  return (
    <div>
      {registrationData.registrationPhase === 0 && (
        <SelectUserType
          setRegistrationData={setRegistrationData}
          registrationData={registrationData}
        />
      )}
      {registrationData.registrationPhase === 1 && (
        <UserData
          setRegistrationData={setRegistrationData}
          registrationData={registrationData}
        />
      )}
    </div>
  );
};

export default UserRegistration;
