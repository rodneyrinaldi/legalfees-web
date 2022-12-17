import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.css";

export default function LegalFees() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Tabela de honorários advocatícios <span>2022</span>
        </h1>
        <input type="text" placeholder="argumento de busca" />
      </div>

      <div className={styles.main}>
        <a href="">
          <div className={styles.card}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.card}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
        <a href="">
          <div className={styles.card}>
            <h2>Classe</h2>
            <h3>Subclasse</h3>
            <h4>Materia</h4>
            <p>
              Valor <span>Porcentagem</span>
            </p>
          </div>
        </a>
      </div>

      <div className={styles.footer}>
        <Link href="http://dev.rodneyrinaldi.com">
          <Image
            src="/adv.svg"
            width="40"
            height="40"
            alt="adv.rodneyrinaldi.com"
          />
        </Link>
      </div>
    </>
  );
}
