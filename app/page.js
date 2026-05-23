export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">
        Nicolae Stanescu
      </h1>

      <p className="text-xl text-gray-300 mb-8">
        Computer Science Student & Developer
      </p>

      <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
        View Projects
      </button>
    </main>
  );
}