import styles from "./Infos.module.css";

interface Project {
  id: number;
  title: string;
  category: string;
  progress: number;
  stopped: string;
  author: string;
  reason: string;
}

interface Category {
  id: string;
  label: string;
}

interface InfosProps {
  projects: Project[];
  categories: Category[];
}

function Infos({ projects, categories }: InfosProps) {
  const totalProjects = projects.length;
  const averageProgress =
    projects.length > 0
      ? Math.round(
          projects.reduce((sum, project) => sum + project.progress, 0) /
            projects.length,
        )
      : 0;
  const activeCategories = categories.length;
  const completedProjects = projects.filter(
    (project) => project.progress >= 100,
  ).length;

  return (
    <section className={styles.infos}>
      <div className={styles.infos__container}>
        <span className={styles.infos__title}>{totalProjects}</span>
        <span className={styles.infos__text}>projetos parados</span>
      </div>
      <div className={styles.infos__container}>
        <span className={styles.infos__title}>{averageProgress}%</span>
        <span className={styles.infos__text}>Progresso médio ao parar</span>
      </div>
      <div className={styles.infos__container}>
        <span className={styles.infos__title}>{activeCategories}</span>
        <span className={styles.infos__text}>Categorias ativas</span>
      </div>
      <div className={styles.infos__container}>
        <span className={styles.infos__title}>{completedProjects}</span>
        <span className={styles.infos__text}>Projetos concluídos</span>
      </div>
    </section>
  );
}

export default Infos;
