import { connectDB } from "@/lib/connectDB";
import Event from "@/models/Event";
import { getServerSession } from "next-auth";

export async function PATCH(req) {
  await connectDB();

  const session = await getServerSession();
  if (!session) {
    return new Response(
      JSON.stringify({ message: "Unauthorized" }),
      { status: 401 }
    );
  }

  const { eventId } = await req.json();
  const userId = session.user.email; // or user._id

  const event = await Event.findById(eventId);

  if (!event) {
    return new Response("Event not found", { status: 404 });
  }

  // 🔐 Prevent multiple joins
  if (event.attendees.includes(userId)) {
    return new Response(
      JSON.stringify({ message: "Already joined" }),
      { status: 400 }
    );
  }

  event.attendees.push(userId);
  event.attendeeCount = event.attendees.length;

  await event.save();

  return new Response(
    JSON.stringify({
      attendeeCount: event.attendeeCount,
      joined: true,
    }),
    { status: 200 }
  );
}
