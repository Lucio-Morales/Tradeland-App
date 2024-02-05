import axios from "axios";

async function postUserData(userData) {
  try {
    const response = await axios.post(
      "http://localhost:300/user/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          // Puedes agregar otros encabezados si es necesario
        },
      }
    );

    // Puedes realizar acciones con la respuesta si es necesario
    console.log("Respuesta del servidor:", response.data);

    return response.data; // O devolver algo más si es necesario
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    throw error;
  }
}

export default postUserData;
