// components/layout/navbar/user-menu.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User } from './nav-items';
import { cn } from '@/lib/utils';

interface UserMenuProps {
  user: User;
  className?: string;
  onButtonClick?: () => void; // Add this prop
}

export function UserMenu({ user, className, onButtonClick }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Logout logic here
    console.log('Logging out...');
    router.push('/');
    setIsOpen(false);
    onButtonClick?.();
  };

  const getDashboardLink = () => {
    return user.role === 'worker' ? '/worker/dashboard' : '/contractor/dashboard';
  };

  const handleMenuClick = () => {
    setIsOpen(false);
    onButtonClick?.();
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      {/* User Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        
        
        {/* User Info - Hidden on mobile */}
        <div className="hidden sm:block text-left">
          <p className="text-base font-semibold text-gray-900">{user.name}</p>
          {user.role === 'contractor' && user.companyName && (
            <p className="text-xs text-gray-500">{user.companyName}</p>
          )}
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
          {user.name.charAt(0).toUpperCase()}
        </div>

        {/* Dropdown Arrow */}
       
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {/* User Info */}
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            {user.role === 'contractor' && user.companyName && (
              <p className="text-xs text-gray-500 mt-1">{user.companyName}</p>
            )}
            <p className="text-xs text-primary-600 capitalize mt-1">
              {user.role}
            </p>
          </div>

          {/* Menu Items */}
          <Link
            href={getDashboardLink()}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={handleMenuClick}
          >
            Dashboard
          </Link>
          
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={handleMenuClick}
          >
            Profile
          </Link>

          <Link
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={handleMenuClick}
          >
            Settings
          </Link>

          {/* Separator */}
          <div className="border-t border-gray-100 my-1"></div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}