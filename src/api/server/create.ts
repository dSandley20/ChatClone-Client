import api from 'api/api';
import { useMutation } from '@tanstack/react-query';
import IServerCreate from 'interfaces/server/IServerCreate';

// TODO create server interface
const createServerRequest = async (data: IServerCreate): Promise<void> => {
  return api
    .post('create', data)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error('No user found');
    });
};

const useCreateServer = () => {
  return useMutation(createServerRequest, {
    onSuccess: () => {
      // TODO add to server menu list / invalidate get server queries
    },
  });
};

export default useCreateServer;
