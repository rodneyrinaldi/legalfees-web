import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("legalfees");

    const legalfees = await db.collection("views").find({}).toArray();

    res.json(legalfees);
  } catch (e) {
    console.error(e);
  }
};
