import Stamp from "../others/Stamp";
// Componente de selo/informação
import { PrimaryButton } from "../others/Buttons";
// Botão principal
import styles from "../../styles/landingpage/Cta.module.css";
// Estilos do CTA

export function Cta({ className, onRegisterClick }) {
  return (
    <section className={`${styles.cta} ${className}`}>
      <h2 className={styles.title}>Pronto para começar?</h2>
      {/* Título do CTA */}

      <p className={styles.subtitle}>
        Junte-se a milhares de pessoas que já estão aproveitando as
        oportunidades locais.
      </p>
      {/* Subtítulo */}

      <PrimaryButton
        style={styles.button}
        title="Criar minha conta"
        onClick={onRegisterClick}
      />
      {/* Botão para registrar */}

      <div className={styles.stamps}>
        <Stamp title="100% Gratuito" />
        <Stamp title="Sem compromisso" />
        <Stamp title="Cadastro rápido" />
        {/* Selos de destaque */}
      </div>
    </section>
  );
}
