import { useEffect, useState } from "react";

import styles from "../../styles/card.module.css";

function Card({ legalfees }) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {}, []);

  function handleClick(e) {
    e.preventDefault();
    setIsOpened(!isOpened);
  }

  return (
    <div className={isOpened ? styles.containerFlyer : styles.container}>
      <a href="" onClick={(e) => handleClick(e)}>
        <h3>
          <span>{legalfees.Codigo} </span>
          {legalfees.Classe}
        </h3>
        <p>{legalfees.Subclasse}</p>
        <p>{legalfees.Atividade}</p>
        {legalfees.Valor ? (
          <h2>
            {legalfees.Valor}{" "}
            {legalfees.Porc ? <span>( {legalfees.Porc} )</span> : null}
          </h2>
        ) : null}
      </a>
    </div>
  );
}

export default Card;
