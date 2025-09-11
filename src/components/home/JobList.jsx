import {JobCard} from "./JobCard";
import styles from "../../styles/home/JobList.module.css";

export function JobList({ jobs }) {
  return (
    <div className={styles.listContainer}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
