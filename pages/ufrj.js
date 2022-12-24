import { useRouter } from "next/router";
import Footer from "../parts/footer";
import Header from "../parts/header";
import Meta from "../parts/meta";

import styles from "../styles/home.module.css";

export default function HomeRJ({ legalfees, query }) {
  const router = useRouter();

  return (
    <>
      <Header />

      <Meta
        title="Legal Fees"
        descrition="Tabela de honorários OAB"
        image="https://legalfees.rrs.net.br/card.jpg"
        url="https://legalfees.rrs.net.br/"
      />

      <div className={styles.cards}>
        <h2>
          Sob negociação{" "}
          <span>
            <p>Em breve novidades</p>
          </span>
        </h2>
      </div>

      <Footer />
    </>
  );
}
