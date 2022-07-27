import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import ILoginCreateUser from 'interfaces/user/ILoginCreateUser';
import { useLocalStorage } from 'react-use';
import IAuth from 'interfaces/user/IAuth';

const createRequest = async (data: ILoginCreateUser): Promise<IAuth> => {
  return api
    .post('auth/create', data)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error('Could not create user');
    });
};

const useCreateUserHook = () => {
  const [token, setToken, removeToken] = useLocalStorage('token', '');
  const [user, setUser, removeUser] = useLocalStorage('user', {});
  return useMutation(createRequest, {
    onSuccess: (response) => {
      // TODO set jwt + user in electron store or local storage
      setToken(response.token);
      setUser(response.user);
    },
  });
};

export default useCreateUserHook;
