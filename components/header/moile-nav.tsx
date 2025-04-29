import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { NavigationLinks } from './nav-links';

export default function MoileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full md:hidden">
					<MenuIcon className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent className="bg-background" showClose={false}>
				<SheetHeader>
					<SheetClose asChild>
						<Button size="icon" variant="ghost" className="absolute top-2.5 right-4.5 rounded-full">
							<XIcon className="size-5" />
							<span className="sr-only">Close</span>
						</Button>
					</SheetClose>
				</SheetHeader>
				<div className="grid space-y-2 p-2 md:p-4">
					<NavigationLinks close />
				</div>
			</SheetContent>
		</Sheet>
	);
}
