import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>inacabados</p>

      <p>
        Projeto realizado por{" "}
        <a
          href="https://github.com/SBrunoli"
          target="blank_"
          className={styles.footer__link}
        >
          Bruno de Oliveira
        </a>
      </p>

      <p>Nada aqui está pronto. É por isso que existe.</p>
    </footer>
  );
}

export default Footer;
