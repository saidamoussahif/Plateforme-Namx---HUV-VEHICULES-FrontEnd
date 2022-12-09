import axios from 'axios'

const API_URL = 'http://localhost:8000/api/users/register'
// Register User
const register = async (userData) => {
    
    const response = await axios.post('http://localhost:8000/api/users/register',userData)
    if(response.data) { localStorage.setItem('user',JSON.stringify(response.data))}  
    return response.data
}

const login = async (userData) => {}

const logout = async (userData) => {}

const authService = {
    register,
    logout,
    login
}

export default authService