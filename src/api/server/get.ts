import api from 'api/api';
import { useQuery } from '@tanstack/react-query';

const getServerRequest = async (serverId: number) => {
  return api
    .get(`server/${serverId}`)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error('No user found');
    });
};

const useGetServer = (serverId: number) => {
  return useQuery(['getServer', serverId], () => getServerRequest(serverId));
};

export default useGetServer;
