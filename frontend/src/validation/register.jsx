import * as yup from 'yup'
export const RegisterSchema = yup.object().shape({
    email : yup.string()
    .email()
    .required(),
    password : yup.string(),
    address : yup.string(),
    city : yup.string(),
    state : yup.string(),
    zip : yup.string(),
    country :yup.string()
})