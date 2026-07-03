import styles from "./Infos.module.css";

function Infos() {
  return (
    <section className={styles.infos}>
      {/* infos containers */}
      <div className={styles.infos__container}>
        <span className={styles.infos__title}>1.842</span>
        <span className={styles.infos__text}>projetos parados</span>
      </div>
      <div className={styles.infos__container}>
        <span className={styles.infos__title}>54%</span>
        <span className={styles.infos__text}>Progresso médio ao parar</span>
      </div>
      <div className={styles.infos__container}>
        <span className={styles.infos__title}>6</span>
        <span className={styles.infos__text}>Categorias ativas</span>
      </div>
      <div className={styles.infos__container}>
        <span className={styles.infos__title}>312</span>
        <span className={styles.infos__text}>Adoções concluídas</span>
      </div>
    </section>
  );
}

export default Infos;
