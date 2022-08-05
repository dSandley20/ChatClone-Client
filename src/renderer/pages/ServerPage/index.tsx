import ServerMenu from 'renderer/components/ServerMenu';
import { Box, Grid } from '@mui/material';
import useListServer from 'api/server/list';
import { useServerContext } from 'renderer/context/ServerContext';
import LoadingFailed from 'renderer/components/LoadingFailed';

const ServerPage = () => {
  const { data, isSuccess, isError } = useListServer();
  const { selectedServer, selectedServerId } = useServerContext();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <ServerMenu data={data} />
        </Grid>
        {isSuccess && selectedServerId === 0 && (
          <Box> {/* TODO have message/server panel */}</Box>
        )}
        {isSuccess && selectedServerId > 0 && (
          <Box> {/* TODO show last active server */}</Box>
        )}
        {isError && (
          <Box>
            <LoadingFailed />
          </Box>
        )}

        <Grid item xs={9} />
      </Grid>
    </>
  );
};

export default ServerPage;
