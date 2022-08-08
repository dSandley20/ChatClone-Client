import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'renderer/context/AuthContext';

const LoadingPage = () => {
  // TODO perform system checks - auth, user, internet, what servers the user has, messages of last selected server
  const { isAuth, isOnline, updateIsOnline } = useAuthContext();
  const navigate = useNavigate();

  const navigateToAuth = () => {
    navigate('../auth', { replace: true });
  };

  const navigateToServer = () => {
    navigate('../server', { replace: true });
  };

  useEffect(() => {
    if (isOnline === false) {
      const interval = setInterval(() => {
        updateIsOnline(navigator.onLine);
      }, 3000);
      return () => clearInterval(interval);
    }
    if (isOnline && isAuth()) {
      // TODO should navigate to the last known server
      navigateToServer();
    }
    if (isOnline && !isAuth()) {
      navigateToAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline, isAuth, updateIsOnline]);

  return (
    <>
      <Typography>Loading...</Typography>
    </>
  );
};

export default LoadingPage;
