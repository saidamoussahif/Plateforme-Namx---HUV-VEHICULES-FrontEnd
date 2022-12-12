import axios from 'axios'

const API_URL = 'http://localhost:8000/api/users'
// Register User
const register = async (userData) => {
    
    const response = await axios.post(API_URL+'register',userData)
    if(response.data) { localStorage.setItem('user',JSON.stringify(response.data))}  
    return response.data
}

const login = async (userData) => {
    const response = await axios.post( 'http://localhost:8000/api/users/login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data

  }

  const logout = ()=>{
    localStorage.removeItem('user')
  }
const authService = {
    register,
    logout,
    login
}

export default authService