import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { LandingPage } from './pages/LandingPage';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { Register } from './pages/Register';
import { Sitter } from './pages/Sitter';
import { CreateContract } from './pages/CreateContract';
import { ContractsList } from './pages/ContractsList';

import { theme } from './styles/theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperarSenha" element={<ForgotPassword />} />
          <Route path="/registrar" element={<Register />} />
          <Route path="/sitter" element={<Sitter />} />
          <Route path="/contrato" element={<CreateContract />} />
          <Route path="/contratos/lista" element={<ContractsList />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
