import axios from "axios";
const API_URL = "/api/admins/";


const login = async (adminData) => {
  const response = await axios.post(
    "http://localhost:8000" + API_URL + "login",
    adminData
  );

  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }

  return response.data;
};
const Logout = () => {
  localStorage.clear("admin");
};

const authService = {
  login,
  Logout,
};

export default authService;
