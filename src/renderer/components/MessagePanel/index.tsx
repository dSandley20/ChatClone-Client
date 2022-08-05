import { List } from '@mui/material';
import IMessage from 'interfaces/message/IMessage';
import Message from '../Message';

const MessagePanel = () => {
  return (
    <List>
      {data.map((message) => {
        return <Message />;
      })}
    </List>
  );
};

export default MessagePanel;
