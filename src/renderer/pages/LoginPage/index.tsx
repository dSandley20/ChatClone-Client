import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateUserForm from 'renderer/components/Form/AuthForms/CreateUserForm';
import LoginForm from 'renderer/components/Form/AuthForms/LoginForm';
import { AuthBox } from 'renderer/components/Form/AuthForms/styles';

const LoginPage = () => {
  const naviagate = useNavigate();
  const [loginMode, setLoginMode] = useState(true);

  const changeMode = () => {
    setLoginMode(!loginMode);
  };

  return (
    <Box sx={{ width: '300px' }}>
      {loginMode && (
        <AuthBox>
          <LoginForm />
          <Typography sx={{ textAlign: 'center' }} onClick={changeMode}>
            Create Account
          </Typography>
        </AuthBox>
      )}
      {!loginMode && (
        <Box>
          <CreateUserForm />
          <Typography sx={{ textAlign: 'center' }} onClick={changeMode}>
            Already have an account?
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LoginPage;
