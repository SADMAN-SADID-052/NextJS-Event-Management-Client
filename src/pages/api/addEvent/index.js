import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("event-app");

      const {
        title,
        name,
        image,
        dateTime,
        location,
        description,
      } = req.body;

      const result = await db.collection("events").insertOne({
        title: title || "Untitled Event",
        name: name || "Anonymous",
        image: image || "",
        dateTime: dateTime || new Date(),
        location: location || "Unknown",
        description: description || "No description provided",
        attendeeCount: 0,
        createdAt: new Date(),
      });

      res.status(200).json({
        message: "✅ Event added successfully!",
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
