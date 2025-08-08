import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen grid place-items-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold">Leanmodels MVP</h1>
        <p className="text-gray-600">Start with a demo project.</p>
        <Link href="/project/demo" className="inline-block rounded bg-black text-white px-4 py-2 text-sm">Open Project</Link>
      </div>
    </main>
  );
}
