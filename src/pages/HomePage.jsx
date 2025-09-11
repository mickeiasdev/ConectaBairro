import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('usuarioLogado'));

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bem-vindo, {user?.nome || 'usuário'}!</h1>
      <p>Email: {user?.email}</p>

      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
