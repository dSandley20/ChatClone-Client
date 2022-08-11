import { Box, Snackbar } from '@mui/material';
import useAuthHook from 'api/user/auth';
import authValues from 'formik/auth/auth';
import useFormikWithMaterialUI from 'hooks/useFormikWithMui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useServerContext } from 'renderer/context/ServerContext';
import { AuthButton, AuthTextField } from '../styles';

// TODO - needs stlying
const LoginForm = () => {
  const navigate = useNavigate();
  const { changeServer } = useServerContext();
  const [isOpen, setIsOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const mutation = useAuthHook();
  const { values, schema, callback } = authValues(mutation);
  const formik = useFormikWithMaterialUI(values, schema, callback);

  useEffect(() => {
    if (mutation.isSuccess) {
      setIsOpen(true);
      changeServer(0);
      setResponseMessage('Successfully Logged in');
      navigate('../server', { replace: true });
    }
    if (mutation.isError) {
      setIsOpen(true);
      setResponseMessage('User not found');
    }
  }, [mutation.isSuccess, mutation.isError, changeServer, navigate]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setIsOpen(false);
  };

  return (
    <>
      <Box>
        <form
          style={{
            display: 'inline-grid',
            justifyItems: 'center',
            width: '100%',
          }}
          onSubmit={formik.handleSubmit}
        >
          <AuthTextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
          />
          <AuthTextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
          <AuthButton
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </AuthButton>
        </form>
        <Snackbar
          open={isOpen}
          autoHideDuration={6000}
          onClose={handleClose}
          message={responseMessage}
        />
      </Box>
    </>
  );
};

export default LoginForm;
