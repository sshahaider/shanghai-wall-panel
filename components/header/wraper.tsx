'use client';
import React from 'react';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

export function Headerwraper({ children }: { children: React.ReactNode }) {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn('sticky top-0 z-50 h-14 w-full transition-all', {
				'bg-background shadow-sm': scrolled,
			})}
		>
			{children}
		</header>
	);
}
