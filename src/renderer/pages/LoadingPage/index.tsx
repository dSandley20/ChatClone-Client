import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'renderer/context/AuthContext';

const LoadingPage = () => {
  // TODO perform system checks - auth, user, internet, what servers the user has, messages of last selected server
  const { isAuth } = useAuthContext();
  const [online, setOnline] = useState<boolean>(false);
  const navigate = useNavigate();

  const navigateToAuth = () => {
    navigate('../auth', { replace: true });
  };

  const navigateToServer = () => {
    navigate('../server', { replace: false });
  };

  useEffect(() => {
    if (online === false) {
      const interval = setInterval(() => {
        setOnline(navigator.onLine);
      }, 3000);
      return () => clearInterval(interval);
    }
    if (online && isAuth()) {
      // TODO should navigate to the last known server
      navigateToServer();
    }
    if (online && !isAuth()) {
      navigateToAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [online, isAuth()]);

  return (
    <>
      <Typography>Loading...</Typography>
    </>
  );
};

export default LoadingPage;
