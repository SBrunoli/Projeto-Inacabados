import styles from "./InfosSkeleton.module.css";

function InfosSkeleton() {
  return (
    <div className={styles.infosSkeleton}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className={styles.infosSkeleton__box}>
          <div className={styles.infosSkeleton__number}></div>
          <div className={styles.infosSkeleton__label}></div>
        </div>
      ))}
    </div>
  );
}

export default InfosSkeleton;
