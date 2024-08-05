import axios from "axios";

// import apiUrl from "../../services/api.js";
const apiUrl = "https://localhost:8000";

const loginUser = async (userData) => {
  const endpointUrl = "/login";

  const url = new URL(`${apiUrl}${endpointUrl}`);
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.post(url, userData, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default loginUser;