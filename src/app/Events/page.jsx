"use client";
import Image from "next/image";
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
            e._id === id
              ? { ...e, attendeeCount: (e.attendeeCount || 0) + 1 }
              : e
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
    <div className=" relative top-0 transition-all duration-300 ease-out hover:-top-2 min-h-screen bg-gray-200 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">All Events</h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No events found. Add one to get started!
        </p>
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="group bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={event.image || "https://via.placeholder.com/300x200"}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="flex items-center gap-3  py-2">
                <Image
                  src="https://i.pravatar.cc/70"
                  alt={event.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-medium">{event.name}</h4>
                  <p className="text-sm text-gray-400">
                    {new Date(event.dateTime).toLocaleString()}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-500">
                {event.title} 
              </h3>

              <p className="text-gray-700 mb-2">
                <span className="font-medium">Location:</span> {event.location}
              </p>

              <p className="text-gray-600 text-sm mb-3">
                {event.description?.slice(0, 100)}...
              </p>

              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center gap-5">
                  <p className="">👥 {event.attendeeCount || 0}</p>
                  <span>👍 20</span>
                  <span>💬 28</span>
                </div>
                <button
                  onClick={() => handleJoin(event._id)}
                  className={`px-4 py-2 rounded-lg  font-medium transition ${
                    joinedEvents.includes(event._id)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "border-1 border-blue-500 text-gray-900 group-hover:bg-blue-100 group-hover:text-[#3a75f4]"
                  }`}
                  disabled={joinedEvents.includes(event._id)}
                >
                  {joinedEvents.includes(event._id) ? "Joined" : "Join Event →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
