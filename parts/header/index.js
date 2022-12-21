import Head from "next/head";

import styles from "../../styles/header.module.css";

function Header() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>legalfees.rrs.net.br</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>legalfees</h1>
        <p>Honorários Advocatícios 2022</p>
      </div>
    </>
  );
}

export default Header;
