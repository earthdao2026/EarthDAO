"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const nav = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/projects", label: "Projects", icon: "🌱" },
    { href: "/create-project", label: "Create", icon: "➕" },
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/profile", label: "Profile", icon: "👤" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-black">
      <div className="mx-auto flex max-w-7xl justify-around py-3">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center text-sm ${
              pathname === item.href
                ? "text-green-500"
                : "text-gray-400"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
