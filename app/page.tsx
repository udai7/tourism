import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image
          src="/unakoti.jpg"
          alt="Tripura Tourism"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Discover Tripura
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Experience the rich culture, heritage, and natural beauty of Tripura
          </p>
          <div className="flex gap-4">
            <Link href="/explore">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Get Started
              </Button>
            </Link>
            <Link href="/auth/signin">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
