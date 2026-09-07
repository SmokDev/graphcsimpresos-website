import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";

import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/footer";
import SiteLoader from "@/components/site-loader";
import SmoothScroll from "@/components/providers/smooth-scroll";
import { SITE } from "@/utils/site";

const oswald = Oswald({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	variable: "--font-oswald",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE.baseUrl),
	title: {
		default: "Graphics Impresos — Convertimos tus ideas en soluciones impresas",
		template: "%s · Graphics Impresos",
	},
	description:
		"Más de 25 años ayudando a empresas, negocios y marcas a materializar su comunicación. Asesoría, diseño y producción de soluciones impresas.",
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		locale: "es_MX",
		siteName: SITE.name,
		title: "Graphics Impresos — Convertimos tus ideas en soluciones impresas",
		description:
			"Más de 25 años ayudando a empresas, negocios y marcas a materializar su comunicación.",
	},
	robots: { index: true, follow: true },
};

export const viewport: Viewport = {
	themeColor: "#002855",
	colorScheme: "dark",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className={`${oswald.variable} ${inter.variable}`}>
			<body className="bg-midnight font-body text-lightgrey antialiased">
				<a
					href="#contenido"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-mint focus:px-5 focus:py-2 focus:text-sm focus:text-midnight"
				>
					Saltar al contenido
				</a>
				<SiteLoader />
				<SmoothScroll>
					<Header />
					<div id="contenido">{children}</div>
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	);
}
