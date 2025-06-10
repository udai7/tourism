import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PopularPackages() {
  const packages = [
    {
      id: 1,
      name: "Tripura Heritage Tour",
      duration: "3 Days / 2 Nights",
      price: "₹12,999",
      image: "/neermahal.jpg",
      description: "Explore the rich cultural heritage of Tripura",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Adventure in Jampui Hills",
      duration: "4 Days / 3 Nights",
      price: "₹15,999",
      image: "/jampui-hills.webp",
      description: "Trekking and camping in the beautiful hills",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Spiritual Tripura",
      duration: "2 Days / 1 Night",
      price: "₹8,999",
      image: "/spiritual.jpg",
      description: "Visit the sacred temples and religious sites",
      rating: 4.7,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Popular Packages</h2>
        <Link href="/packages" className="text-emerald-600 text-sm">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {packages.map((pkg) => (
          <Link key={pkg.id} href={`/package/${pkg.id}`}>
            <Card className="overflow-hidden">
              <div className="flex">
                <div className="relative h-32 w-32 flex-shrink-0">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                </div>
                <CardContent className="p-3 flex-1">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-bold">{pkg.name}</h3>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">★ {pkg.rating}</Badge>
                    </div>
                    <p className="text-gray-500 text-xs">{pkg.duration}</p>
                    <p className="text-xs mt-1">{pkg.description}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <p className="font-bold text-emerald-700">{pkg.price}</p>
                      <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Book Now</Badge>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
