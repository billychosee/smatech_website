"use client";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ email: "", message: "" });
  };

  return (
    <footer 
      className="relative px-6 py-12 text-white bg-gray-100"
      style={{
        backgroundImage: "url('/your-background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0"><img
            src="/abstract-plexus-blue-geometrical-shapes.jpg"
            alt="Smatech Logo"
            className="w-auto h-full md:w-full md:h-full"
          /></div>
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Logo centered above content */}
        <div className="flex justify-center mb-10">
          <img
            src="/Smatech_logo.svg"
            alt="Smatech Logo"
            className="h-10 w-52"
          />
        </div>

        <div className="grid items-start grid-cols-1 gap-10 md:grid-cols-3">
          {/* Left: Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-xl font-bold">Our Company</h2>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Center: Contact Info */}
          <div className="text-center">
            <h2 className="mb-4 text-xl font-bold">Contact Info</h2>
            <p className="mb-1">Call: +27 10 786 0259</p>
            <p className="mb-1">Call: +263 78 956 6427</p>
            <p className="mb-1">Email: info@smatech.com</p>
            <p>Address: Your Company Address</p>
          </div>

          {/* Right: Contact Form */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="mb-4 text-xl font-bold">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#8DC440] text-white px-5 py-2 rounded hover:bg-[#76a532] transition cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 mt-10 text-sm text-center text-white border-t border-gray-300">
          © {new Date().getFullYear()} Smatech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}