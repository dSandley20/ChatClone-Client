import { useMutation } from '@tanstack/react-query';
import api from 'api/api';
import ILoginCreateUser from 'interfaces/user/ILoginCreateUser';
import IAuth from 'interfaces/user/IAuth';
import { useAuthContext } from 'renderer/context/AuthContext';

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
  const { login } = useAuthContext();
  return useMutation(createRequest, {
    onSuccess: (response) => {
      login(response);
    },
  });
};

export default useCreateUserHook;
