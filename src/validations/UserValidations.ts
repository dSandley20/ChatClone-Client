import * as yup from 'yup';

const LoginValidation = yup.object({
  username: yup.string().required('A username is required'),
  password: yup.string().required('Password is required'),
});

module.exports = { LoginValidation };
