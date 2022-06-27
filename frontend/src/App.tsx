import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';

import { theme } from './styles/theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperarSenha" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
