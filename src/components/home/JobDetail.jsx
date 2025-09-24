import styles from '../../styles/home/JobDetail.module.css';

const JobDescription = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

function JobDetail({ job, onClose }) {
  if (!job) return null;

  return (
    <div className={styles.detailContainer}>
      <button onClick={onClose} className={styles.closeButton}>X</button>
      <h2 className={styles.title}>{job.title}</h2>
      <h3 className={styles.company}>{job.company_name}</h3>
      <p className={styles.location}><strong>Localização:</strong> {job.candidate_required_location}</p>
      <p className={styles.type}><strong>Tipo:</strong> {job.job_type}</p>
      <div className={styles.description}>
        <strong>Descrição:</strong>
        <JobDescription html={job.description} />
      </div>
      <a href={job.url} target="_blank" rel="noopener noreferrer" className={styles.applyButton}>
        Candidatar-se
      </a>
    </div>
  );
}

export default JobDetail;