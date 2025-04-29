import Link from 'next/link';
import { Headerwraper } from './wraper';
import MoileNav from './moile-nav';
import { LogoIcon } from '../icons';
import { NavigationLinks } from './nav-links';

export function Header() {
	return (
		<Headerwraper>
			<nav className="container flex h-14 items-center justify-between">
				<div className="relative w-max">
					<Link href="/">
						<LogoIcon className="size-13" />
					</Link>
					<div className="bg-background absolute inset-0 -z-10 blur" />
				</div>
				<div className="relative hidden w-max md:flex md:items-center md:justify-end md:gap-2">
					<NavigationLinks />
					<div className="bg-background absolute inset-0 -z-10 blur" />
				</div>
				<MoileNav />
			</nav>
		</Headerwraper>
	);
}
