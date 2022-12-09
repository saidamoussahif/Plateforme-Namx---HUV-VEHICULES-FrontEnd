import * as yup from 'yup'

export  const LoginrSchema = yup.object({
    email : yup.string()
    .required('Required'),
    password : yup.string().required('Required')
})