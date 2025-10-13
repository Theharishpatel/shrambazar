// components/layout/navbar/contractor-post-job.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { User } from './nav-items';

interface ContractorPostJobProps {
  user: User | null;
  className?: string;
  onButtonClick?: () => void; // Add this prop
}

export function ContractorPostJob({ user, className, onButtonClick }: ContractorPostJobProps) {
  const router = useRouter();

  const handlePostJob = () => {
    router.push('/post-job');
    onButtonClick?.();
  };

  // Only show for logged-in contractors
  if (!user?.isLoggedIn || user.role !== 'contractor') {
    return null;
  }

  return (
    <div className={className}>
      <Button onClick={handlePostJob} className="w-full">
        🛠️ Post Job
      </Button>
    </div>
  );
}