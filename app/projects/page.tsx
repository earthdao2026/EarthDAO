"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  country: string;
  state: string;
  city: string;
  funding_goal: number;
  current_funding: number;
  status: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProjects(data);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <h1 className="mb-2 text-5xl font-bold text-green-500">
          🌍 Community Projects
        </h1>

        <p className="mb-10 text-gray-400">
          Discover environmental projects from the EarthDAO community.
        </p>

        {loading && (
          <p className="text-gray-400">Loading projects...</p>
        )}

        {!loading && projects.length === 0 && (
          <p className="text-gray-400">
            No projects found.
          </p>
        )}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:border-green-500 hover:shadow-2xl hover:shadow-green-900/20"
            >

              {project.image_url ? (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />
              ) : (
                <div className="flex h-56 items-center justify-center bg-zinc-800 text-7xl">
                  🌱
                </div>
              )}

              <div className="p-6">

                <span className="rounded-full bg-green-900 px-3 py-1 text-xs text-green-300">
                  {project.category || "Environment"}
                </span>

                <h2 className="mt-4 text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-500">

                  <p>
                    📍 {project.city || "Unknown"}{" "}
                    {project.state || ""}
                  </p>

                  <p>
                    💰 Goal: ${project.funding_goal || 0}
                  </p>

                  <p>
                    📌 {project.status || "Pending"}
                  </p>

                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-700">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: "15%" }}
                  />
                </div>

                <div className="mt-6 rounded-xl bg-green-600 py-3 text-center font-bold">
                  View Project →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}
