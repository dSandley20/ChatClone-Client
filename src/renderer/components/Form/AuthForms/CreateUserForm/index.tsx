import { useEffect, useState } from 'react';
import createValues from 'formik/auth/create';
import useCreateUserHook from 'api/user/create';
import useFormikWithMaterialUI from 'hooks/useFormikWithMui';
import { Snackbar } from '@mui/material';
import { useServerContext } from 'renderer/context/ServerContext';
import { useNavigate } from 'react-router-dom';
import { AuthTextField, AuthButton } from '../styles';

// TODO style
const CreateUserForm = () => {
  const navigate = useNavigate();
  const { changeServer } = useServerContext();
  const [isOpen, setIsOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const mutation = useCreateUserHook();
  const { values, schema, callback } = createValues(mutation);
  const formik = useFormikWithMaterialUI(values, schema, callback);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setIsOpen(false);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setIsOpen(true);
      changeServer(0);
      setResponseMessage('Successfully Logged in');
      navigate('../server', { replace: true });
    }
    if (mutation.isError) {
      setIsOpen(true);
      setResponseMessage('Error creating user');
    }
  }, [mutation.isSuccess, mutation.isError, changeServer, navigate]);

  return (
    <>
      <div>
        <form
          style={{ display: 'inline-grid', justifyItems: 'center' }}
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
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
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
      </div>
    </>
  );
};

export default CreateUserForm;
