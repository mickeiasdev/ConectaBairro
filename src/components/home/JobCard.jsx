import styles from "../../styles/home/JobCard.module.css";
// Estilos do card

export function JobCard({ job, onCardClick }) {
  // job = dados da vaga

  const handleViewJob = () => {
    onCardClick(job);
    // Chama função do pai com a vaga
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{job.title}</h3>
        <span className={styles.company}>{job.company_name}</span>
      </div>

      <div className={styles.details}>
        <p>
          <strong>Tipo:</strong> {job.job_type || "Não Informado"}
        </p>
        <p>
          <strong>Local:</strong> {job.candidate_required_location}
        </p>
        <p>
          <strong>Salário:</strong> {job.salary}
        </p>
        <p>
          <strong>Data:</strong>{" "}
          {new Date(job.publication_date).toLocaleDateString()}
        </p>
      </div>

      <button className={styles.button} onClick={handleViewJob}>
        Ver vaga
      </button>
    </div>
  );
}
