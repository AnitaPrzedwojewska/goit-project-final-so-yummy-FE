import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const loginUser = async (userData) => {

  const url = endpoints.USER_LOGIN;

  try {
    console.log("apiUrl: ", url);
    console.log("userData: ", userData);
    const response = await axios.post(url, userData);
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default loginUser;