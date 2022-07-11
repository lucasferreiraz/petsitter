import { Routes, Route, Navigate } from 'react-router-dom';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Home } from '../pages/Home';
import { LandingPage } from '../pages/LandingPage';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Sitter } from '../pages/Sitter';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sitter" element={<Sitter />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/recuperarSenha" element={<ForgotPassword />} />
      <Route path="/registrar" element={<Register />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}