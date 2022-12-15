import React from 'react'
import {ErrorMessage, useField} from 'formik'

export  const TextField = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    console.log(field,meta)
  return (
    
    <div className='mb-2'>

        <label htmlFor={field.name}>{label}</label>
        <input  
        className={`w-full text-slate-900 px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete='off'
        />
        <ErrorMessage name={field.name} />
    </div>
  )
}

export default TextField