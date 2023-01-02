import clientPromise from "../lib/mongodb";

export default function Test({ sequence }) {
  const number = sequence.toString().padStart(6, "0");
  const counter = [number.slice(0, 3), ".", number.slice(3)].join("");

  return <> {sequence}</>;
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("legalfees");
  const data = await db
    .collection("views")
    .findOneAndUpdate({ ID: "visits" }, { $inc: { VL: 1 } });

  const { sequence } = await db.collection("views").findOne({ ID: "visits" });

  console.log(sequence);

  return {
    props: {
      sequence: "xx" + sequence,
    },
  };
}
