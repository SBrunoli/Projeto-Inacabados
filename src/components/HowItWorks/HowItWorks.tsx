import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.howItWorks__title}>
        Da desistência de alguém até a continuação de outra pessoa.
      </h2>

      {/* HowItWorksCards */}
      <div className={styles.howItWorks__cardsConteiner}>
        <div className={styles.howItWorks__cards}>
          <span className={styles.howItWorks__cardsSpan}>01</span>
          <h2 className={styles.howItWorks__cardsTitle}>
            Publique o que você abandonou
          </h2>
          <p className={styles.howItWorks__cardDescription}>
            Conte em que ponto parou, por quê, e o que ainda falta para
            terminar.
          </p>
        </div>

        <div className={styles.howItWorks__cards}>
          <span className={styles.howItWorks__cardsSpan}>02</span>
          <h2 className={styles.howItWorks__cardsTitle}>
            Alguém se identifica e adota
          </h2>
          <p className={styles.howItWorks__cardDescription}>
            A pessoa vê exatamente onde você parou e decide se quer levar
            adiante.
          </p>
        </div>

        <div className={styles.howItWorks__cards}>
          <span className={styles.howItWorks__cardsSpan}>03</span>
          <h2 className={styles.howItWorks__cardsTitle}>
            O projeto ganha vida de novo
          </h2>
          <p className={styles.howItWorks__cardDescription}>
            Vocês trocam contexto, o novo dono assume, e o projeto sai do zero —
            porque nunca esteve nele.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
