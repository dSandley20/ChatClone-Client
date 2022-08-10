import {
  Box,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import { useServerOptionsDialogContext } from 'renderer/context/ServerOptionDialogContext';
import { DefaultDialogProps } from '../CreateServerDialog';

const ServerOptionsDialog = (props: DefaultDialogProps) => {
  const { open, onClose } = props;
  const { updateIsCreate, updateIsJoin } = useServerOptionsDialogContext();

  const openCreate = () => {
    updateIsCreate(true);
  };

  const openJoin = () => {
    updateIsJoin(true);
  };

  return (
    <Box>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create or Join Server</DialogTitle>
        <List>
          <ListItem>
            <ListItemButton onClick={openCreate}>Create Server</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={openJoin}>Join Server</ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </Box>
  );
};

export default ServerOptionsDialog;
