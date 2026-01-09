// pages/contact.js
"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.eventType) newErrors.eventType = "Event type is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Form submitted:", formData);
      setSubmitMessage("✅ Thank you! We’ll get back to you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    } catch {
      setSubmitMessage("❌ An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Contact Us - EventSync Solutions</title>
        <meta
          name="description"
          content="Contact EventSync Solutions for your event management needs."
        />
      </Head>

      {/* Header */}
      <header className="relative  text-white py-20 overflow-hidden"  style={{
              backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(55, 65, 81, 0.8)), url("https://res.cloudinary.com/dloasaxt1/image/upload/v1758538560/7472e3205063d5e8003bca47d4c4b781_blgerc.jpg")`,
            }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Let's create memorable events together ✨
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-100">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {[
              { id: "name", label: "Full Name", type: "text" },
              { id: "email", label: "Email Address", type: "email" },
              { id: "phone", label: "Phone Number", type: "tel" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border ${
                    errors[id] ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                />
                {errors[id] && (
                  <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
                )}
              </div>
            ))}

            {/* Event Type */}
            <div>
              <label
                htmlFor="eventType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.eventType ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              >
                <option value="">Select an event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="conference">Conference</option>
                <option value="other">Other</option>
              </select>
              {errors.eventType && (
                <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 mt-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <p
                className={`mt-4 text-center font-medium ${
                  submitMessage.includes("error")
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Contact Details</h2>
            <p className="text-blue-100 mb-6">
              We're here to help you plan your perfect event. Reach out via any
              method below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-200" />
                <p>info@eventsyncsolutions.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-200" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-200" />
                <p>123 Event Street, Suite 100, City, Country</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-200" />
                <div>
                  <p>Mon–Fri: 9 AM – 6 PM</p>
                  <p>Sat: 10 AM – 4 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Prefer talking directly?
            </h3>
            <p className="text-gray-600">
              Schedule a quick consultation call and let’s discuss your event
              goals!
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg transition">
              Schedule a Call
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="text-center text-sm">
          © {new Date().getFullYear()} EventSync Solutions — All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
