import React from 'react';
import { RegisterSchema } from "../validation/register";
import { Formik, Form } from 'formik';
import {register} from '../features/auth/authSlice';
import { useDispatch } from 'react-redux'
import TextField from '../components/TextField/TextField';
function Register() {
  const dispatch = useDispatch()
  const formik = {
    initialValues: {
    // fullname:"",
    // email : "",
    // password : "",
    // address : "", 
    // city : "", 
    // state : "", 
    // zip : "", 
    // country : ""
    fullname:"user",
    email : "frabhi93@gmail.com",
    password : "123",
    address : "adress3", 
    city : "city", 
    state : "state", 
    zip : "300", 
    country : "country"

    },
   
    
  };

  return (
    <Formik
    initialValues={formik.initialValues}
    validator={RegisterSchema}
    onSubmit  = {(values) =>{ 
      console.log(values,'rr')
      dispatch(register(values))
      }
      
    }
  > 
  {formik => (
    
    <div className="App w-full flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
  
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<Form className="space-y-12 ng-untouched ng-pristine ng-valid">
  {/* {console.log(formik,'formik console')} */}
		<div className="space-y-4">
      
      <TextField label='Full Name' name='fullname' type='text'/>
      <TextField label='Email' name='email' type='email'/>
      <TextField label='Password' name='password' type='password'/>
      <TextField label='Address' name='address' type='text'/>
      <TextField label='city' name='city' type='text'/>
      <TextField label='state' name='state' type='text'/>
      <TextField label='zip' name='zip' type='text'/>
      <TextField label='country' name='country' type='text'/>
			<button className='btn btn-dark mt-3 ml-3' type='submit' value="Save without refresh">Register</button>
		</div>
		{/* <div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
        
      </div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<button type='submit' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</button>.
			</p>
		</div> */}
	</Form>
</div>
)}
</Formik>
  )
}

export default Register