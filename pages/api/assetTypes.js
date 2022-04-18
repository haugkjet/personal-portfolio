import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const uri = process.env.DATABASE_URL;

  const client = new MongoClient(uri);
  let documents = [];

  try {
    // Connect to the MongoDB cluster
    await client.connect().then(async (client) => {
      const db = client.db();

      documents = await client.db().collection("assetTypes").find().toArray();
    });

    // Make the appropriate DB calls
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
    res.status(200).json({
      assetTypes: documents,
    });
  }
}
