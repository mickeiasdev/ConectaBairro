import { useState } from "react";
import { Link } from "react-scroll";

// components
import { PrimaryButton } from "../../components/Buttons";

// icons
import { SlMenu } from "react-icons/sl";

// styles
import styles from "../../styles/landingpage/Header.module.css";

export function Header({ className }) {
  const [nav, setNav] = useState(styles.nav);

  const handleMenu = () => {
    setNav(item => item.includes(styles.active) ? styles.nav : `${styles.nav} ${styles.active}`)
  };

  const handleSelect = () => {
    setNav(`${styles.nav}`);
  };

  return (
    <div className={`${styles.header} ${className}`}>
      <SlMenu className={styles.menu} onClick={handleMenu} />
      <div className={nav}>
        <div>
          <Link to="feature" smooth={true} duration={500} offset={-100}>
            <button onClick={handleSelect}>Serviços</button>
          </Link>
          <Link to="tutorial" smooth={true} duration={500} offset={-150}>
            <button onClick={handleSelect}>Como usar</button>
          </Link>
          <Link to="feedback" smooth={true} duration={500} offset={-150}>
            <button onClick={handleSelect}>O que dizem</button>
          </Link>
          <Link to="others" smooth={true} duration={500}>
            <button onClick={handleSelect}>Outros</button>
          </Link>
        </div>
        <PrimaryButton
          onClick={handleSelect}
          title="Entrar"
          style={`${styles.button}`}
        />
      </div>
    </div>
  );
}
