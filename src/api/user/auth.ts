import api from 'api/api';
import ILoginCreateUser from 'interfaces/user/ILoginCreateUser';
import { useMutation } from '@tanstack/react-query';
import IAuth from 'interfaces/user/IAuth';
import { useAuthContext } from 'renderer/context/AuthContext';

const authRequest = async (data: ILoginCreateUser): Promise<IAuth> => {
  return api
    .post('auth', data)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error('No user found');
    });
};

const useAuthHook = () => {
  const { login } = useAuthContext();
  return useMutation(authRequest, {
    onSuccess: (response) => {
      login(response);
    },
  });
};

export default useAuthHook;
