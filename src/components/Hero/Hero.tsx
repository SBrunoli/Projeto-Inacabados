import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      {/* Categories and Projects */}
      <ul className={styles.hero__infos}>
        <li>8 categorias ativas</li>
        <li>|</li>
        <li>1842 projetos parados</li>
      </ul>

      {/* title */}
      <h1 className={styles.hero__title}>
        Todo projeto abandonado{" "}
        <span className={styles.hero__titleSpan}>já foi</span> uma vontade real.
      </h1>

      {/* description */}
      <p className={styles.hero__description}>
        Inacabados é onde código, móveis, livros, jardins e músicas que pararam
        no meio do caminho esperam por alguém disposto a continuar — do exato
        ponto em que a última pessoa parou.
      </p>

      {/* Button */}
      <ul className={styles.hero__buttons}>
        <li>
          <a href="#" className={styles.hero__btn}>
            Explorar Projetos
          </a>
        </li>
        <li>
          <a href="#" className={styles.hero__btnTransparent}>
            Como funciona -&gt;
          </a>
        </li>
      </ul>

      {/* search */}
      <div className={styles.hero__search}>
        <i
          className={`fa-solid fa-magnifying-glass ${styles.hero__searchIcon}`}
        ></i>
        <form className={styles.hero__searchForm}>
          <input
            type="text"
            placeholder="Buscar projetos..."
            className={styles.hero__searchInput}
          />
        </form>
      </div>
    </section>
  );
}

export default Hero;
