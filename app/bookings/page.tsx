import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BottomNavigation from "@/components/bottom-navigation"

export default function BookingsPage() {
  const upcomingBookings = [
    {
      id: 1,
      type: "Hotel",
      name: "Ginger Hotel",
      date: "June 15-18, 2025",
      image: "/ginger.jpg",
      status: "Confirmed",
      price: "₹8,500",
    },
    {
      id: 2,
      type: "Tour",
      name: "Tripura Heritage Tour",
      date: "June 16, 2025",
      image: "/heritage-park.jpeg",
      status: "Pending",
      price: "₹2,500",
    },
  ]

  const pastBookings = [
    {
      id: 3,
      type: "Hotel",
      name: "Tripura Castle",
      date: "May 10-12, 2025",
      image: "/tripura-castle.jpg",
      status: "Completed",
      price: "₹12,000",
    },
    {
      id: 4,
      type: "Activity",
      name: "Boat Ride at Neermahal",
      date: "May 11, 2025",
      image: "/neermahal.jpg",
      status: "Completed",
      price: "₹500",
    },
  ]

  return (
    <main className="flex flex-col h-full">
      {/* App Header */}
      <div className="sticky top-0 z-10 bg-emerald-700 text-white p-4">
        <h1 className="text-xl font-bold">My Bookings</h1>
      </div>

      {/* Bookings Content */}
      <div className="flex-1 p-4 pb-20">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map((booking) => (
                <Link key={booking.id} href={`/booking/${booking.id}`}>
                  <Card>
                    <div className="flex">
                      <div className="relative h-24 w-24 flex-shrink-0">
                        <Image
                          src={booking.image || "/placeholder.svg"}
                          alt={booking.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-3 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className="mb-1 bg-gray-100 text-gray-800">{booking.type}</Badge>
                            <h3 className="font-bold">{booking.name}</h3>
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
                              {booking.date}
                            </p>
                          </div>
                          <Badge
                            className={
                              booking.status === "Confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <p className="font-bold text-emerald-700">{booking.price}</p>
                          <Button size="sm" variant="outline" className="text-xs">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="text-center py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar mx-auto text-gray-300"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                <p className="mt-2 text-gray-500">No upcoming bookings</p>
                <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">Explore and Book</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastBookings.map((booking) => (
              <Link key={booking.id} href={`/booking/${booking.id}`}>
                <Card>
                  <div className="flex">
                    <div className="relative h-24 w-24 flex-shrink-0">
                      <Image
                        src={booking.image || "/placeholder.svg"}
                        alt={booking.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-3 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge className="mb-1 bg-gray-100 text-gray-800">{booking.type}</Badge>
                          <h3 className="font-bold">{booking.name}</h3>
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
                            {booking.date}
                          </p>
                        </div>
                        <Badge className="bg-gray-100 text-gray-800">{booking.status}</Badge>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <p className="font-bold text-emerald-700">{booking.price}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="text-xs">
                            Book Again
                          </Button>
                          <Button size="sm" className="text-xs bg-emerald-600 hover:bg-emerald-700">
                            Review
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </main>
  )
}
