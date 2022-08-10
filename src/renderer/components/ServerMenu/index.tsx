/* eslint-disable no-underscore-dangle */
import { Stack } from '@mui/material';
import IServer from 'interfaces/server/IServer';
import IServerButton from 'interfaces/server/IServerButton';
import { useServerContext } from 'renderer/context/ServerContext';
import { useServerOptionsDialogContext } from 'renderer/context/ServerOptionDialogContext';
import ServerOptionsDialog from 'renderer/dialogs/ServerOptionsDialog';
import ServerButton from '../ServerButton';

export interface IServerMenu {
  data: IServer[];
}

const ServerMenu = (props: IServerMenu) => {
  const { changeServer } = useServerContext();
  const { isOpen, updateIsOpen } = useServerOptionsDialogContext();

  const { data } = props;

  const createServerProps: IServerButton = {
    serverName: 'create server',
    serverInitials: '+',
    onClick: () => {
      updateIsOpen(true);
    },
    onClose: () => {
      updateIsOpen(false);
    },
  };

  return (
    <>
      <Stack spacing={2}>
        {data.map((server) => {
          let initials = '';
          for (let index = 0; index < server.name.split('-').length; index++) {
            initials += server.name.split('-')[index][0].toUpperCase();
          }
          return (
            <ServerButton
              key={server.name}
              serverName={server.name}
              serverInitials={initials}
              onClick={() => {
                changeServer(server.id);
              }}
              onClose={createServerProps.onClose}
            />
          );
        })}
        {/* Button to create a new server at the bottom of the stack */}
        <ServerButton
          serverName={createServerProps.serverName}
          serverInitials={createServerProps.serverInitials}
          onClick={createServerProps.onClick}
          onClose={createServerProps.onClose}
        />
      </Stack>
      <ServerOptionsDialog open={isOpen} onClose={createServerProps.onClose} />
    </>
  );
};

export default ServerMenu;
