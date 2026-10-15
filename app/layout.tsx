import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import SiteLoader from "@/components/site-loader";
import SmoothScroll from "@/components/providers/smooth-scroll";
import { SITE } from "@/utils/site";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE.baseUrl),
	title: {
		default: "Graphics Impresos — Impresión y envíos a todo México",
		template: "%s · Graphics Impresos",
	},
	description:
		"Imprenta con más de 25 años de experiencia y envíos a toda la República Mexicana. Diseñamos tu idea, imprimimos tu éxito: asesoría, diseño y producción.",
	keywords: [
		"imprenta Atizapán de Zaragoza",
		"imprenta Estado de México",
		"soluciones impresas",
		"identidad corporativa",
		"publicidad impresa",
		"packaging",
		"uniformes personalizados",
	],
	authors: [{ name: SITE.name, url: SITE.baseUrl }],
	creator: SITE.name,
	publisher: SITE.name,
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		locale: "es_MX",
		url: "/",
		siteName: SITE.name,
		title: "Graphics Impresos — Impresión y envíos a todo México",
		description:
			"Imprenta con más de 25 años de experiencia. Asesoría, diseño y producción de soluciones impresas para empresas y negocios.",
		images: [
			{
				url: "/graphics%20impresos%20offset%20impreta.webp",
				alt: "Prensa offset de Graphics Impresos en Atizapán de Zaragoza",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Graphics Impresos — Impresión y envíos a todo México",
		description:
			"Imprenta con más de 25 años de experiencia. Asesoría, diseño y producción de soluciones impresas.",
		images: ["/graphics%20impresos%20offset%20impreta.webp"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
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
		<html lang="es" className={poppins.variable}>
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
					<WhatsAppFloat />
				</SmoothScroll>
			</body>
		</html>
	);
}
