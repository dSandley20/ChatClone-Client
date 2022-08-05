/* eslint-disable react/prop-types */
import IServer from 'interfaces/server/IServer';
import React, { createContext, useContext, useState } from 'react';

export interface IServerContext {
  selectedServerId: number;
  changeServer: (value: number) => void;
  selectedServer: null | IServer;
  updateServerData: (data: null | IServer) => void;
}

const ServerContext = createContext<IServerContext>({
  selectedServerId: 0,
  changeServer(value) {},
  selectedServer: null,
  updateServerData(data) {},
});
export default ServerContext;

const ServerProvider = ({ children }: any) => {
  const [serverId, setServerId] = useState<number>(0);
  const [selectedServer, setSelectedServer] = useState<null | IServer>(null);

  const changeServer = (value: number) => {
    setServerId(value);
  };
  const updateServerData = (data: null | IServer) => {
    setSelectedServer(data);
  };

  return (
    <ServerContext.Provider
      value={{
        selectedServerId: serverId,
        changeServer,
        selectedServer,
        updateServerData,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};

function useServerContext() {
  const serverContext = useContext(ServerContext);
  if (serverContext === undefined) {
    throw new Error('useServerContext failed');
  }
  return serverContext;
}

export { ServerProvider, useServerContext, ServerContext };
