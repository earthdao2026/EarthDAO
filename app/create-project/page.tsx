"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CreateProject() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  async function createProject(e: React.FormEvent) {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first");
      return;
    }

    let imageUrl = "";

    if (image) {
      const fileName = `${Date.now()}-${image.name}`;

      const { error: uploadError } = await supabase.storage
        .from("project-images")
        .upload(fileName, image);

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      const { data } = supabase.storage
        .from("project-images")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;
    }

    const { error } = await supabase.from("projects").insert({
      user_id: user.id,
      title,
      category,
      description,
      image_url: imageUrl,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Project created successfully!");

    setTitle("");
    setCategory("");
    setDescription("");
    setImage(null);
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-green-500 mb-8">
        🌱 Create Project
      </h1>

      <form onSubmit={createProject} className="space-y-4 max-w-xl">

        <input
          className="w-full p-3 rounded bg-zinc-900"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="w-full p-3 rounded bg-zinc-900"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <textarea
          className="w-full p-3 rounded bg-zinc-900"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage(e.target.files ? e.target.files[0] : null)
          }
          className="w-full"
        />

        <button
          type="submit"
          className="bg-green-600 w-full p-3 rounded-xl hover:bg-green-500"
        >
          🚀 Create Project
        </button>

      </form>
    </main>
  );
}
