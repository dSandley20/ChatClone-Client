import IServerButton from 'interfaces/server/IServerButton';
import { Avatar } from '@mui/material';

const ServerButton = (props: IServerButton) => {
  const { serverName, serverInitials, serverImage, onClick } = props;
  return (
    <>
      {serverImage != null && (
        <Avatar alt={serverName} src={serverImage} onClick={onClick} />
      )}
      {serverImage == null && (
        <Avatar alt={serverName} onClick={onClick}>
          {serverInitials}
        </Avatar>
      )}
    </>
  );
};

export default ServerButton;
