// components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-visible bg-[#2B351B] text-white pt-20 pb-[80px] grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
            <div className="pointer-events-none absolute left-6 right-auto top-[-70px] z-20 sm:left-10 md:left-16">
                <div className="relative z-50 pointer-events-auto w-[320px] rounded-xl bg-[#558C4B] p-5 shadow-lg sm:w-[360px] md:w-[420px] md:p-7">
                    <div className="flex items-center gap-3">
                        <img
                        src="/holid-assets/head-logo.svg"
                        alt="One Platform Group"
                        className="h-6 w-auto invert"
                        />
                    </div>

                    <p className="mt-4 text-sm leading-6 text-white/95">
                        We invite you to explore a world where technology meets innovation, and adtech
                        solutions drive transformative growth for publishers.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-5 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2e3a25] shadow-sm hover:opacity-90"
                    >
                        Book a demo
                    </Link>
                </div>
            </div>
        </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {/* Contact Details */}
                <div>
                    <h3 className="text-lg font-medium">Contact Details</h3>
                    <div className="mt-5 space-y-2 text-sm text-white/85">
                        <p>Holid AB United Spaces</p>
                        <p>Götgatan 22a, 118 46 Stockholm</p>
                        <p className="mt-3">+46 (0)20-89 92 92</p>
                        <Link href="/contact" className="underline underline-offset-4 hover:opacity-90">
                            Contact
                        </Link>
                    </div>

                    <div className="mt-8">
                        <img
                            src="/holid-assets/head-logo.svg"
                            alt="One Platform Group"
                            className="h-6 w-auto invert"
                        />
                        <div className="mt-5 flex items-center gap-4">
                            <Social icon="linkedin" href="#" />
                            <Social icon="facebook" href="#" />
                            <Social icon="instagram" href="#" />
                            <Social icon="x" href="#" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-medium">Solutions</h3>
                    <ul className="mt-5 space-y-3 text-sm text-white/85">
                        <li><Link href="#" className="hover:opacity-90">High impact ads</Link></li>
                        <li><Link href="#" className="hover:opacity-90">Header bidding</Link></li>
                        <li><Link href="#" className="hover:opacity-90">Display ads</Link></li>
                        <li><Link href="#" className="hover:opacity-90">Video ads</Link></li>
                        <li><Link href="#" className="hover:opacity-90">Native ads</Link></li>
                        <li><Link href="#" className="hover:opacity-90">Powerful sales</Link></li>
                        <li><Link href="#" className="hover:opacity-90">Reporting</Link></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-medium">Quick Links</h3>
                    <ul className="mt-5 space-y-3 text-sm text-white/85">
                    <li><Link href="#" className="hover:opacity-90">Solutions</Link></li>
                    <li><Link href="#" className="hover:opacity-90">Cases</Link></li>
                    <li><Link href="#" className="hover:opacity-90">Insights</Link></li>
                    </ul>
                </div>
                {/* Customers */}
                <div>
                    <h3 className="text-lg font-medium">Customers</h3>
                    <ul className="mt-5 space-y-3 text-sm text-white/85">
                    <li><Link href="#" className="hover:opacity-90">Publishers</Link></li>
                    <li><Link href="#" className="hover:opacity-90">Media houses</Link></li>
                    <li><Link href="#" className="hover:opacity-90">Media agencies and advertisers</Link></li>
                    </ul>
                </div>
                {/* Decorative shapes bottom-right */}
                <DecorShapes />
            </div>

      
    </footer>
  );
}

/* ---------- small helpers ---------- */

function Social({ icon, href }: { icon: "linkedin" | "facebook" | "instagram" | "x"; href: string }) {
  return (
    <Link
      href={href}
      aria-label={icon}
      className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
    >
      {icon === "linkedin" && (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05c.53-1 1.8-2.2 3.7-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8V8z" />
        </svg>
      )}
      {icon === "facebook" && (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.99 22 12" />
        </svg>
      )}
      {icon === "instagram" && (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.42.4.61.22 1.05.48 1.51.94.46.46.72.9.94 1.51.16.45.346 1.25.4 2.42.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.4 2.42a3.81 3.81 0 0 1-.94 1.51 3.81 3.81 0 0 1-1.51.94c-.45.16-1.25.346-2.42.4-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.42-.4a3.81 3.81 0 0 1-1.51-.94 3.81 3.81 0 0 1-.94-1.51c-.16-.45-.346-1.25-.4-2.42C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.97.4-2.42a3.81 3.81 0 0 1 .94-1.51 3.81 3.81 0 0 1 1.51-.94c.45-.16 1.25-.346 2.42-.4C8.416 2.212 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.012-4.76.07-.98.046-1.51.21-1.86.35-.47.18-.8.39-1.15.74-.35.35-.56.68-.74 1.15-.14.35-.304.88-.35 1.86-.058 1.24-.07 1.61-.07 4.76s.012 3.52.07 4.76c.046.98.21 1.51.35 1.86.18.47.39.8.74 1.15.35.35.68.56 1.15.74.35.14.88.304 1.86.35 1.24.058 1.61.07 4.76.07s3.52-.012 4.76-.07c.98-.046 1.51-.21 1.86-.35.47-.18.8-.39 1.15-.74.35-.35.56-.68.74-1.15.14-.35.304-.88.35-1.86.058-1.24.07-1.61.07-4.76s-.012-3.52-.07-4.76c-.046-.98-.21-1.51-.35-1.86a2 2 0 0 0-.74-1.15c-.35-.35-.68-.56-1.15-.74-.35-.14-.88-.304-1.86-.35-1.24-.058-1.61-.07-4.76-.07Zm0 3.3a6.7 6.7 0 1 1 0 13.4 6.7 6.7 0 0 1 0-13.4Zm0 1.8a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm5.65-2.21a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" />
        </svg>
      )}
      {icon === "x" && (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M18.244 2H21l-6.56 7.5L22 22h-6.844l-4.3-5.557L5.9 22H3.143l7.02-8.027L2 2h6.957l3.91 5.205L18.244 2Zm-1.2 18h1.585L8.06 4H6.43l10.614 16Z" />
        </svg>
      )}
    </Link>
  );
}

function DecorShapes() {
  return (
    <div className="pointer-events-none absolute mt-5 bottom-0 right-0 h-[180px] w-[420px] sm:h-[220px] sm:w-[520px]" aria-hidden>
      {/* mosaic blocks */}
      <div className="absolute bottom-0 right-0 grid grid-cols-4 gap-2 p-3 sm:gap-3 sm:p-4">
        {/* row 1 */}
        <div className="h-16 w-16 rounded-tl-[999px] bg-[#efe7c9]" />
        <div className="h-16 w-16 rounded-full bg-[#4f8a4f]" />
        <div className="h-16 w-16 rounded-t-[36px] bg-[#b9b7a7]" />
        <div className="h-16 w-16 rounded-br-[999px] bg-[#efe7c9]" />
        {/* row 2 */}
        <div className="h-16 w-16 rounded-full bg-[#e9d157]" />
        <div className="h-16 w-16 rounded-bl-[999px] bg-[#2f3b22]" />
        <div className="h-16 w-16 rounded-tr-[999px] bg-[#4f8a4f]" />
        <div className="h-16 w-16 rounded-full bg-[#e9d157]" />
      </div>
    </div>
  );
}
