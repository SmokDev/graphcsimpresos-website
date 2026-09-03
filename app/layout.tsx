import { Oswald } from "next/font/google";

import "./globals.css";
import Header, { NavLink } from "@/components/ui/header";
import Footer from "@/components/footer";

const oswald = Oswald({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`antialiased ${oswald.className} bg-lightgrey text-midnight`}>
				<Header>
					<NavLink href="/">Inicio</NavLink>
					<NavLink href="/nosotros">Nosotros</NavLink>
					<NavLink href="/soluciones">Soluciones</NavLink>
					<NavLink href="/contacto">Contacto</NavLink>
				</Header>
				{children}
				<Footer />
			</body>
		</html>
	);
}
