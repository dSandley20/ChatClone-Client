import { Box, Button, styled, TextField } from '@mui/material';

const AuthTextField = styled(TextField)(() => ({
  padding: 3,
  borderRadius: '2px',
  width: '100%',
}));

const AuthButton = styled(Button)(() => ({
  marginTop: '10%',
  width: '75%',
  borderRadius: '2px',
}));

const AuthBox = styled(Box)(() => ({
  outlineOffset: '15px',
  borderRadius: '15px',
  border: 'solid black',
  padding: '40px',
}));

export { AuthTextField, AuthButton, AuthBox };
