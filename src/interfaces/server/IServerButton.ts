interface IServerButton {
  serverName: string;
  serverInitials: string;
  serverImage?: string;
  onClick: () => void;
  onClose: () => void;
}

export default IServerButton;
