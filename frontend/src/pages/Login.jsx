import React from 'react'
import { useEffect } from 'react'
import { LoginrSchema } from "../validation/login";
import { Formik, Form } from 'formik';
import {login, reset} from '../features/auth/authSlice';
import {useSelector, useDispatch  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TextField from '../components/TextField/TextField';

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = {
    initialValues: {
    email : "frabhi93@gmail.com",
    password : "123"
    },
    
  };



  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (isSuccess || user) {
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  

  return (
    <Formik
    initialValues={formik.initialValues}
    validator={LoginrSchema}
    onSubmit  = {(values) =>{ 
      console.log(values,'rr')
      dispatch(login(values))
      }
      
    }
  > 
  {formik => (
    
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
  
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<Form className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
      
      <TextField label='Email' name='email' type='email'/>
      <TextField label='Password' name='password' type='password'/>
			<button className='btn btn-dark mt-3 ml-3' type='submit' value="Save without refresh">Login</button>
		
    </div>
	</Form>
</div>
)}
</Formik>
  )
}

export default Login