import axios from "axios";

const API_URL = "http://localhost:8000/api/cars/";

const getCars = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const carService = {
  getCars,
};

export default carService;
