import React from 'react';
import { RegisterSchema } from "../validation/register";
import { useFormik,Formik } from 'formik';
function Register() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      adress: '',
      city: '',
      state: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    
  });

  return (
    <Formik
    initialValues={formik.initialValues}
    validationSchema={RegisterSchema}
    onSubmit={formik.onSubmit}
  > 
  {(formik) => (
    
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
  {console.log(formik)}
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<button type='submit' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</button>.
			</p>
		</div>
	</form>
</div>
)}
</Formik>
  )
}

export default Register