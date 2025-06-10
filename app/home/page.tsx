import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import BottomNavigation from "@/components/bottom-navigation";
import { SearchBar } from "@/components/search-bar";
import { FeaturedDestinations } from "@/components/featured-destinations";
import { PopularPackages } from "@/components/popular-packages";
import { UpcomingEvents } from "@/components/upcoming-events";
import { AdditionalDestinations } from "@/components/additional-destinations";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      {/* App Header */}
      <div className="sticky top-0 z-10 bg-emerald-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Tripura Tourism</h1>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bell"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <Tabs defaultValue="explore" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="explore">Explore</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <TabsContent value="explore" className="space-y-4">
            <FeaturedDestinations />
            <AdditionalDestinations />
          </TabsContent>
          <TabsContent value="packages" className="space-y-4">
            <PopularPackages />
          </TabsContent>
          <TabsContent value="events" className="space-y-4">
            <UpcomingEvents />
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </main>
  );
}
