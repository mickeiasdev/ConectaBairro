import styles from "../../styles/home/JobDetail.module.css";
// Estilos do detalhe da vaga

const JobDescription = ({ html }) => {
  // Renderiza descrição em HTML
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export function JobDetail({ job, onClose }) {
  if (!job) return null;
  // Se não tem vaga, não mostra nada

  return (
    <div className={styles.detailContainer}>
      <button onClick={onClose} className={styles.closeButton}>
        X
      </button>
      {/* Botão fechar */}

      <h2 className={styles.title}>{job.title}</h2>
      {/* Título da vaga */}
      <h3 className={styles.company}>{job.company_name}</h3>
      {/* Empresa */}

      <p className={styles.location}>
        <strong>Localização:</strong> {job.candidate_required_location}
      </p>

      <p className={styles.type}>
        <strong>Tipo:</strong> {job.job_type}
      </p>

      <div className={styles.description}>
        <strong>Descrição:</strong>
        <JobDescription html={job.description} />
        {/* Mostra a descrição */}
      </div>

      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.applyButton}
      >
        Candidatar-se
      </a>
      {/* Link para candidatura */}
    </div>
  );
}
