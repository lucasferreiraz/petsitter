import { ChakraProvider } from '@chakra-ui/react';
import {  BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './contexts/auth';
import { Routes } from './routes';

import { theme } from './styles/theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}
