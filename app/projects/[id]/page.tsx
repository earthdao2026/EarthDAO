"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();

  const [project, setProject] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [donations, setDonations] = useState<any[]>([]);
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(100);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!id) return;
    loadProject();
    loadComments();
    loadDonations();
  }, [id]);

  async function loadProject() {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    setProject(data);
  }

  async function loadComments() {
    const { data } = await supabase
      .from("comments")
      .select("*")
      .eq("project_id", id)
      .order("created_at", { ascending: false });

    setComments(data || []);
  }

  async function loadDonations() {
    const { data } = await supabase
      .from("donations")
      .select("*")
      .eq("project_id", id)
      .order("created_at", { ascending: false });

    setDonations(data || []);
  }

  async function donate() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first");
      return;
    }

    const { error } = await supabase.from("donations").insert({
      project_id: id,
      user_id: user.id,
      amount,
      message,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("🎉 Donation recorded!");

    setMessage("");
    loadDonations();
  }

  async function postComment() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first");
      return;
    }

    const { error } = await supabase.from("comments").insert({
      project_id: id,
      user_id: user.id,
      comment,
    });

    if (error) {
      alert(error.message);
      return;
    }

    setComment("");
    loadComments();
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  const totalRaised = donations.reduce(
    (sum, d) => sum + Number(d.amount),
    0
  );

  return (
    <main className="min-h-screen bg-black text-white">

      {project.image_url && (
        <img
          src={project.image_url}
          className="w-full h-80 object-cover"
          alt={project.title}
        />
      )}

      <div className="mx-auto max-w-5xl p-6">

        <h1 className="text-5xl font-bold text-green-500">
          {project.title}
        </h1>

        <p className="mt-3 text-green-300">
          {project.category}
        </p>

        <p className="mt-8 text-gray-300">
          {project.description}
        </p>

        <div className="mt-10 rounded-xl bg-zinc-900 p-6">

          <h2 className="text-2xl font-bold">
            ❤️ Support this Project
          </h2>

          <p className="mt-4">
            Total Raised:
            <span className="text-green-400 font-bold">
              {" "}₹{totalRaised}
            </span>
          </p>

          <p>
            Supporters:
            <span className="text-green-400 font-bold">
              {" "}{donations.length}
            </span>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <button
              onClick={() => setAmount(100)}
              className="rounded-lg bg-green-600 px-4 py-2"
            >
              ₹100
            </button>

            <button
              onClick={() => setAmount(500)}
              className="rounded-lg bg-green-600 px-4 py-2"
            >
              ₹500
            </button>

            <button
              onClick={() => setAmount(1000)}
              className="rounded-lg bg-green-600 px-4 py-2"
            >
              ₹1000
            </button>

          </div>

          <input
            type="number"
            className="mt-5 w-full rounded-lg bg-black p-3"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <textarea
            className="mt-4 w-full rounded-lg bg-black p-3"
            placeholder="Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={donate}
            className="mt-5 w-full rounded-xl bg-green-600 p-4 text-xl font-bold"
          >
            Donate
          </button>

        </div>

        <div className="mt-10 rounded-xl bg-zinc-900 p-6">

          <h2 className="text-2xl font-bold mb-4">
            Recent Donations
          </h2>

          {donations.length === 0 ? (
            <p>No donations yet.</p>
          ) : (
            donations.map((d) => (
              <div
                key={d.id}
                className="border-b border-zinc-700 py-3"
              >
                <p>₹{d.amount}</p>
                <p className="text-sm text-gray-400">
                  {d.message}
                </p>
              </div>
            ))
          )}

        </div>

        <div className="mt-10 rounded-xl bg-zinc-900 p-6">

          <h2 className="text-2xl font-bold">
            💬 Comments
          </h2>

          <textarea
            className="mt-4 w-full rounded-lg bg-black p-3"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            onClick={postComment}
            className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-bold"
          >
            Post Comment
          </button>

          <div className="mt-8 space-y-4">

            {comments.map((c) => (
              <div
                key={c.id}
                className="rounded-lg bg-black p-4"
              >
                {c.comment}
              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}
