import styles from "./ProjectCardSkeleton.module.css";

function ProjectCardSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonCard__top}>
        <div className={styles.skeletonCard__category}></div>
        <div className={styles.skeletonCard__stop}></div>
      </div>

      <div className={styles.skeletonCard__title}></div>

      <div className={styles.skeletonCard__reason}></div>
      <div className={styles.skeletonCard__reasonShort}></div>

      <div className={styles.skeletonCard__progressBar}></div>

      <div className={styles.skeletonCard__bottom}>
        <div className={styles.skeletonCard__author}></div>
      </div>
    </div>
  );
}

export default ProjectCardSkeleton;
