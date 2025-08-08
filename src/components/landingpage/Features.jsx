// icons
import { IoLocationOutline, IoBriefcaseOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";

// styles
import styles from "../../styles/landingpage/Feature.module.css";

export default function Feature({ className }) {
  return (
    <section className={`${styles.features} ${className}`}>
      <h2 className={styles.title}>Tudo que você precisa em um só lugar</h2>
      <p className={styles.subtitle}>
        Conecte-se com pessoas da sua comunidade e encontre oportunidades de
        trabalho e serviços locais.
      </p>
      <div className={styles.list}>
        <div className={styles.item}>
          <IoBriefcaseOutline className={styles.icon} />
          <h3>Vagas locais</h3>
          <p>
            Encontre oportunidades de trabalho e serviços perto de você. Desde
            vendas até serviços especializados.
          </p>
        </div>
        <div className={styles.item}>
          <FiUsers className={styles.icon} />
          <h3>Prestadores de serviços</h3>
          <p>
            Contrate profissionais da sua região. Eletricistas, diaristas,
            jardineiros e muito mais.
          </p>
        </div>
        <div className={styles.item}>
          <IoLocationOutline className={styles.icon} />
          <h3>Comunidade</h3>
          <p>
            Fortaleça os laços da sua comunidade conectando vizinhos e criando
            oportunidades.
          </p>
        </div>
        <div className={styles.item}>
          <HiOutlineBolt className={styles.icon} />
          <h3>Fácil de Usar</h3>
          <p>
            Interface intuitiva para uma experiência sem complicações.
            Cadastre-se, encontre o que precisa e conecte-se em minutos.
          </p>
        </div>
        <div className={styles.item}>
          <LuShield className={styles.icon} />
          <h3>Segurança</h3>
          <p>
            Plataforma confiável com verificação de usuários e sistema de
            avaliações para garantir confiança.
          </p>
        </div>
      </div>
    </section>
  );
}
