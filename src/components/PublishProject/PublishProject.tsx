import styles from "./PublishProject.module.css";

function PublishProject() {
  return (
    <section id="publish" className={`section ${styles.PublishProject}`}>
      <div className={styles.PublishProject__box}>
        <div>
          <h2 className={styles.PublishProject__title}>
            Tem algo largado pela metade?
          </h2>
          <p className={styles.PublishProject__description}>
            Leva 3 minutos para publicar. Alguém pode estar esperando exatamente
            por isso.
          </p>
        </div>

        <a href="#" className="btn btn__primary">
          Publicar meu Projeto <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </section>
  );
}

export default PublishProject;
