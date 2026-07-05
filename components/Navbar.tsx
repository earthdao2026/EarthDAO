"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-green-900 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-3xl font-extrabold text-green-500"
        >
          🌍 EarthDAO
        </Link>

        <div className="hidden gap-8 text-gray-300 md:flex">

          <Link href="/">
            Home
          </Link>

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/create-project">
            Create
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

        </div>

        <Link
          href="/dashboard"
          className="rounded-xl bg-green-600 px-5 py-2 font-bold hover:bg-green-700"
        >
          Launch App
        </Link>

      </div>
    </nav>
  );
}
