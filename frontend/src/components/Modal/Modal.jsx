import React from 'react'
import TextField from '../TextField/TextField'
import { Formik, Form } from 'formik';
function Modal(array) {
  console.log(array,'props in modal')
  
    const formik = {
        initialValues: {fullname : ""}
    }
  return (
   <div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <Formik
    initialValues={formik.initialValues}
    onSubmit  = {(values) =>{console.log(values,'rr')}}> 
    {formik => (
    <Form>
    {/* {array.map((item)=>{
  
    <div key={item}>I am one Object in the Array {item}</div>
  
})} */}
    <TextField label='Full Name' name='fullname' type='text'/>
    </Form>)}
    </Formik>
  <label htmlFor="my-modal-3" className="btn">Yay!</label>
  </div>
  </div>
</div>
  )
}

export default Modal