import { SITE_NAME } from '@/lib/constentsts';
import { Award, CheckCircle, Users, Calendar } from 'lucide-react';
import { AnimatedContainer } from './animated-container';

export default function AboutSection() {
	const list = [
		{
			icon: <Award className="text-primary h-6 w-6" />,
			title: 'Premium Quality',
			description: 'Superior materials and finishing',
		},
		{
			icon: <CheckCircle className="text-primary h-6 w-6" />,
			title: 'Easy Installation',
			description: 'Simple and efficient mounting',
		},
		{
			icon: <Users className="text-primary h-6 w-6" />,
			title: 'Expert Team',
			description: 'Skilled designers and technicians',
		},
		{
			icon: <Calendar className="text-primary h-6 w-6" />,
			title: 'Timely Delivery',
			description: 'Reliable and punctual service',
		},
	];

	return (
		<section id="about" className="container min-h-screen scroll-mt-20 pt-24">
			<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
				{/* Left Column - Content */}
				<AnimatedContainer>
					<div className="mb-6 flex items-center space-x-2">
						<div className="bg-primary h-1 w-8 rounded" />
						<h2 className="text-primary font-medium tracking-wider uppercase">About Us</h2>
					</div>

					<p className="mb-6 text-3xl font-bold md:text-4xl">
						Revolutionizing Interior Design <span className="text-primary">Since 2005</span>
					</p>

					<p className="text-muted-foreground mb-8 text-base">
						<b>{SITE_NAME}</b> is a leading manufacturer specializing in PVC Wall Panels, with a robust product
						portfolio that includes WPC Sheets and Fluted Panels. We take pride in delivering superior quality interior
						solutions to com- mercial, residential, and industrial projects.
					</p>
				</AnimatedContainer>

				{/* Right Column - Images */}
				<AnimatedContainer delay={0.4} className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
					{list.map((item, index) => (
						<div key={index} className="flex space-x-4">
							<div className="mt-1 flex-shrink-0">{item.icon}</div>
							<div>
								<p className="mb-1 font-semibold">{item.title}</p>
								<span className="text-muted-foreground text-sm">{item.description}</span>
							</div>
						</div>
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}
