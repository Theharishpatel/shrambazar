// components/layout/navbar/navbar.tsx
'use client';

import { useState } from 'react';
import { Logo } from '@/components/common/logo';
import { NavItems } from './nav-items';
import { AuthButtons } from './auth-buttons';
import { UserMenu } from './user-menu';
import { ContractorPostJob } from './contractor-post-job';
import { LanguageSwitcher } from './language-switcher';
import { MobileNav } from './mobile-nav';
import { MdMenuOpen } from 'react-icons/md';


// Mock user data - Replace with actual auth context
const mockWorker: any = {
  id: '1',
  name: 'Rahul Kumar',
  email: 'rahul@example.com',
  role: 'worker',
  isLoggedIn: true,
};

const mockContractor: any = {
  id: '2',
  name: 'Amit Singh',
  email: 'amit@example.com',
  role: 'contractor',
  companyName: 'BuildWell Constructions',
  isLoggedIn: true,
};

// For testing - Change this to see different states
 const CURRENT_USER = null; // Not logged in
// const CURRENT_USER = mockWorker; // Worker logged in
// const CURRENT_USER = mockContractor; // Contractor logged in

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user] = useState<any>(CURRENT_USER); // Replace with actual auth state

  return (
    <header className="sticky  top-0 z-40 w-full   backdrop-blur-md">
      <div className="wrapper md:wrapper-md lg:wrapper-lg">
        <div className="flex justify-between items-center h-17.5 md:h-20">
          {/* Left Section - Logo & Navigation */}
          <div className="flex items-center gap-6">
            <Logo />
            <NavItems 
              user={user} 
              className="hidden lg:flex" 
            />
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center gap-5.5">
         
            {/* Auth Buttons - Only when not logged in */}
            <AuthButtons 
              user={user} 
              className="hidden lg:flex" 
            />

            {/* User Menu - Only when logged in */}
            {user?.isLoggedIn && (
              <UserMenu 
                user={user} 
                className="hidden lg:block" 
              />
            )}
          <div className='flex justify-center items-center'>
               {/* Language Switcher - Always visible */}
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden  rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
             <MdMenuOpen size={30}/>
            </button>

          </div>
           
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        user={user}
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}