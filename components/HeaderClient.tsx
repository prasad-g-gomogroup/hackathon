"use client";
import Link from "next/link";
import Image from "next/image";

type Logo = { url: string; alt?: string; width?: number; height?: number } | null;
type MenuItem = { id: number; label: string; url: string; target?: string; children?: MenuItem[] };

export default function HeaderClient({ logo, menu }: { logo: Logo; menu: MenuItem[] }) {
  return (
    <header className="bg-[#f7f7f3]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          {logo?.url ? (
            <Image src={logo.url} alt={logo.alt ?? "Logo"} width={logo.width ?? 140} height={logo.height ?? 40} priority />
          ) : (
            <span className="font-bold">Site</span>
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[#212517]">
          {menu.map(item => (
            <div key={item.id} className="relative group">
              <Link href={item.url} target={item.target ?? "_self"} className="hover:opacity-80">
                {item.label}
              </Link>
              {item.children && item.children.length > 0 && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow rounded-md min-w-48 p-2">
                  {item.children.map(child => (
                    <Link key={child.id} href={child.url} className="block px-3 py-2 hover:bg-gray-100" target={child.target ?? "_self"}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
