import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// Ferramentas de rotas

import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage"; 
// Páginas do app

import PrivateRoute from "./PrivateRoute"; 
// Protege rotas

import "./global.css"; 
// Estilos globais

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        {/* Página inicial */}

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        /> 
        {/* Home protegida */}

        <Route
          path="/services"
          element={
            <PrivateRoute>
              <ServicesPage />
            </PrivateRoute>
          }
        /> 
        {/* Serviços protegida */}

        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <NotificationsPage />
            </PrivateRoute>
          }
        /> 
        {/* Notificações protegida */}

        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          }
        /> 
        {/* Configurações protegida */}
      </Routes>
    </Router>
  );
}
