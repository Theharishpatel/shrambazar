// components/common/logo.tsx
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center space-x-2', className)}>
      {/* You can use either SVG or text logo */}
      
      

      {/* Option 2: If you have SVG logo */}
      <div className="relative w-32 h-8">
        <Image
          src="/images/logo/ShramBazarLogo.svg"
          alt="ShramBazar Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}