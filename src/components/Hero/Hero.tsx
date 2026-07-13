import styles from "./Hero.module.css";

interface HeroProps {
  categoriesCount: number;
  stoppedProjectsCount: number;
  searchValue: string;
  handleSearch: (value: string) => void;
}

function Hero({
  categoriesCount,
  stoppedProjectsCount,
  handleSearch,
  searchValue,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      {/* Categories and Projects */}
      <ul className={styles.hero__infos}>
        <li>{categoriesCount} categorias ativas</li>
        <li>|</li>
        <li>{stoppedProjectsCount} projetos parados</li>
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
          <a href="#projects" className={styles.hero__btn}>
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
        <form
          className={styles.hero__searchForm}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className={styles.hero__searchInput}
          />
        </form>
      </div>
    </section>
  );
}

export default Hero;
