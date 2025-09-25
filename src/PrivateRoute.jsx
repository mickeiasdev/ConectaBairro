import { Navigate } from "react-router-dom"; 
// Redireciona usuário entre rotas

export default function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("usuarioLogado")); 
  // Busca usuário no localStorage

  if (!user) {
    return <Navigate to="/" replace />; 
    // Se não logado, volta pro login
  }

  return children; 
  // Se logado, mostra a página
}
