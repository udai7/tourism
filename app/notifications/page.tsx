import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "Safety Alert",
      title: "Weather Update",
      message: "Heavy rainfall expected in Jampui Hills area. Plan your travel accordingly.",
      time: "2 hours ago",
      isRead: false,
      icon: "⚠️",
    },
    {
      id: 2,
      type: "Event",
      title: "Tripura Tribal Festival",
      message: "Don't miss the upcoming Tripura Tribal Festival starting June 15th!",
      time: "1 day ago",
      isRead: false,
      icon: "🎉",
    },
    {
      id: 3,
      type: "Booking",
      title: "Booking Confirmed",
      message: "Your hotel booking at Ginger Hotel has been confirmed.",
      time: "2 days ago",
      isRead: true,
      icon: "✅",
    },
    {
      id: 4,
      type: "Offer",
      title: "Special Discount",
      message: "Get 20% off on all tour packages this month!",
      time: "3 days ago",
      isRead: true,
      icon: "💰",
    },
  ]

  return (
    <main className="flex flex-col h-full">
      {/* Header */}
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
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>

      {/* Notifications List */}
      <div className="flex-1 p-4 space-y-3">
        {notifications.map((notification) => (
          <Card key={notification.id} className={`${!notification.isRead ? "border-emerald-200 bg-emerald-50" : ""}`}>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="text-2xl mr-3">{notification.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge
                        variant="outline"
                        className={`mb-1 text-xs ${
                          notification.type === "Safety Alert"
                            ? "bg-red-100 text-red-800 border-red-200"
                            : notification.type === "Event"
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : notification.type === "Booking"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-yellow-100 text-yellow-800 border-yellow-200"
                        }`}
                      >
                        {notification.type}
                      </Badge>
                      <h3 className="font-bold text-sm">{notification.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    </div>
                    {!notification.isRead && <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mark All as Read */}
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full">
          Mark All as Read
        </Button>
      </div>
    </main>
  )
}
