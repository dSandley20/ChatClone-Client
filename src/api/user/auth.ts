import api from 'api/api';
import ILoginCreateUser from 'interfaces/user/ILoginCreateUser';
import { useMutation } from '@tanstack/react-query';
import { useLocalStorage } from 'react-use';
import IAuth from 'interfaces/user/IAuth';

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
  const [token, setToken, removeToken] = useLocalStorage('token', '');
  const [user, setUser, removeUser] = useLocalStorage('user', {});

  return useMutation(authRequest, {
    onSuccess: (response) => {
      // TODO set jwt + user in electron store or local storage
      setToken(response.token);
      setUser(response.user);
    },
  });
};

export default useAuthHook;
