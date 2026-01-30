"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EventsPage() {

    const themeMode = useSelector((state) => state.themeToggle.mode);
    const isDark = themeMode === "dark";
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [joinedEvents, setJoinedEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/getEvents");
        const data = await res.json();

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

  const handleJoin = async (id) => {
    if (joinedEvents.includes(id)) return;

    try {
      const res = await fetch("/api/joinEvent", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: id }),
      });

      if (res.ok) {
        setJoinedEvents((prev) => [...prev, id]);
        setEvents((prev) =>
          prev.map((e) =>
            e._id === id
              ? { ...e, attendeeCount: (e.attendeeCount || 0) + 1 }
              : e
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center h-screen ${
        isDark ? "bg-black" : "bg-gray-50"
      } `}>
        <p className="text-gray-700 dark:text-gray-300 text-xl">
          Loading events...
        </p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-10 px-6 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}>
      <h2 className={`text-3xl font-bold text-center mb-8 ${isDark ? "text-gray-100" : "text-gray-900"}`}>
        All Events
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No events found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            const joined = joinedEvents.includes(event._id);

            return (
              <div
                key={event._id}
                className="group bg-white dark:bg-gray-800 p-5 rounded-xl 
                shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={event.image || "https://via.placeholder.com/300x200"}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <div className="flex items-center gap-3 py-2">
                  <Image
                    src="https://i.pravatar.cc/70"
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">
                      {event.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {new Date(event.dateTime).toLocaleString()}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 
                group-hover:text-blue-500 dark:group-hover:text-blue-400">
                  {event.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-medium">Location:</span> {event.location}
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {event.description?.slice(0, 100)}...
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-gray-700 dark:text-gray-300">
                    <span>👥 {event.attendeeCount || 0}</span>
                    <span>👍 20</span>
                    <span>💬 28</span>
                  </div>

                  <button
                    onClick={() => handleJoin(event._id)}
                    disabled={joined}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      joined
                        ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                        : "border border-blue-500 text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-900/40"
                    }`}
                  >
                    {joined ? "Joined" : "Join Event →"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
