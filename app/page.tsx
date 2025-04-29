import AboutSection from '@/components/about';
import CeoMessageSection from '@/components/ceo-message';
import ContactSection from '@/components/contact';
import HeroSection from '@/components/hero';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<CeoMessageSection />
			<ContactSection />
		</div>
	);
}
