import copy from "copy-to-clipboard";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../../styles/card.module.css";

function Card({ legalfees }) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {}, []);

  function handleClick(e) {
    e.preventDefault();
    setIsOpened(!isOpened);
  }

  async function handleCopy(e) {
    const texttocopy =
      legalfees.codigo +
      " " +
      legalfees.atividade +
      " " +
      legalfees.valor +
      " " +
      legalfees.porcentagem +
      " " +
      legalfees.materia +
      " " +
      legalfees.classe +
      " " +
      legalfees.tipo;
    e.preventDefault();
    copy(texttocopy, {
      debug: false,
      message: "Pressione #{tecla} para copiar",
    });
  }

  return (
    <div className={isOpened ? styles.containerFlyer : styles.container}>
      <a href="" onClick={(e) => handleClick(e)}>
        <h3>
          <span>{legalfees.codigo} </span>
          {legalfees.classe}
        </h3>
        <p>{legalfees.subclasse}</p>
        <p>{legalfees.atividade}</p>
        {legalfees.valor ? (
          <h2>
            {legalfees.valor}{" "}
            {legalfees.porc ? <span>( {legalfees.porc} )</span> : null}
          </h2>
        ) : null}
      </a>
      <div>
        <a href="" onClick={(e) => handleCopy(e)}>
          <Image src="/copy.png" alt="confirm" width={22} height={22} />
        </a>
      </div>
    </div>
  );
}

export default Card;
