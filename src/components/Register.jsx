import { PrimaryButton } from "./Buttons";
import Logo from "./Logo";
import { FaAngleLeft } from "react-icons/fa";

import styles from "../styles/Login.module.css";

export function Register({ onClickRegister, onClickLogin, close }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <FaAngleLeft className={styles.closeButton} onClick={close} />
        <div className={styles.header}>
          <Logo style={styles.logo} />
          <h1>Crie sua conta</h1>
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
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="confirm">
            Confirmar senha:
          </label>
          <input
            className={styles.input}
            type="password"
            id="confirm"
            name="confirm"
          />
        </div>
        <div className={styles.others}>
          <button onClick={onClickLogin} className={styles.link}>
            Já tenho uma conta
          </button>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" name="terms" />
            <label className={styles.labelCheckbox} htmlFor="terms">
              Aceito os termos de serviço
            </label>
          </div>
          
        </div>
        <PrimaryButton
          title="Criar conta"
          style={styles.button}
          onClick={onClickRegister}
        />
      </div>
    </div>
  );
}
