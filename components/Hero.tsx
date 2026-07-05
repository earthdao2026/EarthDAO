"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-950 to-green-950 text-white">

      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-green-700 bg-green-900/30 px-4 py-2 text-sm text-green-300">
          🌍 Decentralized Environmental Governance
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Build the Future
          <br />
          <span className="text-green-500">
            Together with EarthDAO
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-gray-300 md:text-xl">
          Create environmental projects, connect volunteers,
          raise transparent funding, and empower communities
          through decentralized governance.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/create-project"
            className="rounded-xl bg-green-600 px-8 py-4 text-lg font-bold hover:bg-green-700"
          >
            🌱 Create Project
          </Link>

          <Link
            href="/projects"
            className="rounded-xl border border-green-600 px-8 py-4 text-lg font-bold hover:bg-green-900"
          >
            🌍 Explore Projects
          </Link>

        </div>

        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-zinc-900 p-6">
            <h2 className="text-4xl font-bold text-green-400">
              1+
            </h2>
            <p className="mt-2 text-gray-400">
              Projects
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">
            <h2 className="text-4xl font-bold text-green-400">
              1+
            </h2>
            <p className="mt-2 text-gray-400">
              Members
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">
            <h2 className="text-4xl font-bold text-green-400">
              $0
            </h2>
            <p className="mt-2 text-gray-400">
              Funds Raised
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">
            <h2 className="text-4xl font-bold text-green-400">
              🌎
            </h2>
            <p className="mt-2 text-gray-400">
              Global Impact
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
