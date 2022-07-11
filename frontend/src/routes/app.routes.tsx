import { Routes, Route, Navigate } from 'react-router-dom';
import { ContractsList } from '../pages/ContractsList';
import { CreateContract } from '../pages/CreateContract';
import { Home } from '../pages/Home';
import { LandingPage } from '../pages/LandingPage';
import { Sitter } from '../pages/Sitter';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sitter" element={<Sitter />} />

      <Route path="/contrato" element={<CreateContract />} />
      <Route path="/contratos/lista" element={<ContractsList />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}