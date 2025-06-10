import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DestinationPage({ params }: { params: { id: string } }) {
  // This would normally come from an API or database
  const destination = {
    id: params.id,
    name: "Neermahal Palace",
    location: "Melaghar, Tripura",
    description:
      "Neermahal, which means 'Water Palace', is a former royal palace built by Maharaja Bir Bikram Kishore Manikya Bahadur of the Kingdom of Tripura in 1930. It is situated in the middle of Rudrasagar Lake and the palace is the largest of its kind in India after the Jal Mahal in Rajasthan.",
    images: ["/neermahal.jpg", "/ujjayanta-palace.jpg", "/heritage-park.jpg"],
    rating: 4.8,
    reviews: 245,
    openingHours: "9:00 AM - 5:00 PM",
    entryFee: "₹50 for Indians, ₹200 for Foreigners",
    activities: ["Boat Ride", "Photography", "Guided Tour"],
    nearbyAttractions: ["Rudrasagar Lake", "Sepahijala Wildlife Sanctuary"],
  }

  return (
    <main className="flex flex-col h-full pb-20">
      {/* Back Button Header */}
      <div className="sticky top-0 z-10 bg-emerald-700 text-white p-4 flex items-center">
        <Link href="/">
          <Button variant="ghost" size="icon" className="text-white mr-2">
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
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </Button>
        </Link>
        <h1 className="text-xl font-bold">{destination.name}</h1>
      </div>

      {/* Image Gallery */}
      <div className="relative h-64 w-full">
        <Image src={destination.images[0] || "/placeholder.svg"} alt={destination.name} fill className="object-cover" />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button size="sm" variant="secondary" className="bg-white/80 backdrop-blur-sm">
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
              className="lucide lucide-image mr-1"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            More Photos
          </Button>
          <Button size="sm" variant="secondary" className="bg-white/80 backdrop-blur-sm">
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
            Map
          </Button>
        </div>
      </div>

      {/* Destination Info */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">{destination.name}</h1>
            <p className="text-gray-500 flex items-center gap-1">
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
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="font-bold">{destination.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({destination.reviews})</span>
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">Book Tour</Button>
          <Button variant="outline" size="icon">
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
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </Button>
          <Button variant="outline" size="icon">
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
              className="lucide lucide-share-2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
            </svg>
          </Button>
        </div>

        <Tabs defaultValue="about" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-4">
            <p className="text-sm text-gray-700">{destination.description}</p>

            <h3 className="font-bold mt-4 mb-2">Nearby Attractions</h3>
            <div className="flex gap-2 flex-wrap">
              {destination.nearbyAttractions.map((attraction) => (
                <Badge key={attraction} variant="outline" className="bg-gray-100">
                  {attraction}
                </Badge>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-sm">Opening Hours</h3>
                <p className="text-sm text-gray-700">{destination.openingHours}</p>
              </div>

              <div>
                <h3 className="font-bold text-sm">Entry Fee</h3>
                <p className="text-sm text-gray-700">{destination.entryFee}</p>
              </div>

              <div>
                <h3 className="font-bold text-sm">Activities</h3>
                <div className="flex gap-2 flex-wrap mt-1">
                  {destination.activities.map((activity) => (
                    <Badge
                      key={activity}
                      variant="outline"
                      className="bg-emerald-50 text-emerald-700 border-emerald-200"
                    >
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-sm">Best Time to Visit</h3>
                <p className="text-sm text-gray-700">October to March</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-4">
            <div className="space-y-4">
              {[1, 2, 3].map((id) => (
                <div key={id} className="border-b pb-3">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div>
                        <p className="font-medium text-sm">User Name</p>
                        <p className="text-xs text-gray-500">June 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-sm">4.{id}</span>
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    Great place to visit! The palace architecture is amazing and the boat ride was enjoyable.
                  </p>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                View All Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
