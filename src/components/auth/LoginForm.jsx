import { useState } from "react";
import styles from "../../styles/auth/LoginRegister.module.css";
import { useNavigate } from "react-router-dom";

export function LoginForm({ onSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = users.find((u) => u.email === email && u.senha === senha);

    if (user) {
      localStorage.setItem("usuarioLogado", JSON.stringify(user));
      alert(`Bem-vindo, ${user.nome}`);
      navigate("/home");
    } else {
      alert("Email ou senha inválidos.");
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
