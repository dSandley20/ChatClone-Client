import IAuth from 'interfaces/user/IAuth';
import IUser from 'interfaces/user/IUser';
import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from 'react-use';

export interface IAuthContext {
  token: null | string | undefined;
  user: null | IUser | undefined;
  login: (data: IAuth) => void;
  logout: () => void;
  isAuth: () => boolean;
  isOnline: boolean;
  updateIsOnline: (value: boolean) => void;
}

const AuthContext = createContext<IAuthContext>({
  token: null,
  user: null,
  login(data) {},
  logout() {},
  isAuth() {
    return false;
  },
  isOnline: false,
  updateIsOnline(value) {},
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
  const [isOnline, setIsOnline] = useState(false);

  const login = (data: IAuth) => {
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    removeToken();
    removeUser();
  };

  const isAuth = () => {
    return token !== null && user !== null;
  };

  const updateIsOnline = (value: boolean) => {
    setIsOnline(value);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuth,
        isOnline,
        updateIsOnline,
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
