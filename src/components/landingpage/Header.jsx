import { useState } from "react";
import { Link } from "react-scroll";

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
          <Link to="feature" smooth={true} duration={500}>
            <button className={content}>Serviços</button>
          </Link>
          <Link to="tutorial" smooth={true} duration={500}>
            <button className={content}>Como usar</button>
          </Link>
          <Link to="feedback" smooth={true} duration={500}>
            <button className={content}>O que dizem</button>
          </Link>
          <Link to="others" smooth={true} duration={500}>
            <button className={content}>Outros</button>
          </Link>
        </div>
        <PrimaryButton title="Entrar" style={`${styles.button} ${content}`} />
      </div>
    </div>
  );
}
