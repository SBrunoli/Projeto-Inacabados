import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* logo */}
      <a href="index.html" className={styles.navbar__logo}>
        Inacaba<span className={styles.navbar__logoSpan}>dos</span>
      </a>

      {/* links */}
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <a href="#" className={styles.list__links}>
            Explorar
          </a>
        </li>
        <li className={styles.list__item}>
          <a href="#" className={styles.list__links}>
            Como funciona
          </a>
        </li>
        <li className={styles.list__item}>
          <a href="#" className={styles.list__links}>
            Histórias
          </a>
        </li>
      </ul>

      {/* Botão */}
      <a href="#" className={styles.btn}>
        Publicar o meu
      </a>
    </nav>
  );
}

export default Navbar;
