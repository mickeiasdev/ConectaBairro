import { useState } from "react";
// Hook para estados

import styles from "../../styles/auth/LoginRegister.module.css";
// Estilos do componente

import { useNavigate } from "react-router-dom";
// Navegação entre rotas

export function LoginForm({ onSuccess }) {
  const navigate = useNavigate();
  // Função de navegação

  const [email, setEmail] = useState("");
  // Estado do email
  const [senha, setSenha] = useState("");
  // Estado da senha

  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      alert("Preencha todos os campos.");
      // Validação simples
      return;
    }

    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    // Lista de usuários
    const user = users.find((u) => u.email === email && u.senha === senha);
    // Busca usuário válido

    if (user) {
      localStorage.setItem("usuarioLogado", JSON.stringify(user));
      // Salva login
      alert(`Bem-vindo, ${user.nome}`);
      // Mensagem
      navigate("/home");
      // Vai pra home
    } else {
      alert("Email ou senha inválidos.");
      // Erro login
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Login</h2>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // Atualiza email
          placeholder="exemplo@email.com"
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Senha</label>
        <input
          className={styles.input}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          // Atualiza senha
          placeholder="********"
        />
      </div>

      <button className={styles.button} onClick={handleLogin}>
        Entrar
      </button>

      <div className={styles.footer}>
        <span>Não tem uma conta?</span>
        <button className={styles.link} onClick={() => onSuccess("register")}>
          Registrar
        </button>
      </div>
    </div>
  );
}
