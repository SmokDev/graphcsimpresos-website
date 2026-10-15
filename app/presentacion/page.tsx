import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/sections";
import Heading from "@/components/ui/heading";
import HeroScene from "@/components/presentacion/HeroScene";
import YearsScene from "@/components/presentacion/YearsScene";
import HowWeWork from "@/components/sections/how-we-work";
import BrandScene from "@/components/presentacion/BrandScene";
import SolutionsScene from "@/components/presentacion/SolutionsScene";
import QualityScene from "@/components/presentacion/QualityScene";
import OutroScene from "@/components/presentacion/OutroScene";
import ProgressRail from "@/components/presentacion/ProgressRail";
import { Lines, Reveal, Marquee } from "@/components/motion/reveal";

export const metadata: Metadata = {
	title: "Presentación — Graphics Impresos",
	description:
		"Presentación de Graphics Impresos: quiénes somos, soluciones, clientes y calidad. Material para compartir.",
	robots: { index: false, follow: false, nocache: true },
};

const SOLUTIONS = [
	{
		n: "01",
		title: "Papelería corporativa",
		copy: "Tarjetas, papelería, carpetas, sobres y formatos que mantienen tu imagen profesional y coherente.",
		image: "/papeleria%20corporatiav%202.webp",
		alt: "Papelería corporativa — Graphics Impresos",
	},
	{
		n: "02",
		title: "Publicidad y promoción",
		copy: "Volantes, flyers, pósters, folletos y catálogos para campañas. Danglers y cenefas para promoción en punto de venta.",
		image: "/Flyers%20festival.webp",
		alt: "Publicidad impresa — Graphics Impresos",
	},
	{
		n: "03",
		title: "Empaques y etiquetas",
		copy: "Cajas, etiquetas y empaques que hacen tangible la experiencia de tu marca.",
		image: "/packaging%20premium.webp",
		alt: "Packaging premium — Graphics Impresos",
	},
	{
		n: "04",
		title: "Uniformes corporativos",
		copy: "Prendas personalizadas para un equipo reconocible y profesional.",
		image: "/playera%20nova%20craft.webp",
		alt: "Uniformes corporativos — Graphics Impresos",
	},
];

const CLIENTES = [
	"Empresas",
	"PyMEs",
	"Emprendedores",
	"Comercios",
	"Marcas de productos",
	"Restaurantes y alimentos",
	"Profesionales",
	"Agencias y diseñadores",
	"Organizadores de eventos",
	"Turismo y viajes",
];

/**
 * /presentacion — dossier cinematográfico controlado por scroll.
 * No indexable. El resto del sitio no se toca.
 */
export default function PresentacionPage() {
	return (
		<main className="w-full bg-midnight">
			<ProgressRail />
			<HeroScene />
			<YearsScene />
			<HowWeWork headingId="p-proceso" eyebrow="Cómo trabajamos" />
			<SolutionsScene items={SOLUTIONS} />
			<BrandScene tag="Tu marca" />

			{/* Interludio — Para quién trabajamos */}
			<section aria-labelledby="p-clientes" className="overflow-hidden border-y border-lightgrey/10 bg-midnight py-20 sm:py-24">
				<Container>
					<Eyebrow>Para quién trabajamos</Eyebrow>
					<Heading level={2} id="p-clientes" className="max-w-4xl">
						<Lines lines={["Negocios que quieren", "verse a la altura", "de lo que hacen."]} />
					</Heading>
				</Container>
				<Reveal className="mt-10">
					<div aria-hidden={false}>
						<Marquee speed={36} className="border-y border-lightgrey/10 py-5">
							{CLIENTES.map((c) => (
								<span key={c} className="flex items-center gap-8 pr-8">
									<span className="whitespace-nowrap font-display text-3xl font-light uppercase tracking-tight text-lightgrey/85 sm:text-5xl">
										{c}
									</span>
									<span aria-hidden className="h-2 w-2 rounded-full bg-mint" />
								</span>
							))}
						</Marquee>
					</div>
					<ul className="sr-only">
						{CLIENTES.map((c) => (
							<li key={c}>{c}</li>
						))}
					</ul>
				</Reveal>
			</section>

			<QualityScene />
			<OutroScene />
		</main>
	);
}
