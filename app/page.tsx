import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui/sections";
import HomeHero from "@/components/sections/home-hero";
import BrandScene from "@/components/presentacion/BrandScene";
import { TextLink } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import SiteCTA from "@/components/site-cta";
import QualityScene from "@/components/presentacion/QualityScene";
import HomeSolutions from "@/components/sections/home-solutions";
import { Lines, Reveal } from "@/components/motion/reveal";
import { Words } from "@/components/motion/scroll";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
	title: "Imprenta con envíos a todo México",
	description:
		"Papelería corporativa, publicidad, empaques, uniformes y promocionales personalizados. Más de 25 años de experiencia y envíos a todo México.",
	keywords: [
		"imprenta Atizapán de Zaragoza",
		"soluciones impresas",
		"papelería corporativa",
		"publicidad impresa",
		"packaging",
		"uniformes y distintivos",
	],
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		locale: "es_MX",
		url: "/",
		siteName: "Graphics Impresos",
		title: "Imprenta con envíos a todo México · Graphics Impresos",
		description:
			"Imprenta con más de 25 años de experiencia y envíos a toda la República Mexicana. Asesoría, diseño y producción para empresas y negocios.",
		images: [
			{
				url: "/graphics%20impresos%20offset%20impreta.webp",
				alt: "Prensa offset de Graphics Impresos en Atizapán de Zaragoza",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Imprenta con envíos a todo México · Graphics Impresos",
		description:
			"Más de 25 años ayudando a empresas y negocios a materializar su marca y comunicación.",
		images: ["/graphics%20impresos%20offset%20impreta.webp"],
	},
};

const PROCESS = [
	{
		n: "01",
		title: "Asesoría",
		copy: "Te ayudamos a definir materiales, formatos, acabados y posibilidades de producción.",
	},
	{
		n: "02",
		title: "Diseño",
		copy: "Si necesitas diseño o adaptación de archivos, definimos su alcance dentro de la cotización.",
	},
	{
		n: "03",
		title: "Pruebas y aprobación",
		copy: "Según el proyecto, revisamos contigo las opciones de prueba, su alcance y las especificaciones que debes aprobar antes de producir.",
	},
	{
		n: "04",
		title: "Producción",
		copy: "Convertimos las ideas en piezas físicas cuidando la calidad y los detalles.",
	},
];

const STACK_TOP = ["lg:top-[104px]", "lg:top-[128px]", "lg:top-[152px]", "lg:top-[176px]"];

export default function HomePage() {
	return (
		<main className="w-full bg-midnight">
			{/* ————— HERO · portada editorial ————— */}
			<HomeHero />

			{/* ————— 02 EXPERIENCIA · intro editorial con scrub ————— */}
			<Section aria-labelledby="experiencia">
				<Container>
					<Eyebrow>02 — Experiencia</Eyebrow>
					<Heading level={2} id="experiencia" className="max-w-3xl">
						<Lines
							lines={["Experiencia que", "convierte ideas", "en soluciones."]}
						/>
					</Heading>
					<div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
						<Words
							className="max-w-xl leading-relaxed text-lightgrey/85 sm:text-lg"
							text="Durante más de 25 años hemos acompañado a empresas, PyMEs, emprendedores y marcas en la creación y producción de materiales impresos que les ayudan a comunicar, promocionar y fortalecer su imagen."
						/>
						<div>
							<Words
								className="max-w-xl leading-relaxed text-lightgrey/85 sm:text-lg"
								text="Te orientamos sobre formatos, materiales y acabados según el uso, la cantidad y el presupuesto de tu proyecto."
							/>
							<Reveal delay={0.1} className="mt-6">
								<TextLink href="/nosotros">Conoce quiénes somos</TextLink>
							</Reveal>
						</div>
					</div>
				</Container>
			</Section>

			{/* ————— 03 SOLUCIONES · sticky con riel de progreso ————— */}
			<HomeSolutions />

			{/* ————— 04 MARCA · escena cinematográfica ————— */}
			<BrandScene tag="04 — Marca" quote="Nosotros ayudamos a hacerla tangible." />

			{/* ————— 05 PROCESO · cartas apiladas sticky ————— */}
			<Section aria-labelledby="proceso">
				<Container>
					<Eyebrow>05 — Proceso</Eyebrow>
					<Heading level={2} id="proceso" className="max-w-3xl">
						<Lines lines={["De la idea", "a la realidad."]} />
					</Heading>
					<Words
						className="mt-5 max-w-xl leading-relaxed text-lightgrey/85 sm:text-lg"
						text="Un buen resultado comienza mucho antes de imprimir. Integramos diferentes etapas del proceso para ofrecer una solución completa."
					/>

					<div className="mt-12 flex flex-col gap-5">
						{PROCESS.map((step, i) => (
							<Reveal
								key={step.n}
								delay={0}
								y={40}
								className={cn(
									"rounded-3xl border border-lightgrey/10 bg-midnight-deep lg:sticky",
									STACK_TOP[i]
								)}
							>
								<article className="group grid gap-4 p-7 transition-colors duration-500 hover:border-mint/40 sm:grid-cols-[auto_1fr_1.4fr] sm:items-baseline sm:gap-8 sm:p-12">
									<span className="font-display text-6xl font-medium text-outline transition-all duration-500 group-hover:text-mint group-hover:[-webkit-text-fill-color:var(--mint)] group-hover:[-webkit-text-stroke:0px] sm:text-8xl">
										{step.n}
									</span>
									<h3 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-4xl">
										{step.title}
									</h3>
									<p className="leading-relaxed text-lightgrey/70 sm:text-lg">
										{step.copy}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</Container>
			</Section>

			{/* ————— 06 CALIDAD · escena cinematográfica compartida ————— */}
			<QualityScene />

			<Section aria-labelledby="envios" className="border-t border-lightgrey/10 bg-midnight-deep">
				<Container>
					<Eyebrow>Cobertura nacional</Eyebrow>
					<div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
						<Heading level={2} id="envios" className="max-w-xl">Enviamos a toda la República Mexicana.</Heading>
						<div className="space-y-5 text-lightgrey/85">
							<p className="leading-relaxed sm:text-lg">Tu proyecto puede comenzar desde cualquier parte del país. Producimos en Atizapán de Zaragoza, Estado de México, y enviamos tus materiales hasta tu destino.</p>
							<p className="leading-relaxed">Al solicitar tu cotización, comparte la ciudad, el código postal y la fecha en que necesitas tus materiales. Confirmamos contigo el costo de envío y los tiempos de producción y traslado antes de cerrar el pedido.</p>
							<TextLink href="/cotizaciones">Cotizar mi proyecto y envío</TextLink>
						</div>
					</div>
				</Container>
			</Section>

			{/* ————— CTA FINAL ————— */}
			<SiteCTA />
		</main>
	);
}
