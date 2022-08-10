import { createContext, useContext, useState } from 'react';

export interface IServerOptionDialogContext {
  isCreate: boolean;
  isJoin: boolean;
  updateIsCreate: (data: boolean) => void;
  updateIsJoin: (data: boolean) => void;
}

const ServerOptionsDialogContext = createContext<IServerOptionDialogContext>({
  isCreate: false,
  isJoin: false,
  updateIsCreate(data) {},
  updateIsJoin(data) {},
});
export default ServerOptionsDialogContext;

const ServerOptionsDialogProvider = ({ children }: any) => {
  const [isCreate, setIsCreate] = useState(false);
  const [isJoin, setIsJoin] = useState(false);
  const updateIsCreate = (data: boolean) => {
    setIsCreate(data);
  };
  const updateIsJoin = (data: boolean) => {
    setIsJoin(data);
  };

  return (
    <ServerOptionsDialogContext.Provider
      value={{ isCreate, isJoin, updateIsCreate, updateIsJoin }}
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
