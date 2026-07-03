import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className={styles.progress}>
      <div className={styles.progress__track}>
        <div
          className={styles.progress__fill}
          style={{ width: `${progress}%` }}
        />
        <div
          className={styles.progress__hatch}
          style={{ left: `${progress}%` }}
        />
        <div className={styles.progress__flag} style={{ left: `${progress}%` }}>
          🚩
        </div>
      </div>
      <span className={styles.progress__percent}>{progress}%</span>
    </div>
  );
}

export default ProgressBar;
