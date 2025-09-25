import { useState } from "react";
// Hook de estado

import { useNavigate } from "react-router-dom";
// Navegação

import styles from "../../styles/auth/LoginRegister.module.css";
// Estilos

export function RegisterForm({ onSuccess }) {
  const navigate = useNavigate();
  // Função de navegação

  const [nome, setNome] = useState("");
  // Nome do usuário
  const [email, setEmail] = useState("");
  // Email do usuário
  const [senha, setSenha] = useState("");
  // Senha do usuário

  const validarEmail = (email) => {
    // Regex para validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = () => {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      alert("Preencha todos os campos.");
      // Campos vazios
      return;
    }

    if (!validarEmail(email)) {
      alert("Digite um email válido.");
      // Email inválido
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      // Senha curta
      return;
    }

    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    // Lista de usuários
    const exists = users.some((u) => u.email === email);
    // Verifica se já existe

    if (exists) {
      alert("Email já registrado!");
      // Usuário já existe
      return;
    }

    const newUser = { nome, email, senha, profilePic: null, resumeFile: null };
    // Novo usuário
    users.push(newUser);
    // Adiciona na lista
    localStorage.setItem("usuarios", JSON.stringify(users));
    // Salva no localStorage
    localStorage.setItem("usuarioLogado", JSON.stringify(newUser));
    // Loga o novo usuário

    alert("Usuário registrado com sucesso!");
    // Sucesso
    navigate("/home");
    // Vai pra home
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Registro</h2>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Nome</label>
        <input
          className={styles.input}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          // Atualiza nome
          placeholder="Seu nome completo"
        />
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

      <button className={styles.button} onClick={handleRegister}>
        Registrar
      </button>

      <div className={styles.footer}>
        <span>Já tem uma conta?</span>
        <button className={styles.link} onClick={() => onSuccess("login")}>
          Login
        </button>
      </div>
    </div>
  );
}
