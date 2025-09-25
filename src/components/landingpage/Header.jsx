import { useState } from "react";
// Hook de estado
import { Link } from "react-scroll";
// Para rolagem suave entre seções
import { PrimaryButton } from "../../components/others/Buttons";
// Botão principal
import { SlMenu } from "react-icons/sl";
// Ícone de menu
import styles from "../../styles/landingpage/Header.module.css";
// Estilos do header

export function Header({ className, onLoginClick }) {
  const [nav, setNav] = useState(styles.nav);
  // Estado do menu (ativo/inativo)

  const handleMenu = () => {
    setNav((item) =>
      item.includes(styles.active)
        ? styles.nav
        : `${styles.nav} ${styles.active}`
    );
    // Alterna menu mobile
  };

  const handleSelect = () => {
    setNav(`${styles.nav}`);
    // Fecha menu ao selecionar
  };

  return (
    <div className={`${styles.header} ${className}`}>
      <SlMenu className={styles.menu} onClick={handleMenu} />
      {/* Ícone do menu */}

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
          {/* Links de navegação */}
        </div>

        <PrimaryButton
          onClick={onLoginClick}
          title="Entrar"
          style={`${styles.button}`}
        />
        {/* Botão de login */}
      </div>
    </div>
  );
}
