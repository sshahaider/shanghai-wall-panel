'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { SheetClose } from '../ui/sheet';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

export type NavItem = {
	title: string;
	href: string;
	className?: string;
};
export const links: NavItem[] = [
	{ title: 'About Us', href: '/#about' },
	{ title: "CEO's Message", href: '/#ceo-message' },
	{ title: 'Product Categories', href: '/#product-categories' },
	{ title: 'Privacy Policy', href: '/policy' },
	{
		title: 'Contact Us',
		href: '/#contact',
		className: buttonVariants({ variant: 'outline', className: 'md:w-max md:rounded-full' }),
	},
];

export function NavigationLinks({ close }: { close?: boolean }) {
	return (
		<div className="flex flex-col justify-center gap-1 md:flex-row">
			{links.map((item) => (
				<LinkItem key={item.href} link={item} close={close} />
			))}
		</div>
	);
}

interface Props {
	link: NavItem;
	pathname?: string;
	close?: boolean;
}

function LinkItem({ link: { href, title, className }, pathname, close }: Props) {
	const isActive = pathname?.startsWith(href);

	const linkClassNames = cn(
		'my-1 w-full flex flex-row text-sm items-center justify-start md:justify-center text-nowrap gap-x-2 p-2 rounded-md hover:bg-accent duration-200',
		isActive && 'bg-accent',
		className,
	);

	if (close) {
		return (
			<SheetClose asChild>
				<Link href={href} className={linkClassNames}>
					{title}
				</Link>
			</SheetClose>
		);
	} else {
		return (
			<Link href={href} className={linkClassNames}>
				{title}
			</Link>
		);
	}
}
