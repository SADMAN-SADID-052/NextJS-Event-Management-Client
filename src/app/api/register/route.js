import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const client = await clientPromise;
    const db = client.db("event-app");

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    });

    return new Response(JSON.stringify({ message: "User registered successfully", id: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error signing up" }), { status: 500 });
  }
}
