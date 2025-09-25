import styles from "../../styles/landingpage/Footer.module.css";
// Estilos do footer
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
// Ícones das redes sociais
import { Logo } from "../others/Logo";
// Logo do app

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <Logo />
            {/* Logo */}
            <div className={styles.logoName}>
              <h2>Conecta</h2>
              <h2>Bairro</h2>
            </div>
          </div>
          <p>Conectando pessoas e serviços da sua comunidade...</p>
          {/* Descrição */}
        </div>

        <div className={styles.col}>
          <h3>Links rápidos</h3>
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
          {/* Links do site */}
        </div>

        <div className={styles.col}>
          <h3>Redes sociais</h3>
          <div className={styles.socials}>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            {/* Ícones de redes sociais */}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} ConectaBairro. Todos os direitos
          reservados.
        </p>
        {/* Copyright */}
      </div>
    </footer>
  );
}
