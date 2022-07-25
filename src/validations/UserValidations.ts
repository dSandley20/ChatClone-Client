import * as yup from 'yup';

const LoginValidation = yup.object({
  username: yup.string().required('A username is required'),
  password: yup.string().required('Password is required'),
});

const CreateUserValidation = yup.object({
  username: yup.string().required('A username is required'),
  password: yup.string().required('A Password is required'),
  email: yup.string().email().required('An email is required'),
});

module.exports = { LoginValidation, CreateUserValidation };
