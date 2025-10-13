// components/layout/navbar/auth-buttons.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { User } from './nav-items';
import { cn } from '@/lib/utils';
import { MdAccountCircle } from "react-icons/md";

interface AuthButtonsProps {
  user: User | null;
  className?: string;
  onButtonClick?: () => void;
}

export function AuthButtons({ user, className, onButtonClick }: AuthButtonsProps) {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
    onButtonClick?.();
  };

  const handlePostJob = () => {
    router.push('/login?role=contractor');
    onButtonClick?.();
  };

  // Don't show auth buttons if user is logged in
  if (user?.isLoggedIn) {
    return null;
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Button  onClick={handlePostJob} className='cursor-pointer'>
        Post Job
      </Button>
      <Button 
        variant="ghost" 
        onClick={handleLogin}
        size="login"
        className="flex items-center cursor-pointer"
      >
        {/* Default Avatar */}
        
        <span>Login/Register</span>
        <MdAccountCircle 
        size={25}
        />
      </Button>
      
    </div>
  );
}