import React from "react";
import styles from "../../styles/card.module.css";

function Card({ legalfees }) {
  return (
    <div className={styles.container} key={legalfees._id}>
      <h3>
        <span>{legalfees.Codigo} </span>
        {legalfees.Classe}
      </h3>
      <p>{legalfees.Subclasse}</p>
      <p>{legalfees.Atividade}</p>
      {legalfees.Valor ? (
        <h2>
          {legalfees.Valor} <span>( {legalfees.Porc} )</span>
        </h2>
      ) : null}
    </div>
  );
}

export default Card;
