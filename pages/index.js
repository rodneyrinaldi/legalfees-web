import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clientPromise from "../lib/mongodb";
import styles from "../styles/index.module.css";
import Meta from "./meta";

export default function Legalfees({ legalfees, query }) {
  const router = useRouter();
  const [filter, setFilter] = useState("Consulta");

  useEffect(() => {
    const pfilter = router.query["filter"];
    router.push(`/?filter=${pfilter}`);
  }, []);

  useEffect(() => {
    router.push(`/?filter=${filter}`);
  }, [filter]);

  function onCliclClear() {
    // setFilter("Consulta");
    // document.getElementById("inputFilter").value = "";
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Meta
        title="Legal Fees"
        descrition="Tabela de honorários advocatícios"
        image="https://legalfees.rrs.net.br/card.png"
        url="https://legalfees.rrs.net.br/"
      />

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
          <div className={styles.inputbox}>
            <input
              type="text"
              id="inputFilter"
              placeholder="pesquisar por ..."
              onChange={(e) => setFilter(e.target.value)}
            />
            <a href="" onClick={onCliclClear}>
              <Image
                src="/cancel.png"
                alt="cancel"
                width={20}
                height={20}
                className={styles.inputboxclear}
              />
            </a>
          </div>
        </section>
        {legalfees.map((legalfees) => (
          <div className={styles.placeholdercard} key={legalfees._id}>
            <h3>{legalfees.Classe}</h3>
            <p>{legalfees.Subclasse}</p>
            <p>{legalfees.Atividade}</p>
            {legalfees.Valor ? <h2>{legalfees.Valor}</h2> : null}
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const filter = query.filter ? query.filter : "Consulta";

    const client = await clientPromise;
    const db = client.db("legalfees");
    const legalfees = await db
      .collection("fees")
      .find({ Atividade: { $regex: filter, $options: "i" } })
      .limit(200)
      .toArray();

    return {
      props: { legalfees: JSON.parse(JSON.stringify(legalfees)) },
    };
  } catch (e) {
    console.error(e);
  }
}
