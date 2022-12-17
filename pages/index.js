import Image from "next/image";
import Link from "next/link";
import clientPromise from "../lib/mongodb";
import styles from "../styles/index.module.css";

export default function Legalfees({ legalfees }) {
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
          <input type="text" placeholder="pesquisar por ..." />
        </section>

        {legalfees.map((legalfees) => (
          <div className={styles.placeholdercard}>
            <p>{legalfees.Atividade}</p>
            <p>{legalfees.Classe}</p>
            <p>{legalfees.Subclasse}</p>
            <p>{legalfees.Valor}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("legalfees");

    const legalfees = await db
      .collection("fees")
      .find({})
      // .sort({ Atividade: -1 })
      .limit(200)
      .toArray();

    return {
      props: { legalfees: JSON.parse(JSON.stringify(legalfees)) },
    };
  } catch (e) {
    console.error(e);
  }
}
