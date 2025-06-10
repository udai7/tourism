import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FeaturedDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Neermahal Palace",
      location: "Melaghar",
      image: "/neermahal.jpg",
      description: "The only lake palace in Eastern India",
      tags: ["Historical", "Palace"],
    },
    {
      id: 2,
      name: "Ujjayanta Palace",
      location: "Agartala",
      image: "/ujjayanta-palace.png",
      description: "Former royal palace now housing a museum",
      tags: ["Historical", "Museum"],
    },
    {
      id: 3,
      name: "Unakoti",
      location: "Kailashahar",
      image: "/unakoti.jpg",
      description: "Ancient rock carvings and stone images",
      tags: ["Heritage", "Religious"],
    },
    {
      id: 4,
      name: "Jampui Hills",
      location: "North Tripura",
      image: "/jampui-hills.webp",
      description: "Known for orange orchards and scenic beauty",
      tags: ["Nature", "Scenic"],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Featured Destinations</h2>
        <Link href="/destinations" className="text-emerald-600 text-sm">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {destinations.map((destination) => (
          <Link key={destination.id} href={`/destination/${destination.id}`}>
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{destination.name}</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {destination.location}
                    </p>
                    <p className="text-sm mt-1">{destination.description}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  {destination.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-emerald-50 text-emerald-700 border-emerald-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
