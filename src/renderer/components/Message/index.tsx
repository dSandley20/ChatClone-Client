import { ListItem, Typography, Box } from '@mui/material';

export interface IMessage {
  message: string;
}

const Message = (props: IMessage) => {
  const { message } = props;
  return (
    <ListItem>
      <Box>
        <Typography>{message}</Typography>
      </Box>
    </ListItem>
  );
};

export default Message;
