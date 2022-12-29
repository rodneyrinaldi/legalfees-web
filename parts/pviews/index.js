import { useEffect } from "react";

function PViews({ legalfees, pageProps }) {
  useEffect(() => {}, []);

  //  return <>{legalfees.pageviews}</>;
  return <>{"1.001"}</>;
}

export default PViews;

export async function getServerSideProps({ query }) {
  // try {
  //   const client = await clientPromise;
  //   const db = client.db("legalfees");
  //   const legalfees = await db.collection("views").limit(1).toArray();
  //   return {
  //     props: { legalfees: JSON.parse(JSON.stringify(legalfees)) },
  //   };
  // } catch (e) {}
}
