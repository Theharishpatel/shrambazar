"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin } from "lucide-react";

export default function SearchBar() {
  const [category, setCategory] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log({ category, role, location });
  };

  return (
    <div className="flex h-12 items-center space-x-6 ">
      {/* Category */}
      <div className="flex items-center gap-1.5 w-full md:w-1/3">
        <Search className="size-6 text-gray-500" />
        <Input
          type="text"
          placeholder="Choose Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0  text-base placeholder:text-gray-500 placeholder:text-base font-normal leading-[25px]"
        />
      </div>

      {/* Dark separator */}
      <Separator orientation="vertical" className=" border-[1px] border-[#e1e1e1]" />

      {/* Role */}
      <div className="flex items-center gap-1.5 w-full md:w-1/3">
        <Search className="size-6 text-gray-500" />
        <Input
          type="text"
          placeholder="Choose your role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0   text-base placeholder:text-gray-500 placeholder:text-base font-normal leading-[25px]"
        />
      </div>

      {/* Dark separator */}
      <Separator orientation="vertical" className=" border-[1px] border-[#e1e1e1] " />

      {/* Location */}
      <div className="flex items-center gap-1.5 w-full md:w-1/3">
        <MapPin className="size-6 text-gray-500" />
        <Input
          type="text"
          placeholder="All Locations"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0  text-base placeholder:text-gray-500 placeholder:text-base font-normal leading-[25px]"
        />
      </div>

      {/* Search Button */}
      <Button
        onClick={handleSearch}
        className="bg-black text-white text-base font-medium leading-[100%] hover:bg-gray-800 rounded-[0.6rem] px-6"
      >
        Search
      </Button>
    </div>
  );
}
