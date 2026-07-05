"use client";

import { supabase } from "@/lib/supabase";

export default function LoginButton() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
redirectTo: `${window.location.origin}/auth/callback`      },
    });
  };

  return (
    <button
      onClick={login}
      className="bg-green-600 px-6 py-3 rounded-xl text-white font-bold"
    >
      Continue with Google
    </button>
  );
}
