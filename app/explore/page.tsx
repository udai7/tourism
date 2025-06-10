import BottomNavigation from "@/components/bottom-navigation";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <main className="flex flex-col h-full">
      {/* App Header */}
      <div className="sticky top-0 z-10 bg-emerald-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Explore Tripura</h1>
        </div>
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
            className="lucide lucide-filter"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
        </Button>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Map Preview */}
      <div className="relative h-48 w-full">
        <Image
          src="/heritage-park.jpeg"
          alt="Map of Tripura"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4">
          <Button className="bg-white text-emerald-700 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map mr-1"
            >
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
              <line x1="9" x2="9" y1="3" y2="18" />
              <line x1="15" x2="15" y1="6" y2="21" />
            </svg>
            Full Map
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="p-4">
        <Tabs defaultValue="attractions" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="attractions">Attractions</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="attractions" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  name: "Neermahal Palace",
                  location: "Melaghar",
                  image: "/neermahal.jpg",
                },
                {
                  id: 2,
                  name: "Ujjayanta Palace",
                  location: "Agartala",
                  image: "/ujjayanta-palace.png",
                },
                {
                  id: 3,
                  name: "Unakoti",
                  location: "Kailashahar",
                  image: "/unakoti.jpg",
                },
                {
                  id: 4,
                  name: "Sepahijala Wildlife",
                  location: "Bishalgarh",
                  image: "/sepahijala.jpeg",
                },
              ].map((attraction) => (
                <Link
                  key={attraction.id}
                  href={`/destination/${attraction.id}`}
                >
                  <Card className="overflow-hidden">
                    <div className="relative h-24 w-full">
                      <Image
                        src={attraction.image || "/placeholder.svg"}
                        alt={attraction.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-2">
                      <h3 className="font-medium text-sm">{attraction.name}</h3>
                      <p className="text-xs text-gray-500">
                        {attraction.location}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hotels" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  name: "Ginger Hotel",
                  price: "₹2,500",
                  image: "/ginger.jpg",
                },
                {
                  id: 2,
                  name: "Hotel Sonar Tori",
                  price: "₹3,200",
                  image: "/sonar-tori.jpg",
                },
                {
                  id: 3,
                  name: "Tripura Castle",
                  price: "₹4,500",
                  image: "/tripura-castle.jpg",
                },
                {
                  id: 4,
                  name: "City Centre Hotel",
                  price: "₹2,800",
                  image: "/city-centre.jpeg",
                },
              ].map((hotel) => (
                <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
                  <Card className="overflow-hidden">
                    <div className="relative h-24 w-full">
                      <Image
                        src={hotel.image || "/placeholder.svg"}
                        alt={hotel.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-2">
                      <h3 className="font-medium text-sm">{hotel.name}</h3>
                      <p className="text-xs text-gray-500">
                        From {hotel.price}/night
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  name: "Tripuri Cuisine",
                  cuisine: "Traditional",
                  image: "/tripura-cuisine.webp",
                },
                {
                  id: 2,
                  name: "Bengali Delights",
                  cuisine: "Bengali",
                  image: "/Bengali-Cuisine.jpg",
                },
                {
                  id: 3,
                  name: "Mui Borok Food",
                  cuisine: "Tribal",
                  image: "/Mui Borok Food.jpeg",
                },
                {
                  id: 4,
                  name: "Agartala Sweets",
                  cuisine: "Desserts",
                  image: "Agartala Sweets.webp",
                },
              ].map((restaurant) => (
                <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`}>
                  <Card className="overflow-hidden">
                    <div className="relative h-24 w-full">
                      <Image
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-2">
                      <h3 className="font-medium text-sm">{restaurant.name}</h3>
                      <p className="text-xs text-gray-500">
                        {restaurant.cuisine}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  name: "Boat Ride",
                  price: "₹500",
                  image: "boat-ride.avif",
                },
                {
                  id: 2,
                  name: "Orange Picking",
                  price: "₹800",
                  image: "/orange-festival.jpg",
                },
                {
                  id: 3,
                  name: "Wildlife Safari",
                  price: "₹1,200",
                  image: "/safari.jpg",
                },
                {
                  id: 4,
                  name: "Cultural Tour",
                  price: "₹1,500",
                  image: "/tribal-festival.jpg",
                },
              ].map((activity) => (
                <Link key={activity.id} href={`/activity/${activity.id}`}>
                  <Card className="overflow-hidden">
                    <div className="relative h-24 w-full">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-2">
                      <h3 className="font-medium text-sm">{activity.name}</h3>
                      <p className="text-xs text-gray-500">
                        From {activity.price}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </main>
  );
}
