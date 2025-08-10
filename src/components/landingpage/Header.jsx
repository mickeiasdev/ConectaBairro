import { useState } from "react";

// components
import { PrimaryButton } from "../../components/Buttons";

// icons
import { SlMenu } from "react-icons/sl";

// styles
import styles from "../../styles/landingpage/Header.module.css";

export function Header({ className, home, features, tutorial, feedback }) {
  const [nav, useNav] = useState();
  const [content, useContent] = useState();

  const handleMenu = () => {
    if (nav === `${styles.nav}`) {
      useNav(`${styles.nav} ${styles.active}`);
      useContent(`${styles.content} ${styles.active}`);
    } else {
      useNav(`${styles.nav}`);
      useContent(`${styles.content}`);
    }
  };

  return (
    <div className={`${styles.header} ${className}`}>
      <SlMenu className={styles.menu} onClick={handleMenu} />
      <div className={nav}>
        <div>
          <button className={content} onClick={home}>
            Inicio
          </button>
          <button className={content} onClick={features}>
            Serviços
          </button>
          <button className={content} onClick={tutorial}>
            Como usar
          </button>
          <button className={content} onClick={feedback}>
            Oque dizem
          </button>
        </div>
        <PrimaryButton title="Entrar" style={`${styles.button} ${content}`} />
      </div>
    </div>
  );
}
