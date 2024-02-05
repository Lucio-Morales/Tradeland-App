import axios from "axios";

export const postUser = async (userData, setRegistrationData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/user/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          // Puedes agregar otros encabezados si es necesario
        },
      }
    );

    if (response.status === 200) {
      // Si la solicitud fue exitosa, actualiza registrationPhase a 3
      setRegistrationData({
        ...userData, // Puedes ajustar esto según la estructura de tus datos
        registrationPhase: 3,
      });
    }
  } catch (error) {
    // Manejar errores en la solicitud POST
    console.error("Error en la solicitud POST:", error);
    // Puedes mostrar un mensaje de error al usuario si es necesario
  }
};
