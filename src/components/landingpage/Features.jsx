import { IoLocationOutline, IoBriefcaseOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
// Ícones usados no componente

import styles from "../../styles/landingpage/Feature.module.css";
// Estilos do componente

export function Feature({ className }) {
  return (
    <section className={`${styles.features} ${className}`}>
      <h2 className={styles.title}>Tudo que você precisa em um só lugar</h2>
      {/* Título */}
      <p className={styles.subtitle}>
        Conecte-se com pessoas da sua comunidade, descubra novas oportunidades
        de trabalho e serviços próximos, fortaleça laços com vizinhos e
        transforme sua região em um lugar mais unido, colaborativo e próspero.
      </p>
      {/* Subtítulo */}

      <div className={styles.list}>
        <div className={styles.item}>
          <IoBriefcaseOutline className={styles.icon} />
          {/* Ícone de vaga */}
          <h3>Vagas locais</h3>
          <p>Descubra oportunidades de trabalho e serviços próximos.</p>
        </div>

        <div className={styles.item}>
          <FiUsers className={styles.icon} />
          {/* Ícone de prestadores */}
          <h3>Prestadores de serviços</h3>
          <p>Encontre profissionais qualificados da sua região.</p>
        </div>

        <div className={styles.item}>
          <IoLocationOutline className={styles.icon} />
          {/* Ícone de comunidade */}
          <h3>Comunidade</h3>
          <p>
            Fortaleça a união da sua comunidade e compartilhe oportunidades.
          </p>
        </div>

        <div className={styles.item}>
          <HiOutlineBolt className={styles.icon} />
          {/* Ícone de facilidade */}
          <h3>Fácil de Usar</h3>
          <p>Interface simples e rápida para encontrar o que precisa.</p>
        </div>

        <div className={styles.item}>
          <LuShield className={styles.icon} />
          {/* Ícone de segurança */}
          <h3>Segurança</h3>
          <p>Usuários verificados e sistema de avaliações confiável.</p>
        </div>
      </div>
    </section>
  );
}
