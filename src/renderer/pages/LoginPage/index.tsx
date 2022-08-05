import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import CreateUserForm from 'renderer/components/Form/AuthForms/CreateUserForm';
import LoginForm from 'renderer/components/Form/AuthForms/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const naviagate = useNavigate();
  const [loginMode, setLoginMode] = useState(true);

  const changeMode = () => {
    setLoginMode(!loginMode);
  };

  return (
    <>
      {loginMode && (
        <Box>
          <LoginForm />
          <Typography sx={{ textAlign: 'center' }} onClick={changeMode}>
            Create Account
          </Typography>
        </Box>
      )}
      {!loginMode && (
        <Box>
          <CreateUserForm />
          <Typography sx={{ textAlign: 'center' }} onClick={changeMode}>
            Already have an account?
          </Typography>
        </Box>
      )}
    </>
  );
};

export default LoginPage;
