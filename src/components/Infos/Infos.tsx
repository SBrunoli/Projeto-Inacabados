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

  const infos = [
    { value: totalProjects, label: "projetos parados" },
    { value: `${averageProgress}%`, label: "Progresso médio ao parar" },
    { value: activeCategories, label: "Categorias ativas" },
    { value: completedProjects, label: "Projetos concluídos" },
  ];

  return (
    <section className={`section ${styles.infos}`}>
      {infos.map((info) => {
        return (
          <div className={styles.infos__box} key={info.label}>
            <span className={styles.infos__number}>{info.value}</span>
            <span className={styles.infos__label}>{info.label}</span>
          </div>
        );
      })}
    </section>
  );
}

export default Infos;
