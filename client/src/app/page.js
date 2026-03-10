import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <NavBar />
      <main className="mx-auto w-full max-w-5xl px-6 sm:px-10 py-16">
        <div className="rounded-2xl bg-white p-10 shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            Your page layout is clean now. Add your content here.
          </p>
        </div>
      </main>
    </div>
  );
}
