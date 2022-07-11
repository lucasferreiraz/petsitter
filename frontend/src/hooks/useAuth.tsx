/*
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';
import { api } from '../services/api';

interface signInProps {
  cpf: string;
  password: string;
}
interface User {
  id: string;
  name: string;
  email: string;
}
interface AuthContextData {
  isAuthenticated: boolean;
  user: User;
  loading: boolean;
  changeLoading(value: boolean): void;
  signIn({ cpf, password }: signInProps): Promise<string>;
  signOut(): void;
}
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const STORAGED_TOKEN = '@Salutispep:token';
const STORAGED_USER = '@Salutispep:user';

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({} as User);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStoragedDate() {
      const storagedToken = localStorage.getItem(STORAGED_TOKEN);
      const storagedUser = localStorage.getItem(STORAGED_USER);

      if (storagedToken && storagedUser) {
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;

        setIsAuthenticated(true);
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStoragedDate();
  }, []);

  async function signIn({ cpf, password }: signInProps) {
    try {
      const response = await api.post('/sessions', {
        cpf,
        password,
      });
      setIsAuthenticated(true);
      localStorage.setItem(STORAGED_TOKEN, response.data.token);
      localStorage.setItem(STORAGED_USER, JSON.stringify(response.data.user));

      setUser(response.data.user);

      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      return response.data.message;
    } catch (error: any) {
      return error.response.data.message;
    }
  }

  function signOut() {
    localStorage.removeItem(STORAGED_TOKEN);
    localStorage.removeItem(STORAGED_USER);
    setUser({} as User);
    setIsAuthenticated(false);
  }

  function changeLoading(value: boolean) {
    setLoading(value);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        changeLoading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
*/

export const apagaDepois = '';