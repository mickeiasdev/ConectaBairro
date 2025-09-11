import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/auth/LoginRegister.module.css";

export function RegisterForm({ onSuccess }) {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = () => {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      alert("Digite um email válido.");
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const exists = users.some((u) => u.email === email);

    if (exists) {
      alert("Email já registrado!");
      return;
    }

    const newUser = { nome, email, senha };
    users.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(users));
    localStorage.setItem("usuarioLogado", JSON.stringify(newUser));

    alert("Usuário registrado com sucesso!");
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={onSuccess}>
        ×
      </button>
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
