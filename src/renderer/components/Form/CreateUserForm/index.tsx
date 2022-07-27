import { useEffect, useState } from 'react';
import createValues from 'formik/auth/create';
import useCreateUserHook from 'api/user/create';
import useFormikWithMaterialUI from 'hooks/useFormikWithMui';
import { TextField, Button, Snackbar } from '@mui/material';

// TODO style
const CreateUserForm = () => {
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
    setIsOpen(true);
    if (mutation.isSuccess) {
      setResponseMessage('Successfully Logged in');
    }
    if (mutation.isError) {
      setResponseMessage('Error creating user');
    }
  }, [mutation.isSuccess, mutation.isError]);

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
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
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

export default CreateUserForm;
