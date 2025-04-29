import { cn } from '@/lib/utils';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import React from 'react';
import { AnimatedContainer } from './animated-container';

export default function ContactSection() {
	const list = [
		{
			icon: PhoneIcon,
			title: 'Phone',
			content: '0300 8862301',
			href: 'tel:+923008862301',
		},
		{
			icon: MailIcon,
			title: 'Email',
			content: 'shanghaiwallpanel23@gmail.com',
			href: 'mailto:shanghaiwallpanel23@gmail.com',
		},
		{
			icon: MapPinIcon,
			title: 'Address',
			content: 'Manga Raiwind Road, Lahore, Pakistan',
			href: 'https://maps.google.com',
		},
		{
			icon: ClockIcon,
			title: 'Working Hours',
			content: 'Monday - Saturday: 9AM - 6PM',
			href: null,
		},
	];

	return (
		<section id="contact" className="relative min-h-screen scroll-mt-14 border-t py-12">
			<div className="bg-primary/10 absolute top-0 right-0 h-1/3 w-1/3 rounded-bl-full" />
			<div className="bg-primary/10 absolute bottom-0 left-0 h-1/3 w-1/3 rounded-tr-full" />
			<div className="container">
				{/* Section Header */}
				<div className="mx-auto mb-16 max-w-3xl text-center">
					<div className="mb-4 flex items-center justify-center space-x-2">
						<div className="bg-primary h-1 w-8 rounded" />
						<span className="text-primary font-medium tracking-wider uppercase">Contact Us</span>
						<div className="bg-primary h-1 w-8 rounded" />
					</div>

					<h2 className="mb-6 text-3xl font-bold md:text-4xl">Get In Touch With Us</h2>

					<p className="text-muted-foreground text-lg">
						Have questions about our products or services? Ready to start your project? Contact us today for a
						consultation or quote.
					</p>
				</div>

				<div className="grid grid-cols-1 items-start gap-6 md:gap-12 lg:grid-cols-2">
					{/* Contact Information */}
					<AnimatedContainer className={cn('rounded-lg border p-8')}>
						<h3 className="mb-8 text-2xl font-bold">Contact Information</h3>
						<div className="space-y-6">
							{list.map((item, index) => (
								<div key={index} className="flex items-start space-x-4">
									<div className="mt-1 flex-shrink-0">
										<item.icon className="text-primary size-6" />
									</div>
									<div className="-space-y-1">
										<h4 className="font-semibold">{item.title}</h4>
										{item.href ? (
											<a
												href={item.href}
												className="text-muted-foreground hover:text-primary"
												target={item.href.startsWith('http') ? '_blank' : undefined}
												rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
											>
												{item.content}
											</a>
										) : (
											<p className="text-muted-foreground">{item.content}</p>
										)}
									</div>
								</div>
							))}
						</div>
					</AnimatedContainer>
					{/* Map or Additional Information */}
					<AnimatedContainer delay={0.4} className="bg-muted mt-12 rounded-lg p-4">
						<h4 className="mb-4 font-semibold">Why Choose Shanghai Wall Panel?</h4>
						<ul className="text-muted-foreground space-y-2">
							<li className="flex items-start">
								<span className="text-prbg-primary mr-2">✓</span>
								Premium quality products with superior finishes
							</li>
							<li className="flex items-start">
								<span className="text-prbg-primary mr-2">✓</span>
								Expert consultation and design services
							</li>
							<li className="flex items-start">
								<span className="text-prbg-primary mr-2">✓</span>
								Professional installation by trained technicians
							</li>
							<li className="flex items-start">
								<span className="text-prbg-primary mr-2">✓</span>
								Competitive pricing and excellent customer support
							</li>
						</ul>
					</AnimatedContainer>
				</div>
			</div>
		</section>
	);
}
