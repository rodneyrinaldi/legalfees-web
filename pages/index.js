import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clientPromise from "../lib/mongodb";
import Card from "../parts/card";
import Footer from "../parts/footer";
import Header from "../parts/header";
import Meta from "../parts/meta";

import styles from "../styles/home.module.css";

export default function Home({ pfees, pviews, pageProps }) {
  const router = useRouter();
  const [filter, setFilter] = useState("Consulta");
  const [isLoading, setIsLoading] = useState(true);
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
    router.push(`/?filter=${"Hora intelectual"}`);
  }

  function onClickConfirm(event) {
    event.preventDefault();
    router.push(`/?filter=${filter}`);
  }

  function onKeyConfirm(event) {
    if (event.key == "Enter") router.push(`/?filter=${filter}`);
  }

  return (
    <>
      <Header />

      <Meta
        title="Legal Fees"
        descrition="Tabela de honorários OAB"
        image="https://legalfees.rrs.net.br/card.jpg"
        url="https://legalfees.rrs.net.br/"
      />

      <div className={styles.navbar}>
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
        {pfees.map((pfees) => (
          <Card legalfees={pfees} key={pfees._id} />
        ))}
      </div>

      <Footer visits={pviews[0].VL.toLocaleString("pt-BR")} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  function sensitiveRegex(string = "") {
    return string
      .replace(/a/g, "[a,á,à,ä,â]")
      .replace(/A/g, "[A,a,á,à,ä,â]")
      .replace(/e/g, "[e,é,ë,è]")
      .replace(/E/g, "[E,e,é,ë,è]")
      .replace(/i/g, "[i,í,ï,ì]")
      .replace(/I/g, "[I,i,í,ï,ì]")
      .replace(/o/g, "[o,ó,ö,ò]")
      .replace(/O/g, "[O,o,ó,ö,ò]")
      .replace(/u/g, "[u,ü,ú,ù]")
      .replace(/U/g, "[U,u,ü,ú,ù]");
  }

  try {
    let { filter } = query;
    if (
      typeof filter != "undefined" &&
      typeof filter.valueOf() == "string" &&
      filter.length > 0
    ) {
    } else {
      filter = "Hora intelectual";
    }

    const client = await clientPromise;
    const db = client.db("legalfees");

    const pfees = await db
      .collection("fees")
      .find({
        $or: [
          { codigo: { $regex: sensitiveRegex(filter), $options: "si" } },
          { atividade: { $regex: sensitiveRegex(filter), $options: "si" } },
          { materia: { $regex: sensitiveRegex(filter), $options: "si" } },
          { classe: { $regex: sensitiveRegex(filter), $options: "si" } },
          { tipo: { $regex: sensitiveRegex(filter), $options: "si" } },
        ],
        $and: [{ estado: { $regex: "SP" } }, { validade: { $regex: "2022" } }],
      })
      .collation({ locale: "pt", strength: 1 })
      .sort({ sequencial: 1 })
      .limit(100)
      .toArray();

    const data = await db
      .collection("views")
      .findOneAndUpdate({ ID: "visits" }, { $inc: { VL: 1 } });

    const pviews = await db
      .collection("views")
      .find({ ID: { $regex: "visits" } })
      .collation({ locale: "pt", strength: 1 })
      .toArray();

    return {
      props: {
        pfees: JSON.parse(JSON.stringify(pfees)),
        pviews: JSON.parse(JSON.stringify(pviews)),
      },
    };
  } catch (e) {}
}
