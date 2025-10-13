"use client";

import { Badge } from "@/components/ui/badge";

const popularRoles = ["Mason", "Carpenter", "Plumber", "Electrician", "Painter"];

export default function PopularSearches() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-gray-700 font-medium text-base mb-3">
        Popular Searches
      </h2>

      <div className="flex flex-wrap gap-3.5">
        {popularRoles.map((role) => (
          <Badge
            key={role}
            variant="secondary"
            className="rounded-full bg-surface-muted text-gray-500 hover:bg-gray-100 border border-gray-200 px-4 py-1.5 text-sm font-normal shadow-sm cursor-pointer"
          >
            {role}
          </Badge>
        ))}
      </div>
    </div>
  );
}
