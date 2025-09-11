import styles from "../../styles/home/JobCard.module.css";

export function JobCard({ job }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{job.title}</h3>
      <p className={styles.company}>{job.name}</p>
      <p className={styles.location}>
        {job.city}, {job.country}
      </p>
      <p className={styles.salary}>{job.salary}</p>
      <button className={styles.applyButton}>Aplicar</button>
    </div>
  );
}
