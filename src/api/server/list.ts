import api from 'api/api';
import { useQuery } from '@tanstack/react-query';

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
