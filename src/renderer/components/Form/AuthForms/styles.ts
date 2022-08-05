import { styled, TextField, Button } from '@mui/material';

const AuthTextField = styled(TextField)(() => ({
  padding: 3,
  borderRadius: '2px',
  width: '100%',
}));

const AuthButton = styled(Button)(() => ({
  width: '75%',
  borderRadius: '2px',
}));

export { AuthTextField, AuthButton };
