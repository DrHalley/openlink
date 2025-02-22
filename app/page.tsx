import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <Navbar />
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          🚀 OpenLink
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Collect your links into one place
        </p>
        <div className="mt-6">
          <Button className="px-6 py-3 text-lg">
            <Link href="/my-links">Start Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
