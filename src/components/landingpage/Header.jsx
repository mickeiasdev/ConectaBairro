import { useState } from "react";

// components
import { PrimaryButton } from "../../components/Buttons";

// icons
import { SlMenu } from "react-icons/sl";

// styles
import styles from "../../styles/landingpage/Header.module.css";

export function Header({ className }) {
  const [nav, setNav] = useState(`${styles.nav}`);
  const [content, setContent] = useState();

  const handleMenu = () => {
    if (nav === `${styles.nav}`) {
      setNav(`${styles.nav} ${styles.active}`);
      setContent(`${styles.content} ${styles.active}`);
    } else {
      setNav(`${styles.nav}`);
      setContent(`${styles.content}`);
    }
  };

  return (
    <div className={`${styles.header} ${className}`}>
      <SlMenu className={styles.menu} onClick={handleMenu} />
      <div className={nav}>
        <div>
          <button className={content}>Inicio</button>
          <button className={content}>Serviços</button>
          <button className={content}>Como usar</button>
          <button className={content}>O que dizem</button>
          <button className={content}>Outros</button>
        </div>
        <PrimaryButton title="Entrar" style={`${styles.button} ${content}`} />
      </div>
    </div>
  );
}
