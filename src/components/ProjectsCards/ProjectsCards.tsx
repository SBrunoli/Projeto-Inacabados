import ProgressBar from "../UI/ProgressBar/ProgressBar";
import styles from "./ProjectsCards.module.css";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
  adoptProject: () => void;
}

function ProjectCard({ project, adoptProject }: ProjectCardProps) {
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
        {/* passa para o elemento pai, as informações do projeto cujo o botao foi clicado */}
        <button className="btn btn__primary" onClick={adoptProject}>
          Adotar
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
