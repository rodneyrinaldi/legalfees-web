import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.css";

export default function LegalFees() {
  return (
    <>
      <div className={styles.placeholdercontent}>
        <section className={styles.stickycontent}>
          <section className={styles.stickycontentimage}>
            <Link href="http://dev.rodneyrinaldi.com">
              <Image
                src="/rr-logo-w.png"
                alt="rr logo"
                width={40}
                height={40}
              />
            </Link>
          </section>
          <h1 className={styles.stickycontenttitle}>
            Tabela de honorários advocatícios <span>2022</span>
          </h1>
          <input type="text" placeholder="argumento de busca" />
        </section>

        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.placeholdercard}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
