import { Button, TextField, Snackbar } from '@mui/material';
import useAuthHook from 'api/user/auth';
import useFormikWithMaterialUI from 'hooks/useFormikWithMui';
import authValues from 'formik/auth/auth';
import { useEffect, useState } from 'react';
// TODO - needs stlying
const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const mutation = useAuthHook();
  const { values, schema, callback } = authValues(mutation);
  const formik = useFormikWithMaterialUI(values, schema, callback);

  useEffect(() => {
    setIsOpen(true);
    if (mutation.isSuccess) {
      setResponseMessage('Successfully Logged in');
    }
    if (mutation.isError) {
      setResponseMessage('User not found');
    }
  }, [mutation.isSuccess, mutation.isError]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setIsOpen(false);
  };

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
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
        <Snackbar
          open={isOpen}
          autoHideDuration={6000}
          onClose={handleClose}
          message={responseMessage}
        />
      </div>
    </>
  );
};

export default LoginForm;
