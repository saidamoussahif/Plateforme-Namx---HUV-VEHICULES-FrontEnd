import * as yup from 'yup'

export  const RegisterSchema = yup.object({
    email : yup.string()
    .required('Required'),
    password : yup.string().required('Required'),
    address : yup.string().required('Required'),
    city : yup.string().required('Required'),
    state : yup.string().required('Required'),
    zip : yup.string().required('Required'),
    country :yup.string().required('Required'),
})