import { Box, Grid } from '@mui/material';
import useListServer from 'api/server/list';
import IServer from 'interfaces/server/IServer';
import { useMemo, useState } from 'react';
import LoadingFailed from 'renderer/components/LoadingFailed';
import ServerMenu from 'renderer/components/ServerMenu';
import { useServerContext } from 'renderer/context/ServerContext';
import { useServerOptionsDialogContext } from 'renderer/context/ServerOptionDialogContext';
import CreateServerDialog from 'renderer/dialogs/CreateServerDialog';
import JoinServerDialog from 'renderer/dialogs/JoinServerDialog';

const ServerPage = () => {
  const { data, isSuccess, isError } = useListServer();
  const { selectedServer, selectedServerId } = useServerContext();
  const { isCreate, isJoin } = useServerOptionsDialogContext();
  const [servers, setServers] = useState<IServer[]>([]);

  useMemo(() => {
    if (data && data.data) {
      setServers(data.data);
    }
  }, [data]);

  const onCloseDialogs = () => {};

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <ServerMenu data={servers} />
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
      <CreateServerDialog open={isCreate} onClose={onCloseDialogs} />
      <JoinServerDialog open={isJoin} onClose={onCloseDialogs} />
    </>
  );
};

export default ServerPage;
