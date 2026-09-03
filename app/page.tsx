import type { Metadata } from "next";
import { HeroSection, Section } from "@/components/ui/sections";
import Link from "next/link";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";

export const metadata: Metadata = {
	title: "Graphics Impresos — Impresión profesional",
	description:
		"Graphics Impresos, soluciones de impresión de alta calidad. Más de 25 años de experiencia.",
};

export default function HomePage() {
	return (
		<main className="w-full">
			<HeroSection>
				Impresión
				<br />
				profesional
				<br />
				<span className="text-mint">Graphics Impresos</span>
			</HeroSection>

			<Section className="lightgrey">
				<Heading level={2} className="text-midnight">
					Bienvenido a Graphics Impresos
				</Heading>
				<p className="text-midnight/80 text-lg max-w-2xl">
					Nueva imagen, la misma calidad. Transformamos ideas en
					soluciones de impresión de alta calidad, cuidando cada detalle
					desde el diseño hasta el acabado final.
				</p>
				<p className="text-midnight/60 text-base max-w-2xl">
					Esta es una página de inicio provisional. Próximamente
					integraremos catálogo, servicios y proyectos destacados.
				</p>
				<Link href="/contacto">
					<Button className="mt-4 bg-midnight text-lightgrey hover:bg-mint hover:text-midnight">
						Contáctanos
					</Button>
				</Link>
			</Section>

			<div className="w-full midnight py-20 px-8 flex flex-col items-center justify-center text-center gap-4">
				<Heading level={3} className="text-lightgrey">
					¿Listo para tu próximo proyecto?
				</Heading>
				<p className="text-lightgrey/80 max-w-xl">
					Cotización personalizada sin compromiso. Lleva tu idea al papel
					con el respaldo de más de 25 años de experiencia.
				</p>
				<Link href="/contacto">
					<Button className="bg-mint text-midnight hover:bg-lightgrey">
						Solicitar cotización
					</Button>
				</Link>
			</div>
		</main>
	);
}
