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
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("Consulta");

  useEffect(() => {
    // let pfilter = router.query["filter"];
    // if (
    //   typeof pfilter != "undefined" &&
    //   typeof pfilter.valueOf() == "string" &&
    //   pfilter.length > 0
    // ) {
    // } else {
    //   pfilter = "Consulta";
    // }
    // document.getElementById("inputFilter").value = pfilter;
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

  return (
    <>
      <Header />

      <div className={styles.navbar}>
        <input
          type="text"
          id="inputFilter"
          placeholder="pesquisar por ..."
          onChange={(e) => setFilter(e.target.value)}
        />
        <a href="" onClick={(e) => onClickConfirm(e)}>
          <Image src="/confirm.png" alt="confirm" width={22} height={22} />
        </a>
        <a href="" onClick={(e) => onClickCancel(e)}>
          <Image src="/cancel.png" alt="cancel" width={22} height={22} />
        </a>
      </div>

      <div className={styles.cards}>
        {legalfees.map((legalfees) => (
          <Card legalfees={legalfees} />
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
        // Atividade: { $regex: filter ? filter : "Consulta", $options: "i" },
      })
      .limit(200)
      .toArray();

    return {
      props: { legalfees: JSON.parse(JSON.stringify(legalfees)) },
    };
  } catch (e) {}
}
