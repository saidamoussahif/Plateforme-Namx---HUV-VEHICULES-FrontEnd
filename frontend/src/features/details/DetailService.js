import axios from 'axios'

const API_URL = 'http://localhost:8000/api/detalles'
// Get  details
const getDetails = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }
  

  const DetailService = {
    getDetails,
  }
  
  export default DetailService