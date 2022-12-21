import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clientPromise from "../lib/mongodb";
import Card from "../parts/card";
import Footer from "../parts/footer";
import Header from "../parts/header";

import styles from "../styles/home.module.css";

export default function Home({ legalfees, query }) {
  const router = useRouter();
  const [filter, setFilter] = useState("Consulta");
  const [isDark, setIsDark] = useState(false);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 140) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", listenScrollEvent);
  }, []);

  function onClickCancel(event) {
    event.preventDefault();
    document.getElementById("inputFilter").value = "";
    router.push(`/?filter=${"Consulta"}`);
  }

  function onClickConfirm(event) {
    event.preventDefault();
    router.push(`/?filter=${filter}`);
  }

  function onKeyConfirm(event) {
    console.log(event.keyCode);
    if (event.key == "Enter") router.push(`/?filter=${filter}`);
  }

  return (
    <>
      <Header />

      <div className={styles.navbar}>
        {console.log(isDark)}
        <div className={isDark ? styles.navbarcolordark : styles.navbarcolor}>
          <input
            type="text"
            id="inputFilter"
            placeholder="pesquisar por ..."
            onChange={(e) => setFilter(e.target.value)}
            onKeyPress={(e) => onKeyConfirm(e)}
          />
          <a href="" onClick={(e) => onClickConfirm(e)}>
            <Image src="/confirm.png" alt="confirm" width={22} height={22} />
          </a>
          <a href="" onClick={(e) => onClickCancel(e)}>
            <Image src="/cancel.png" alt="cancel" width={22} height={22} />
          </a>
        </div>
      </div>

      <div className={styles.cards}>
        {legalfees.map((legalfees) => (
          <Card legalfees={legalfees} key={legalfees._id} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  try {
    let { filter } = query;
    if (
      typeof filter != "undefined" &&
      typeof filter.valueOf() == "string" &&
      filter.length > 0
    ) {
    } else {
      filter = "Consulta";
    }

    const client = await clientPromise;
    const db = client.db("legalfees");
    const legalfees = await db
      .collection("fees")
      .find({
        Atividade: { $regex: filter, $options: "i" },
      })
      .limit(200)
      .toArray();

    return {
      props: { legalfees: JSON.parse(JSON.stringify(legalfees)) },
    };
  } catch (e) {}
}
