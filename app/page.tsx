import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      {/* Impact Stats */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-green-900 bg-zinc-900 p-6 text-center">
            <h3 className="text-4xl font-bold text-green-500">0</h3>
            <p className="mt-2 text-gray-400">Projects</p>
          </div>

          <div className="rounded-2xl border border-green-900 bg-zinc-900 p-6 text-center">
            <h3 className="text-4xl font-bold text-green-500">0</h3>
            <p className="mt-2 text-gray-400">Campaigns</p>
          </div>

          <div className="rounded-2xl border border-green-900 bg-zinc-900 p-6 text-center">
            <h3 className="text-4xl font-bold text-green-500">0</h3>
            <p className="mt-2 text-gray-400">Volunteers</p>
          </div>

          <div className="rounded-2xl border border-green-900 bg-zinc-900 p-6 text-center">
            <h3 className="text-4xl font-bold text-green-500">₹0</h3>
            <p className="mt-2 text-gray-400">Funds Raised</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-green-500">
          Our Mission
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-300">
          EarthDAO is a decentralized platform that connects citizens,
          NGOs, governments, researchers and businesses to protect
          nature, respond to natural disasters and fund verified
          environmental initiatives through transparent crowdfunding,
          community governance and measurable impact.
        </p>
      </section>

      {/* Why EarthDAO */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-green-500">
            Why EarthDAO?
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-center text-lg text-gray-300">
            Climate change, pollution, biodiversity loss and natural
            disasters affect every country. EarthDAO empowers communities
            to create verified projects, raise funds, vote on proposals
            and track every donation with complete transparency.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-4xl font-bold text-green-500">
          What You Can Do
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="text-5xl">🌱</div>

            <h3 className="mt-6 text-2xl font-bold">
              Launch Projects
            </h3>

            <p className="mt-4 text-gray-400">
              Create environmental projects for forests, oceans,
              rivers, biodiversity, clean energy and climate action.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="text-5xl">💰</div>

            <h3 className="mt-6 text-2xl font-bold">
              Crowdfunding
            </h3>

            <p className="mt-4 text-gray-400">
              Raise funds for verified environmental campaigns and
              allow supporters to monitor how every contribution is used.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="text-5xl">🗳️</div>

            <h3 className="mt-6 text-2xl font-bold">
              Community Governance
            </h3>

            <p className="mt-4 text-gray-400">
              Vote on proposals, collaborate with experts, NGOs and
              communities to create lasting environmental impact.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="text-5xl">🚨</div>

            <h3 className="mt-6 text-2xl font-bold">
              Disaster Relief
            </h3>

            <p className="mt-4 text-gray-400">
              Launch emergency campaigns for floods, earthquakes,
              wildfires, cyclones and droughts.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="text-5xl">🤝</div>

            <h3 className="mt-6 text-2xl font-bold">
              Verified NGOs
            </h3>

            <p className="mt-4 text-gray-400">
              Partner with trusted organizations and ensure complete
              transparency through verified project reporting.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="text-5xl">📊</div>

            <h3 className="mt-6 text-2xl font-bold">
              Impact Tracking
            </h3>

            <p className="mt-4 text-gray-400">
              Measure projects with funding history, milestones,
              volunteer participation and environmental outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Disaster Banner */}
      <section className="bg-red-950 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Emergency Disaster Response
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            EarthDAO enables rapid community fundraising and transparent
            coordination during floods, earthquakes, cyclones,
            droughts and other natural disasters.
          </p>
        </div>
      </section>

      {/* Join */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-green-500">
          Join EarthDAO Today
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
          Become part of a global community dedicated to protecting the
          planet. Create projects, support campaigns, vote on proposals,
          collaborate with organizations and help build a transparent
          future for Earth.
        </p>

        <div className="mt-10 flex justify-center">
          <LoginButton />
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-12 text-center">
        <h2 className="text-3xl font-bold text-green-500">
          🌍 EarthDAO
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          Together We Fund. Together We Govern. Together We Protect Earth.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          © 2026 EarthDAO. Empowering communities through transparent
          environmental governance and crowdfunding.
        </p>
      </footer>
    </main>
  );
}
