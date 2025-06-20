"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  Info,
  Cog,
  Box,
  Book,
  Briefcase,
  Mail,
  Search,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setMobileMenuOpen(false); // Close mobile menu after search
    }
  };

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/smatech_logo.svg"
              alt="Smatech Logo"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-black font-bold justify-center items-center flex-1">
          <NavLinks />
        </ul>

        {/* Search + Hamburger */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-4 py-1 rounded-full bg-gray-100 text-sm text-black focus:outline-none focus:ring-2 focus:ring-custom-green"
              />
              <Search className="absolute left-3 top-1.5 text-gray-500" size={18} />
            </div>
          </form>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-black font-semibold">
            <NavLinks isMobile />
            <form onSubmit={handleSearch} className="mt-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-100 text-sm text-black focus:outline-none focus:ring-2 focus:ring-custom-green"
                />
                <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
              </div>
            </form>
          </ul>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ isMobile = false }: { isMobile?: boolean }) {
  const linkClass = isMobile
    ? "flex items-center gap-2 text-sm"
    : "flex flex-col items-center text-xs uppercase tracking-tight";

  const dropdownClass = isMobile
    ? "ml-4 mt-1 flex flex-col gap-1"
    : "absolute hidden group-hover:block bg-white shadow-lg mt-2 text-black font-normal";

  return (
    <>
      <li>
        <Link href="/" className={linkClass}>
          <Home size={18} className="text-gray-500" />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/about-us" className={linkClass}>
          <Info size={18} className="text-gray-500" />
          <span>About Us</span>
        </Link>
      </li>

      {/* Services Dropdown */}
      <li className={`relative ${!isMobile ? "group" : ""}`}>
        <div className={linkClass}>
          <Cog size={18} className="text-gray-500" />
          <span>Services</span>
        </div>
        <ul className={dropdownClass}>
          <li>
            <Link href="/services/service1" className="block px-4 py-1 text-xs uppercase">
              Service 1
            </Link>
          </li>
          <li>
            <Link href="/services/service2" className="block px-4 py-1 text-xs uppercase">
              Service 2
            </Link>
          </li>
        </ul>
      </li>

      {/* Products Dropdown */}
      <li className={`relative ${!isMobile ? "group" : ""}`}>
        <div className={linkClass}>
          <Box size={18} className="text-gray-500" />
          <span>Products</span>
        </div>
        <ul className={dropdownClass}>
          <li>
            <Link href="/products/product1" className="block px-4 py-1 text-xs uppercase">
              Product 1
            </Link>
          </li>
          <li>
            <Link href="/products/product2" className="block px-4 py-1 text-xs uppercase">
              Product 2
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/resources" className={linkClass}>
          <Book size={18} className="text-gray-500" />
          <span>Resources</span>
        </Link>
      </li>
      <li>
        <Link href="/carriers" className={linkClass}>
          <Briefcase size={18} className="text-gray-500" />
          <span>Carriers</span>
        </Link>
      </li>
      <li>
        <Link href="/contact-us" className={linkClass}>
          <Mail size={18} className="text-gray-500" />
          <span>Contact</span>
        </Link>
      </li>
    </>
  );
}
