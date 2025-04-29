import { SITE_NAME } from '@/lib/constentsts';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="w-full">
			<div className="container flex w-full items-center justify-center gap-y-4 border-t px-4 py-3 text-xs">
				<div className="text-center opacity-80">
					©{' '}
					<Link href="/" className="hover:text-primary">
						{SITE_NAME}
					</Link>
					. All rights reserved {year}
				</div>
			</div>
		</div>
	);
}
