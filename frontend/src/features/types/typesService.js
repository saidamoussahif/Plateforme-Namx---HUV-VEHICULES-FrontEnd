import axios from 'axios'

const API_URL = 'http://localhost:8000/api/Type'
// Get  types
const getTypes = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }
  

  const typesService = {
    getTypes,
  }
  
  export default typesService