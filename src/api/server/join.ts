import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import IServerJoin from 'interfaces/server/IServerJoin';

const joinServerRequest = async (data: IServerJoin): Promise<void> => {
  return api
    .post('server/join', data)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error('No server to join');
    });
};

const useJoinServer = () => {
  return useMutation(joinServerRequest, {
    onSuccess: () => {
      // TODO add to server menu list / invalidate get server queries
    },
  });
};

export default useJoinServer;
