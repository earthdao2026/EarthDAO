"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) {
      setFullName(data.full_name || "");
      setBio(data.bio || "");
      setCountry(data.country || "");
      setWebsite(data.website || "");
    }

    setLoading(false);
  }

  async function saveProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        full_name: fullName,
        bio,
        country,
        website,
      });

    if (error) {
  console.log(error);
  alert(JSON.stringify(error));
} else {
  alert("✅ Profile saved successfully!");
}
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="mx-auto max-w-2xl">

        <h1 className="mb-8 text-5xl font-bold text-green-500">
          👤 My Profile
        </h1>

        <div className="space-y-5">

          <input
            className="w-full rounded-xl bg-zinc-900 p-4"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <textarea
            className="w-full rounded-xl bg-zinc-900 p-4"
            placeholder="Bio"
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <input
            className="w-full rounded-xl bg-zinc-900 p-4"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <input
            className="w-full rounded-xl bg-zinc-900 p-4"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <button
            onClick={saveProfile}
            className="w-full rounded-xl bg-green-600 p-4 text-lg font-bold hover:bg-green-700"
          >
            💾 Save Profile
          </button>

        </div>
      </div>
    </main>
  );
}
