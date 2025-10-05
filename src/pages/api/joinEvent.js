import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { eventId } = req.body;
    const client = await clientPromise;
    const db = client.db("event-app");

    const result = await db.collection("events").updateOne(
      { _id: new ObjectId(eventId) },
      { $inc: { attendeeCount: 1 } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Joined successfully!" });
  } catch (error) {
    console.error("Error joining event:", error);
    res.status(500).json({ message: "Server error" });
  }
}
