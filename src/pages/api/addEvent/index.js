import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("event-app");

      const body = req.body;

      const result = await db.collection("events").insertOne({
        title: body.title || "Untitled Event",
        location: body.location || "Unknown",
        date: new Date(),
      });

      res.status(200).json({
        message: "✅ Event Added Successfully!",
        insertedId: result.insertedId,
      });
    } catch (error) {
      console.error("Error adding event:", error);
      res.status(500).json({ error: "❌ Failed to add event" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
