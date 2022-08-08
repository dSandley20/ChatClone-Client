import {
  Box,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import { useState } from 'react';
import CreateServerDialog, { DefaultDialogProps } from '../CreateServerDialog';
import JoinServerDialog from '../JoinServerDialog';

const ServerOptionsDialog = (props: DefaultDialogProps) => {
  const { open, onClose } = props;
  const [isCreate, setIsCreate] = useState(false);
  const [isJoin, setIsJoin] = useState(false);

  const onCloseDialogs = () => {
    setIsCreate(false);
    setIsJoin(false);
  };

  const openCreate = () => {
    setIsCreate(true);
  };

  const openJoin = () => {
    setIsJoin(true);
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
      <CreateServerDialog open={isCreate} onClose={onCloseDialogs} />
      <JoinServerDialog open={isJoin} onClose={onCloseDialogs} />
    </Box>
  );
};

export default ServerOptionsDialog;
