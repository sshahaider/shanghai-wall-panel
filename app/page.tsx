import AboutSection from '@/components/about';
import CeoMessageSection from '@/components/ceo-message';
import ContactSection from '@/components/contact';
import HeroSection from '@/components/hero';
import ProductCategories from '@/components/product-categories';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<CeoMessageSection />
			<ProductCategories />
			<ContactSection />
		</div>
	);
}
