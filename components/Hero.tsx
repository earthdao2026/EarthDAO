export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-green-950 px-6 text-center text-white">

      <span className="rounded-full bg-green-600/20 px-4 py-2 text-green-400">
        🌍 Web3 for Planet Earth
      </span>

      <h1 className="mt-8 text-6xl font-extrabold">
        EarthDAO
      </h1>

      <p className="mt-6 max-w-2xl text-xl text-gray-300">
        Empowering communities to restore nature through decentralized governance,
        transparent funding, and collective environmental action.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-green-600 px-8 py-3 font-semibold hover:bg-green-500">
          Join EarthDAO
        </button>

        <button className="rounded-xl border border-green-500 px-8 py-3 hover:bg-green-900">
          Learn More
        </button>
      </div>

    </section>
  );
}
