import { Box, Typography } from '@mui/material';
import { useServerContext } from 'renderer/context/ServerContext';
import useGetServer from 'api/server/get';
import LoadingButton from '@mui/lab/LoadingButton';

const LoadingFailed = () => {
  const { selectedServerId, updateServerData } = useServerContext();

  const { data, isError, isLoading } = useGetServer(selectedServerId);

  return (
    <Box>
      <Typography>Could Not Load Server...</Typography>
      <LoadingButton loading={isLoading}>Reload</LoadingButton>
    </Box>
  );
};

export default LoadingFailed;
