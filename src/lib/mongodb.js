import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
  throw new Error("⚠️ Please add NEXT_PUBLIC_MONGODB_URI to your .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
  clientPromise = client.connect();
}

export default clientPromise;
