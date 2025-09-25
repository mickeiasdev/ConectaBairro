import { Header } from "../landingpage/Header";
// Header da landing page
import { Logo } from "../others/Logo";
// Logo do app
import { PrimaryButton, SecundaryButton } from "../others/Buttons";
// Botões principais
import { StatsApp } from "../others/StatsApp";
// Componente de estatísticas
import { BiRightArrowAlt } from "react-icons/bi";
// Ícone para botão
import styles from "../../styles/landingpage/Hero.module.css";
// Estilos do Hero

export function Hero({ className, onRegisterClick, onLoginClick }) {
  return (
    <section className={`${styles.hero} ${className}`}>
      <Header className={styles.header} onLoginClick={onLoginClick} />
      {/* Header */}

      <Logo style={styles.logo} />
      {/* Logo */}

      <div className={styles.titles}>
        <h1 className={styles.title}>Conecta</h1>
        <h1 className={styles.title}>Bairro</h1>
        {/* Título do app */}
      </div>

      <p className={styles.subtitle}>
        A plataforma que conecta pessoas da sua comunidade para{" "}
        <strong>oportunidades de trabalho</strong> e serviços locais.
      </p>
      {/* Subtítulo */}

      <div className={styles.buttons}>
        <PrimaryButton
          style={styles.primaryButton}
          title="Começar agora"
          icon={BiRightArrowAlt}
          onClick={onRegisterClick}
        />
        {/* Botão principal */}
        <SecundaryButton style={styles.secundaryButton} title="Saiba mais" />
        {/* Botão secundário */}
      </div>

      <div className={styles.stats}>
        <StatsApp title="500+" subtitle="Vagas ativas" />
        <StatsApp title="1.2K+" subtitle="Prestadores" />
        <StatsApp title="5K+" subtitle="Úsuarios" />
        {/* Estatísticas do app */}
      </div>
    </section>
  );
}
