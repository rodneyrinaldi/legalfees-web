import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("legalfees");

    const legalfees = await db
      .collection("fees")
      .find({})
      // .sort({ Atividade: -1 })
      // .limit(10)
      .toArray();

    res.json(legalfees);
  } catch (e) {
    console.error(e);
  }
};
