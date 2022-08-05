import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  // TODO perform system checks - auth, user, internet, what servers the user has, messages of last selected server
  const auth = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const [online, setOnline] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const navigateToAuth = () => {
    navigate('../auth', { replace: true });
  };

  const navigateToServer = () => {
    navigate('../server', { replace: false });
  };

  useEffect(() => {
    if (online === false || online === null) {
      const interval = setInterval(() => {
        setOnline(navigator.onLine);
      }, 3000);
      return () => clearInterval(interval);
    }
    if (online && auth && user) {
      // TODO should navigate to the last known server
      navigateToServer();
    }
    if (online && (auth == null || user == null)) {
      navigateToAuth();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [online, auth, user]);

  return (
    <>
      <Typography>Loading...</Typography>
    </>
  );
};

export default LoadingPage;
