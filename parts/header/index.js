import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import styles from "../../styles/header.module.css";

function Header() {
  const router = useRouter();
  const [key, setKey] = useState(false);

  function onClickConfirm(event) {
    event.preventDefault();
    setKey(!key);
  }

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
        <div className={styles.menu}>
          <a href="" onClick={onClickConfirm}>
            <Image
              src="/menu.png"
              alt="confirm"
              width={26}
              height={26}
              className={styles.inputboxconfirm}
            />
          </a>
        </div>
      </div>
      {key ? (
        <div className={styles.popup}>
          <a href="https://legalfees.rrs.net.br/api/fees" target="_blank">
            <Image
              src="/flagapi.png"
              alt="URL API"
              width={52}
              height={52}
              className={styles.inputboxconfirm}
            />
          </a>
          <a href="/ufrj">
            <Image
              src="/flagrj.png"
              alt="Rio de Janeiro"
              width={52}
              height={52}
              className={styles.inputboxconfirm}
            />
          </a>
          <a href="/">
            <Image
              src="/flagsp.png"
              alt="São Paulo"
              width={52}
              height={52}
              className={styles.inputboxconfirm}
            />
          </a>
        </div>
      ) : null}
    </>
  );
}

export default Header;
