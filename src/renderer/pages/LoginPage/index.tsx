import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import CreateUserForm from 'renderer/components/Form/CreateUserForm';
import LoginForm from 'renderer/components/Form/LoginForm';

const LoginPage = () => {
  const [loginMode, setLoginMode] = useState(true);

  const changeMode = () => {
    setLoginMode(!loginMode);
  };

  return (
    <>
      {loginMode && (
        <Box>
          <LoginForm />
          <Typography onClick={changeMode}>Create Account</Typography>
        </Box>
      )}
      {!loginMode && (
        <Box>
          <CreateUserForm />
          <Typography onClick={changeMode}>Already have an account?</Typography>
        </Box>
      )}
    </>
  );
};

export default LoginPage;
