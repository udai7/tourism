"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="px-4 py-3 bg-white sticky top-16 z-10 shadow-sm">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <Input
          type="text"
          placeholder="Search destinations, hotels, activities..."
          className="pl-10 pr-4 py-2 rounded-full border border-gray-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  )
}
