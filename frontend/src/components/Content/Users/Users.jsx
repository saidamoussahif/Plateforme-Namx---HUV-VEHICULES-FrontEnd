import React from 'react'
import { useState } from 'react'
import Modal from '../../Modal/Modal'
// const openModal = ()=>{
//   console.log('r')
//  return 
// }
function Users() {
  const [toggle,setToggle] = useState(false)
  const changeState = ()=>{
    setToggle(true)
  }
  return (
    <div>
      <label htmlFor="my-modal-3" className="btn" onClick={changeState}>Update</label>
      <label htmlFor="my-modal-3" className="btn" onClick={changeState}>Add</label>
      <label htmlFor="my-modal-3" className="btn" onClick={changeState}>Delete</label>

      {toggle &&  <Modal/>}
      </div>
  )
}

export default Users