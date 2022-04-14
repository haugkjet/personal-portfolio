import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const uri = "DB";

  const client = new MongoClient(uri);
  let documents = [];

  try {
    // Connect to the MongoDB cluster
    await client.connect().then(async (client) => {
      const db = client.db();
      console.log(db.databaseName);

      documents = await client
        .db()
        .collection("assetLocations")
        .find()
        .toArray()
        .then(console.log(documents));

      documents[0]._id = documents[0]._id.toString();
      documents[1]._id = documents[1]._id.toString();
      documents[2]._id = documents[2]._id.toString();
      documents[3]._id = documents[3]._id.toString();

      console.log(documents);
    });

    // Make the appropriate DB calls
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
    res.status(200).json({
      assetLocations: [{ assetLocations: documents }],
    });
  }
}
