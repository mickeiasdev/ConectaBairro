import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import "./global.css";

export default function App() {
  const userLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </Router>
  );
}
