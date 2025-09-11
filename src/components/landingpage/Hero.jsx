import { Header } from "../landingpage/Header";
import Logo from "../others/Logo";
import { PrimaryButton, SecundaryButton } from "../others/Buttons";
import StatsApp from "../others/StatsApp";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "../../styles/landingpage/Hero.module.css";

export function Hero({ className, onRegisterClick, onLoginClick }) {
  return (
    <section className={`${styles.hero} ${className}`}>
      <Header className={styles.header} onLoginClick={onLoginClick} />
      <Logo style={styles.logo} />
      <div className={styles.titles}>
        <h1 className={styles.title}>Conecta</h1>
        <h1 className={styles.title}>Bairro</h1>
      </div>
      <p className={styles.subtitle}>
        A plataforma que conecta pessoas da sua comunidade para{" "}
        <strong>oportunidades de trabalho</strong> e serviços locais.
      </p>
      <div className={styles.buttons}>
        <PrimaryButton
          style={styles.primaryButton}
          title="Começar agora"
          icon={BiRightArrowAlt}
          onClick={onRegisterClick}
        />
        <SecundaryButton style={styles.secundaryButton} title="Saiba mais" />
      </div>
      <div className={styles.stats}>
        <StatsApp title="500+" subtitle="Vagas ativas" />
        <StatsApp title="1.2K+" subtitle="Prestadores" />
        <StatsApp title="5K+" subtitle="Úsuarios" />
      </div>
    </section>
  );
}
