import clientPromise from "../lib/mongodb";

export default function Legalfees({ legalfees }) {
  return (
    <div>
      <h1>Legalfees</h1>
      <p>
        <small>(According to OAB Table)</small>
      </p>
      <ul>
        {legalfees.map((legalfees) => (
          <li>
            <h2>{legalfees.Codigo}</h2>
            <h3>{legalfees.Atividade}</h3>
            <p>{legalfees.Valor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("legalfees");

    const legalfees = await db
      .collection("fees")
      .find({})
      // .sort({ Atividade: -1 })
      .limit(200)
      .toArray();

    return {
      props: { legalfees: JSON.parse(JSON.stringify(legalfees)) },
    };
  } catch (e) {
    console.error(e);
  }
}
