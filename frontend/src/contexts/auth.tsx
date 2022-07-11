import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../services/auth';

interface signInProps {
  email: string;
  password: string;
}
interface AuthContextData {
  isAuthenticated: boolean;
  loading: boolean;
  changeLoading(value: boolean): void;
  signIn({ email, password }: signInProps): Promise<string>;
  signOut(): void;
}
interface AuthProviderProps {
  children: ReactNode;
}

const TOKEN_NAME = '@Petsitter:token';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadStoragedDate() {
      const storagedToken = localStorage.getItem('@Petsitter:token');

      if (storagedToken) {
        setIsAuthenticated(true);
      }
    }

    loadStoragedDate();
  }, []);

  async function signIn({ email, password }: signInProps) {
    const { token, message } = await auth.signIn({ email, password });

    if (token != null) {
      setIsAuthenticated(true);
      localStorage.setItem(TOKEN_NAME, token);
      navigate('/home');
    }

    return message;
  }

  function signOut() {
    localStorage.removeItem(TOKEN_NAME);
    setIsAuthenticated(false);

    navigate('/');
  }

  function changeLoading(value: boolean) {
    setLoading(value);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
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