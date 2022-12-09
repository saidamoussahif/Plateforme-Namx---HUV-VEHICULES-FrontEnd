import React from 'react'
import  {useParams} from "react-router-dom"
import axios from "axios"
function ActivationPage() {
    const {activationCode} = useParams();
    console.log(`${activationCode}`)
    
    axios.post(`http://localhost:8000/api/users/verifyUser/${activationCode}`)
  return (
    <div>ActivationPage</div>
  )
}

export default ActivationPage