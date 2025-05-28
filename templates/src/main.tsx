import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/AppRoutes'; // or './App' if that's your router component
import { AuthProvider } from './context/AuthContext'; // make sure the path is correct
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
  </StrictMode>
);
