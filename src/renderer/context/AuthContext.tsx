import IUser from 'interfaces/user/IUser';
import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from 'react-use';

export interface IAuthContext {
  token: null | string | undefined;
  user: null | IUser | undefined;
  updateToken: (data: string | null) => void;
  updateUser: (data: IUser | null) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  token: null,
  user: null,
  updateToken(data) {},
  updateUser(data) {},
  logout() {},
});

export default AuthContext;

const AuthProvider = ({ children }: any) => {
  const [token, setToken, removeToken] = useLocalStorage<
    string | null | undefined
  >('token', null);
  const [user, setUser, removeUser] = useLocalStorage<IUser | null>(
    'user',
    null
  );

  const updateToken = (data: string | null) => {
    setToken(data);
  };

  const updateUser = (data: IUser | null) => {
    setUser(data);
  };

  const logout = () => {
    removeToken();
    removeUser();
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        updateToken,
        updateUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuthContext() {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('useServerContext failed');
  }
  return authContext;
}

export { AuthProvider, useAuthContext, AuthContext };
