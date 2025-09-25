import JobCard from "./JobCard";
// Componente de card da vaga
import styles from "../../styles/home/JobList.module.css";
// Estilos da lista

export function JobList({ jobs }) {
  return (
    <div className={styles.listContainer}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
        // Renderiza um card para cada vaga
      ))}
    </div>
  );
}
