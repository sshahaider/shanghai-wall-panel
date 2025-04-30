import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constentsts';
import { AnimatedContainer } from './animated-container';

export default function CeoMessageSection() {
	return (
		<section id="ceo-message" className="relative container min-h-screen scroll-mt-20 pb-24">
			{/* Logo and Section Title */}
			<div className="mb-12 flex items-center justify-center space-x-4">
				<div className="mb-4 flex items-center justify-center space-x-2">
					<div className="bg-primary h-1 w-8 rounded" />
					<h2 className="text-primary font-medium tracking-wider uppercase">CEO&apos;s Message</h2>
					<div className="bg-primary h-1 w-8 rounded" />
				</div>
			</div>

			{/* CEO Image and Message Content */}
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
				{/* CEO Image */}
				<AnimatedContainer className={cn('transition-all duration-1000 lg:col-span-4')}>
					<div className="relative w-fit">
						<div className="border-primary/50 absolute -inset-4 rotate-3 transform rounded-lg border-2 border-dashed" />
						<div className="relative overflow-hidden rounded-xl border-8">
							<Image
								src="/ceo.webp"
								alt="Ameer Hamza - CEO"
								width={300}
								height={400}
								className="object-cover"
								unoptimized
							/>
						</div>
					</div>
				</AnimatedContainer>

				{/* Message Content */}
				<AnimatedContainer delay={0.4} className={cn('transition-all delay-300 duration-1000 lg:col-span-8')}>
					<div className="text-muted-foreground/80 space-y-5 text-base">
						<p>Dear Valued Clients and Partners,</p>
						<p>
							Welcome to {SITE_NAME}, where our passion lies in revolutionizing interior spaces through high-quality PVC
							Wall Panels, WPC Sheets, and Fluted Panels. Our journey began with a commitment to sourcing the finest raw
							materials—primarily imported from China—and to continuously improving manufacturing processes to exceed
							industry standards.
						</p>

						<p>
							Our greatest asset is the trust our clients place in us. This trust fuels our ambition to explore new
							technologies and designs, ensuring that we remain leaders in delivering premium and innovative wall panel
							solutions. As we grow and expand our dealer network across Pakistan, our promise to you remains steadfast:
							exceptional products, personalized service, and a dedication to sustainability.
						</p>

						<p>Thank you for choosing us. We look forward to shaping the future of interior design with you.</p>
					</div>

					<div className="mt-8">
						<p className="font-semibold">Sincerely,</p>
						<h4 className="text-primary text-2xl font-bold">Ameer Hamza</h4>
						<p className="text-muted-foreground">
							Chief Executive Officer, <b>{SITE_NAME}</b>
						</p>
					</div>
				</AnimatedContainer>
			</div>
		</section>
	);
}
