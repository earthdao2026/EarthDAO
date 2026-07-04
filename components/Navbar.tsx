export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-green-700 bg-black">
      <h1 className="text-2xl font-bold text-green-500">
        🌍 EarthDAO
      </h1>

      <button className="rounded-lg bg-green-600 px-4 py-2 font-medium hover:bg-green-500">
        Join DAO
      </button>
    </nav>
  );
}
