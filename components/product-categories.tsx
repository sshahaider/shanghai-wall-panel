import React from 'react';
import { AnimatedContainer } from './animated-container';

const categories = [
	{
		title: 'PVC Wall Panels',
		keyFeatures: ['Lightweight, water-resistant, fire-retardant, easy to install'],
		applications: ['Perfect for bedrooms, living rooms, kitchens, offices, retail outlets, and more'],
		icon: '🧱', // Add icons for visual appeal
	},
	{
		title: 'WPC Sheets',
		keyFeatures: ['Combines wood fibers and plastic, offering moisture resistance, durability, and eco-friendliness'],
		applications: ['Great for partitions, furniture, cladding, and other decorative elements'],
		icon: '🌿',
	},
	{
		title: 'Fluted Panels',
		keyFeatures: ['Contemporary, stylish texture with noise-dampening capabilities and minimal maintenance'],
		applications: ['Ideal for accent walls in homes, hotels, restaurants, and corporate spaces'],
		icon: '🎨',
	},
];

const customizationContent = {
	title: 'Customization',
	features: [
		'Wide range of colors, textures, and finishes to achieve desired aesthetic',
		'Custom orders fulfilled to match specific design or functional requirements',
	],
	icon: '🛠️',
};

export default function ProductCategories() {
	return (
		<section
			className="from-background to-foreground/2 relative scroll-mt-14 overflow-hidden border-t bg-gradient-to-b py-24"
			aria-labelledby="product-categories-heading"
			id="product-categories"
		>
			<div className="container">
				{/* Section Header */}
				<div className="mb-12 max-w-3xl">
					<div className="flex items-center gap-3">
						<div className="bg-primary h-1 w-12 rounded-full" />
						<h2 id="product-categories-heading" className="text-primary text-2xl font-semibold tracking-wide uppercase">
							Product categories
						</h2>
					</div>
					<p className="text-muted-foreground mt-4 text-lg leading-relaxed">
						Discover our versatile range of wall panels and sheets, designed to elevate any space with style and
						functionality.
					</p>
				</div>

				{/* Product Categories */}
				<div className="grid gap-6 md:grid-cols-2">
					{categories.map((category, index) => (
						<AnimatedContainer
							key={category.title}
							className="group bg-card relative overflow-hidden rounded-xl p-6 shadow-sm"
							delay={index * 0.1}
						>
							<div className="mb-4 flex items-center gap-3">
								<span className="text-2xl">{category.icon}</span>
								<h3 className="text-foreground group-hover:text-primary text-xl font-semibold transition-colors">
									{category.title}
								</h3>
							</div>
							<div className="space-y-4">
								<div>
									<p className="text-primary mb-2 font-medium">Key Features:</p>
									<ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
										{category.keyFeatures.map((feature) => (
											<li key={feature}>{feature}</li>
										))}
									</ul>
								</div>
								<div>
									<p className="text-primary mb-2 font-medium">Applications:</p>
									<ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
										{category.applications.map((application) => (
											<li key={application}>{application}</li>
										))}
									</ul>
								</div>
							</div>
						</AnimatedContainer>
					))}
					<AnimatedContainer
						className="group border-primary bg-card relative overflow-hidden rounded-xl border border-dashed p-6"
						delay={0.3}
					>
						<div className="mb-4 flex items-center gap-3">
							<span className="text-2xl">{customizationContent.icon}</span>
							<h3 className="text-foreground group-hover:text-primary text-xl font-semibold transition-colors">
								{customizationContent.title}
							</h3>
						</div>
						<ul className="text-muted-foreground list-inside list-disc space-y-2 text-sm">
							{customizationContent.features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					</AnimatedContainer>
				</div>
			</div>
		</section>
	);
}
