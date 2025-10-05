"use client";
import { useEffect, useState } from "react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [joinedEvents, setJoinedEvents] = useState([]); 
 
  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/getEvents");
        const data = await res.json();

        // Sort: latest date/time first
        const sorted = data.sort(
          (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
        );

        setEvents(sorted);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Handle join event
  const handleJoin = async (id) => {
    
    if (joinedEvents.includes(id)) {
      alert("You already joined this event!");
      return;
    }

    try {
      const res = await fetch("/api/joinEvent", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: id }),
      });

      if (res.ok) {
        setJoinedEvents((prev) => [...prev, id]);
        setEvents((prevEvents) =>
          prevEvents.map((e) =>
            e._id === id ? { ...e, attendeeCount: (e.attendeeCount || 0) + 1 } : e
          )
        );
      } else {
        const { message } = await res.json();
        alert(message);
      }
    } catch (error) {
      console.error("Join event error:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-xl">Loading events...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">All Events</h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No events found. Add one to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={event.image || "https://via.placeholder.com/300x200"}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {event.title}
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">By:</span> {event.name}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">📍 Location:</span> {event.location}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">📅 Date:</span>{" "}
                {new Date(event.dateTime).toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {event.description?.slice(0, 100)}...
              </p>

              <div className="flex items-center justify-between mt-3">
                <p className="text-blue-600 font-semibold">
                  👥 Attendees: {event.attendeeCount || 0}
                </p>
                <button
                  onClick={() => handleJoin(event._id)}
                  className={`px-4 py-2 rounded-lg text-white font-medium transition ${
                    joinedEvents.includes(event._id)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  disabled={joinedEvents.includes(event._id)}
                >
                  {joinedEvents.includes(event._id) ? "Joined" : "Join Event"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
