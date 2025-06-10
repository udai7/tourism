import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function UpcomingEvents() {
  const events = [
    {
      id: 1,
      name: "Tripura Tribal Festival",
      date: "June 15-18, 2025",
      location: "Agartala",
      image: "/tribal-festival.jpg",
      description: "Experience the vibrant tribal culture of Tripura",
    },
    {
      id: 2,
      name: "Orange Festival",
      date: "November 10-12, 2025",
      location: "Jampui Hills",
      image: "/orange-festival.jpg",
      description: "Annual celebration of the orange harvest season",
    },
    {
      id: 3,
      name: "Garia Puja",
      date: "April 7-9, 2026",
      location: "Various locations",
      image: "/garia-festival.jpg",
      description: "Traditional festival of the indigenous people",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Upcoming Events</h2>
        <Link href="/events" className="text-emerald-600 text-sm">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <Link key={event.id} href={`/event/${event.id}`}>
            <Card className="overflow-hidden">
              <div className="flex">
                <div className="relative h-32 w-32 flex-shrink-0">
                  <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" />
                </div>
                <CardContent className="p-3 flex-1">
                  <div>
                    <h3 className="font-bold">{event.name}</h3>
                    <p className="text-gray-500 text-xs flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar"
                      >
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <path d="M3 10h18" />
                      </svg>
                      {event.date}
                    </p>
                    <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
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
                      {event.location}
                    </p>
                    <p className="text-xs mt-1">{event.description}</p>
                    <div className="mt-2">
                      <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Notify Me</Badge>
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
