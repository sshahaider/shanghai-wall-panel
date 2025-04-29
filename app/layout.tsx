import type { Metadata } from 'next';
import './globals.css';
import { fontSans } from '@/lib/fonts';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { SITE_NAME, SITE_URL, SITE_DOMAIN } from '@/lib/constentsts';

const meta = {
	title: `${SITE_NAME} - Transforming Interiors with Innovation`,
	des: 'Discover easy and stylish wall panels to make your home or office look great.',
	link: SITE_URL + '/',
};

export const metadata: Metadata = {
	title: meta.title,
	description: meta.des,
	metadataBase: new URL(SITE_URL),
	applicationName: SITE_NAME,
	keywords: [SITE_NAME, SITE_DOMAIN],
	publisher: SITE_NAME,
	robots: {
		index: true,
		follow: true,
		'max-image-preview': 'large',
	},
	alternates: {
		canonical: meta.link,
	},
	openGraph: {
		title: meta.title,
		description: meta.des,
		url: meta.link,
		locale: 'en-US',
		siteName: SITE_NAME,
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${fontSans.variable} font-sans antialiased`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
