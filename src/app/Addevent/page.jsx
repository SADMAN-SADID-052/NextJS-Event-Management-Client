"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AddEventPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    image: "",
    dateTime: "",
    location: "",
    attendeeCount: 0,
    description: "",
  });

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("You must be logged in to add an event.");
      router.push("/register");
    }
  }, [status, router]);

  // if (status === "loading") {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <p className="text-lg text-gray-600">Checking authentication...</p>
  //     </div>
  //   );
  // }

  // 🔥 Pre-fill "name" field from session
  useEffect(() => {
    if (session?.user?.name) {
      setFormData((prev) => ({ ...prev, name: session.user.name }));
    }
  }, [session]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/addEvent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Event added successfully!");
        setFormData({
          title: "",
          name: session?.user?.name || "",
          image: "",
          dateTime: "",
          location: "",
          attendeeCount: 0,
          description: "",
        });
      } else {
        toast.error(data.message || "❌ Failed to add event");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-purple-500 p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Add New Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-white">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Posted By</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              className="w-full p-2 border bg-gray-100 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Date and Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Adding Event..." : "Add Event"}
          </button>
        </form>
      </div>
    </div>
  );
}
