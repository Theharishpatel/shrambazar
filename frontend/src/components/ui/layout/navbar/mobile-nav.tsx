// components/layout/navbar/mobile-nav.tsx
'use client';

import { useEffect } from 'react';
import { NavItems } from './nav-items';
import { AuthButtons } from './auth-buttons';
import { UserMenu } from './user-menu';
import { ContractorPostJob } from './contractor-post-job';

import { Logo } from '@/components/common/logo';
import { MdClose} from "react-icons/md";
import { User } from './nav-items';

interface MobileNavProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ user, isOpen, onClose }: MobileNavProps) {
  // Close mobile nav when route changes
  useEffect(() => {
    const handleRouteChange = () => onClose();
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [onClose]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden ">
      {/* Backdrop - Fixed positioning with proper z-index */}
      <div 
        className="fixed inset-0  bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Mobile Menu - Slide in from right */}
      <div className="fixed top-0 right-0 bottom-0 h-full w-full md:w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="p-6 bg-white flex flex-col">
          {/* Header - Logo and Close button */}
          <div className="flex items-center justify-between md:justify-end mb-8">
            <Logo className='md:hidden'/>
            
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <MdClose size={25}/>
            </button>
          </div>

          {/* Navigation - Scrollable area */}
          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-2">
              <NavItems 
                user={user}
                isMobile={true}
                onItemClick={onClose}
              />
            </nav>
          </div>

          {/* Bottom Actions - Fixed at bottom */}
          <div className="pt-6 border-t border-gray-200 space-y-4">
            {/* Language Switcher */}
            

            {/* Contractor Post Job in Mobile */}
            <ContractorPostJob 
              user={user}
              onButtonClick={onClose}
            />
            
            {/* Auth Buttons or User Menu */}
            {!user?.isLoggedIn ? (
              <AuthButtons 
                user={user}
                onButtonClick={onClose}
              />
            ) : (
              <div className="space-y-3">
                <UserMenu 
                  user={user}
                  onButtonClick={onClose}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}