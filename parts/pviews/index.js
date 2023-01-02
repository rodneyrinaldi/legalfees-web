export default function PViews({ visits, xxx, pageProps }) {
  return (
    <>
      {visits} <span>{xxx}</span>
    </>
  );
}

export async function getServerSideProps({ query }) {
  // try {
  //   const client = await clientPromise;
  //   const db = client.db("legalfees");
  //   // const pviews = await db
  //   //   .collection("views")
  //   //   .update({ id: "visits" }, { $set: { vl: 1 } });
  //   //const pviews = await db.collection("views").find({}).toArray();
  //   const pviews = await db
  //     .collection("views")
  //     .updateOne({ id: "visits" }, { $set: { vl: 1 } });
  //   return {
  //     props: {
  //       status: JSON.parse(JSON.stringify(pviews)),
  //     },
  //   };
  // } catch (e) {}
}
