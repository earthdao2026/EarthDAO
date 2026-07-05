"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <main className="min-h-screen bg-black text-white min-h-screen p-6">

      <h1 className="text-4xl font-bold text-green-500">
        🌍 EarthDAO Dashboard
      </h1>

      <p className="mt-3 text-gray-300">
        Welcome to EarthDAO.
      </p>

      <div className="mt-10 grid gap-4">

        <Link
          href="/create-project"
          className="bg-green-600 p-4 rounded-xl text-center font-bold hover:bg-green-700"
        >
          🌱 Create Project
        </Link>

        <Link
          href="/projects"
          className="bg-blue-600 p-4 rounded-xl text-center font-bold hover:bg-blue-700"
        >
          🌍 Community Projects
        </Link>

        <Link
          href="/profile"
          className="bg-purple-600 p-4 rounded-xl text-center font-bold hover:bg-purple-700"
        >
          👤 My Profile
        </Link>

        <button
          onClick={logout}
          className="bg-red-600 p-4 rounded-xl font-bold hover:bg-red-700"
        >
          🚪 Logout
        </button>

      </div>
    </main>
  );
}




