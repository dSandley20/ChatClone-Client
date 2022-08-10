import { createContext, useContext, useState } from 'react';

export interface IServerOptionDialogContext {
  isOpen: boolean;
  isCreate: boolean;
  isJoin: boolean;
  updateIsOpen: (data: boolean) => void;
  updateIsCreate: (data: boolean) => void;
  updateIsJoin: (data: boolean) => void;
}

const ServerOptionsDialogContext = createContext<IServerOptionDialogContext>({
  isOpen: false,
  isCreate: false,
  isJoin: false,
  updateIsOpen(data) {},
  updateIsCreate(data) {},
  updateIsJoin(data) {},
});
export default ServerOptionsDialogContext;

const ServerOptionsDialogProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isJoin, setIsJoin] = useState(false);

  const updateIsOpen = (data: boolean) => {
    setIsOpen(data);
  };
  const updateIsCreate = (data: boolean) => {
    setIsCreate(data);
  };
  const updateIsJoin = (data: boolean) => {
    setIsJoin(data);
  };

  return (
    <ServerOptionsDialogContext.Provider
      value={{
        isOpen,
        isCreate,
        isJoin,
        updateIsOpen,
        updateIsCreate,
        updateIsJoin,
      }}
    >
      {children}
    </ServerOptionsDialogContext.Provider>
  );
};

function useServerOptionsDialogContext() {
  const authContext = useContext(ServerOptionsDialogContext);
  if (authContext === undefined) {
    throw new Error('useServerContext failed');
  }
  return authContext;
}

export {
  ServerOptionsDialogProvider,
  useServerOptionsDialogContext,
  ServerOptionsDialogContext,
};
