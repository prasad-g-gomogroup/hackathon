"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // optional: for dropdown arrow

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="bg-[#f7f7f3]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <span className="font-bold text-[#212517]">one platform<br />group</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center space-x-6 text-[#212517]">
          <Link href="/product">Product</Link>

          {/* Dropdown Example */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("solutions")}
              className="flex items-center space-x-1"
            >
              <span>Solutions</span>
              <ChevronDown size={14} />
            </button>
            {openMenu === "solutions" && (
              <div className="absolute top-full mt-2 bg-white shadow rounded-md w-40">
                <Link href="/solutions/one" className="block px-4 py-2 hover:bg-gray-100">
                  Solution One
                </Link>
                <Link href="/solutions/two" className="block px-4 py-2 hover:bg-gray-100">
                  Solution Two
                </Link>
              </div>
            )}
          </div>

          <Link href="/cases">Cases</Link>

          <div className="relative">
            <button
              onClick={() => toggleMenu("insights")}
              className="flex items-center space-x-1"
            >
              <span>Insights</span>
              <ChevronDown size={14} />
            </button>
            {openMenu === "insights" && (
              <div className="absolute top-full mt-2 bg-white shadow rounded-md w-40">
                <Link href="/insights/blog" className="block px-4 py-2 hover:bg-gray-100">
                  Blog
                </Link>
                <Link href="/insights/news" className="block px-4 py-2 hover:bg-gray-100">
                  News
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <Link
            href="/login"
            className="rounded-full bg-[#c8c6b8] text-[#212517] px-5 py-2"
          >
            Log In
          </Link>
          <Link
            href="/get-started"
            className="rounded-full bg-[#3c7d3c] text-white px-5 py-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
