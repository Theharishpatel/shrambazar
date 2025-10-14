// components/sections/hero-section.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import  SearchBar  from './searchBar';
import PopularSearches from './PopularSearches';

export function HeroSection() {
  const [selectedRole, setSelectedRole] = useState<'worker' | 'contractor'>('worker');

  return (
    <section className="relative overflow-hidden bg-transperent py-20 lg:pb-20 lg:pt-60 ">
     
      <div className=" wrapper">
        {/* left ellips */}
         <div
        className="absolute bg-gray-50 rounded-full "
        style={{
          width: "396px",
          height: "365.3px",
          top: "-2rem",
          left: "-8rem",
          transform: "rotate(-36.46deg)",
          zIndex: -1,
        }}
      />
      {/* right ellips */}
      <div
        className="absolute bg-gray-50 rounded-full "
        style={{
          width: "396px",
          height: "365.3px",
          top: "22rem",
          right: "-15rem",
          transform: "rotate(-36.46deg)",
          zIndex: -1,
        }}
      />
        
          {/* heading Content */}
          <div className="text-center space-y-1.5 ">
            <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight ">
              Find Jobs. Hire Workers. Build Faster.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8  ">
              Hire trusted labour or apply for jobs in just a few clicks.
            </p>
            
          </div>

          {/* search bar */}
          <div className="bg-surface-muted rounded-xl p-2 md:px-4 md:py-[13px] max-w-4xl mx-auto w-full ">
            <SearchBar />
          </div>

          {/* popular searches */}
          <div>
            <PopularSearches />
          </div>

          
        </div>
      
    </section>
  );
}