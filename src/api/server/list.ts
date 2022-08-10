import { useQuery } from '@tanstack/react-query';
import api from 'api/api';

const listServerRequest = async () => {
  return api
    .get('server')
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error('No servers found');
    });
};

const useListServer = () => {
  return useQuery(['listServer'], listServerRequest);
};

export default useListServer;
