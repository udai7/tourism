import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AdditionalDestinations() {
  const moreDestinations = [
    {
      id: 5,
      name: "Sepahijala Wildlife Sanctuary",
      location: "Bishalgarh",
      image: "/sepahijala.jpeg",
      description: "Home to diverse flora and fauna including clouded leopards",
      tags: ["Wildlife", "Nature"],
    },
    {
      id: 6,
      name: "Tripura Sundari Temple",
      location: "Udaipur",
      image: "/tripura-sundari.jpeg",
      description: "One of the 51 Shakti Peethas in Hindu tradition",
      tags: ["Religious", "Heritage"],
    },
    {
      id: 7,
      name: "Kunjaban Palace",
      location: "Agartala",
      image: "/kunjaban-palace.webp",
      description: "Former residence of the royal family of Tripura",
      tags: ["Historical", "Architecture"],
    },
    {
      id: 8,
      name: "Heritage Park",
      location: "Agartala",
      image: "/heritage-park.jpeg",
      description: "Museum showcasing Tripura's rich cultural heritage",
      tags: ["Museum", "Culture"],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">More Destinations</h2>
        <Link href="/destinations" className="text-emerald-600 text-sm">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {moreDestinations.map((destination) => (
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
