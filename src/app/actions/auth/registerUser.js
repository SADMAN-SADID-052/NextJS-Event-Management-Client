"use server";

export async function registerUser({ name, email, password }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Register user error:", error);
    return { success: false, error: "Something went wrong" };
  }
}
