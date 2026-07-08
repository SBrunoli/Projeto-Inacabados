import ProgressBar from "../UI/ProgressBar/ProgressBar";
import styles from "./ProjectsCars.module.css";

interface Project {
  id: number;
  title: string;
  category: string;
  progress: number;
  stopped: string;
  author: string;
  reason: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__top}>
        <span className={styles.projectCard__topCategory}>
          {project.category}
        </span>
        <span className={styles.projectCard__topStop}>
          Parado {project.stopped}
        </span>
      </div>

      <h2 className={styles.projectCard__title}>{project.title}</h2>
      <p className={styles.projectCard__reason}>
        <i>"{project.reason}"</i>
      </p>
      <ProgressBar progress={project.progress} />

      <div className={styles.projectCard__bottom}>
        <span className={styles.projectCard__bottomAuthor}>
          por {project.author}
        </span>
        <button className={styles.projectCard__bottomBtn}>Adotar</button>
      </div>
    </div>
  );
}

export default ProjectCard;
