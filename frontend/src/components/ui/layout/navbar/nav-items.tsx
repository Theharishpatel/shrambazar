// components/layout/navbar/nav-items.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// Types
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'worker' | 'contractor';
  companyName?: string;
  avatar?: string;
  isLoggedIn: boolean;
}

// Navigation items for different user states
export const GUEST_NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Find Jobs', href: '/jobs' },
  { name: 'Find Workers', href: '/workers' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Contact', href: '/contact' },
];

export const WORKER_NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Message', href: '/messages' },
  { name: 'Applied Jobs', href: '/applied-jobs' },
];

export const CONTRACTOR_NAV_ITEMS: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Message', href: '/messages' },
];

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
];

// Get nav items based on user role
export const getNavItems = (user: User | null): NavItem[] => {
  if (!user || !user.isLoggedIn) {
    return GUEST_NAV_ITEMS;
  }
  
  if (user.role === 'worker') {
    return WORKER_NAV_ITEMS;
  }
  
  return CONTRACTOR_NAV_ITEMS;
};

interface NavItemsProps {
  user: User | null;
  className?: string;
  onItemClick?: () => void;
  isMobile?: boolean;
}

export function NavItems({ user, className, onItemClick, isMobile = false }: NavItemsProps) {
  const pathname = usePathname();
  const navItems = getNavItems(user);

  return (
    <nav className={cn(
      'flex items-center space-x-6',
      isMobile && 'flex-col items-start space-y-4 space-x-0',
      className
    )}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary-600',
              isActive 
                ? 'text-primary-600 border-b-2 border-primary-600' 
                : 'text-gray-600',
              isMobile && 'border-b-0 text-base w-full py-2'
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}