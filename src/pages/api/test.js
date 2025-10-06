// import clientPromise from "@/lib/mongodb";

import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise; 
    const db = client.db("event-app"); 

    const collections = await db.listCollections().toArray();

    res.status(200).json({
      message: "✅ MongoDB Connected Successfully!",
      collections,
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    res.status(500).json({ message: "❌ Connection Failed", error });
  }
}
