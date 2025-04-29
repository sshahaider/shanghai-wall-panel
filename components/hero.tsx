import React from 'react';
import { AnimatedContainer } from './animated-container';
import { AnimatedGridPattern } from './ui/animated-grid-pattern';

export default function HeroSection() {
	return (
		<section className="bg-background relative -mt-14 flex h-screen w-full items-center justify-center overflow-hidden">
			<AnimatedContainer className="z-10 container px-4 text-center">
				<h1 className="mb-6 flex flex-col leading-none tracking-tight">
					<span className="text-primary text-[60px] font-extrabold">Shanghai</span>
					<span className="text-[55px] font-bold">Wall Panel</span>
				</h1>
				<p className="text-muted-foreground mb-8 text-xl md:text-2xl">*Transforming Interiors with Innovation*</p>
			</AnimatedContainer>
			<AnimatedGridPattern
				numSquares={10}
				maxOpacity={0.2}
				className="[mask-image:linear-gradient(to_bottom,var(--background)_5%,transparent)]"
			/>
		</section>
	);
}
