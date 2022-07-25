import IUserLogin from 'interfaces/user/IUserLogin';
import { Box, Button, TextField } from '@mui/material';
import useFormikWithMaterialUI from 'hooks/useFormikWithMui';
import * as yup from 'yup';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import IFormikData from 'interfaces/common/IFormikData';

const LoginForm = () => {
  const initialValues: IUserLogin = { username: '', password: '' };
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const callback = (values: IFormikData): void => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormikWithMaterialUI(initialValues, schema, callback);

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
