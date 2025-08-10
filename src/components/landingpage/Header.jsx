import { PrimaryButton } from "../../components/Buttons";

import styles from "../../styles/landingpage/Header.module.css";

export function Header({ className, home, features, tutorial, feedback }) {
  return (
    <div className={`${styles.header} ${className}`}>
      <div className={styles.nav}>
        <button onClick={home}>Inicio</button>
        <button onClick={features}>Serviços</button>
        <button onClick={tutorial}>Como usar</button>
        <button onClick={feedback}>Oque dizem</button>
      </div>
      <PrimaryButton title="Entrar" style={styles.button}/>
    </div>
  );
}