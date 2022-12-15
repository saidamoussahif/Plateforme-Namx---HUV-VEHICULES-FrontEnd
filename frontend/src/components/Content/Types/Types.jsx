import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getTypes, reset} from '../../../features/types/typesSlice';
import Modal from '../../Modal/Modal'

function Types() {
  const [toggle,setToggle] = useState(false)
  const changeState = ()=>{
    setToggle(true)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
    
    dispatch(reset());
  }, []);
  const { types } = useSelector((state) => state.types);
  const ar = Object.keys(types[0]? types[0]:'')
  console.log(ar)
  let array ;
  array?.push(ar)
 
  return (
    <div>
            <label htmlFor="my-modal-3" className="btn" onClick={changeState}>Update</label>
      {toggle &&  <Modal keys={{array}}/>}
    
    </div>
  )
}

export default Types