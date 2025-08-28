import { PrimaryButton } from "./Buttons";
import Logo from "./Logo";
import { FaAngleLeft } from "react-icons/fa";

import styles from "../styles/Login.module.css";

export function Login({onClickLogin, onClickCreate, close}) {

  return (
    <div className={styles.main}>
      
      <div className={styles.container}>
        <FaAngleLeft className={styles.closeButton} onClick={close}/>
        <div className={styles.header}>
          <Logo style={styles.logo} />
          <h1>Acesse sua conta</h1>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            Senha:
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className={styles.others}>
          <button onClick={onClickCreate} className={styles.link}>
            Criar conta
          </button>
          <button className={styles.link}>
            Esqueci minha senha
          </button>
        </div>
        <PrimaryButton title="Login" style={styles.button} onClick={onClickLogin} />
      </div>
    </div>
  );
}
