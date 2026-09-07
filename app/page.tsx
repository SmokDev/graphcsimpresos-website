import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui/sections";
import HomeHero from "@/components/sections/home-hero";
import { TextLink } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import ParallaxImage from "@/components/ui/parallax-image";
import SiteCTA from "@/components/site-cta";
import HomeSolutions from "@/components/sections/home-solutions";
import { Lines, Reveal } from "@/components/motion/reveal";
import { Drift, ScrollRise, Words } from "@/components/motion/scroll";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
	title: "Imprenta y soluciones impresas",
	description:
		"Imprenta en Atizapán de Zaragoza con más de 25 años de experiencia. Asesoría, diseño y producción: papelería, publicidad, packaging y uniformes.",
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
		title: "Imprenta y soluciones impresas · Graphics Impresos",
		description:
			"Imprenta en Atizapán de Zaragoza con más de 25 años de experiencia. Asesoría, diseño y producción para empresas y negocios.",
		images: [
			{
				url: "/graphics%20impresos%20offset%20impreta.webp",
				alt: "Prensa offset de Graphics Impresos en Atizapán de Zaragoza",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Imprenta y soluciones impresas · Graphics Impresos",
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
		copy: "Desarrollamos o adaptamos las propuestas visuales necesarias para cada proyecto.",
	},
	{
		n: "03",
		title: "Prototipado",
		copy: "Creamos pruebas de impresión para validar colores, materiales y acabados antes de la producción final.",
	},
	{
		n: "04",
		title: "Producción",
		copy: "Convertimos las ideas en piezas físicas cuidando la calidad y los detalles.",
	},
];

const QUALITY = ["Material", "Color", "Formato", "Acabado", "Impresión", "Terminados"];

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
							lines={["Más de 25 años", "convirtiendo ideas", "en soluciones."]}
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
								text="Hoy combinamos nuestra experiencia en impresión con asesoría, diseño y producción personalizada."
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

			{/* ————— 04 MARCA · TU MARCA / TAMBIÉN SE IMPRIME ————— */}
			<section aria-labelledby="marca" className="relative overflow-hidden bg-midnight">
				<Container className="pt-20 sm:pt-28">
					<Eyebrow>04 — Marca</Eyebrow>
				</Container>
				<Drift from="-24%" to="4%" className="mt-4">
					<p className="whitespace-nowrap font-display text-[21vw] font-medium uppercase leading-[0.9] tracking-tight lg:text-[15rem]">
						<span className="bg-mint px-[0.12em] text-midnight">Tu</span>&nbsp;
						<span className="text-lightgrey">marca</span>
					</p>
				</Drift>
				<Container className="pb-14 sm:pb-20">
					<Heading level={2} id="marca" className="max-w-4xl text-mint">
						<Lines lines={["También se", "imprime."]} />
					</Heading>
					<Words
						className="mt-6 max-w-xl leading-relaxed text-lightgrey/85 sm:text-lg"
						text="Una marca también vive en el empaque que recibe tu cliente, la tarjeta que guarda, la etiqueta que observa y cada material que toca. Cada punto de contacto construye percepción."
					/>
				</Container>
				<div className="relative h-[72svh] min-h-[480px] w-full overflow-hidden">
					<ParallaxImage
						src="/graphics%20impresos%20bag.webp"
						alt="Empaque de marca — Graphics Impresos"
						className="absolute inset-0"
						strength={0.16}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/25 to-transparent" />
					<Container className="absolute inset-x-0 bottom-0 pb-12 sm:pb-16">
						<ScrollRise>
							<p className="max-w-2xl border-l-2 border-mint pl-5 font-display text-2xl font-light uppercase leading-snug tracking-wide text-lightgrey sm:text-4xl">
								Nosotros ayudamos a hacerla tangible.
							</p>
						</ScrollRise>
					</Container>
				</div>
			</section>

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
									<h3 className="font-display text-2xl font-medium uppercase tracking-tight sm:text-4xl">
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

			{/* ————— 06 CALIDAD · sección única ————— */}
			<section aria-labelledby="calidad" className="overflow-hidden bg-lightgrey py-20 text-midnight sm:py-28">
				<Container>
					<Eyebrow light>06 — Calidad</Eyebrow>
					<Heading level={2} id="calidad" className="max-w-3xl">
						<Lines lines={["La calidad", "también comunica."]} />
					</Heading>
					<Words
						className="mt-5 max-w-xl leading-relaxed text-midnight/80 sm:text-lg"
						text="La calidad no es solamente una característica técnica. Es parte de la percepción que generas."
					/>
					<div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
						<div>
							<Reveal>
							<p className="font-display text-2xl font-light uppercase leading-snug tracking-wide text-midnight/90 sm:text-3xl">
								Por eso prestamos atención a cada elemento:
							</p>
						</Reveal>
						<ul className="mt-8 border-t border-midnight/15">
							{QUALITY.map((q, i) => (
								<Reveal
									key={q}
									as="li"
									delay={Math.min(i * 0.05, 0.25)}
									y={0}
									x={i % 2 === 0 ? -32 : 32}
									className="flex items-baseline justify-between gap-4 border-b border-midnight/15 py-3.5"
								>
									<span className="font-display text-xl font-light uppercase tracking-wide sm:text-2xl">
										{q}
									</span>
									<span className="font-display text-xs text-mint [filter:saturate(1.4)_brightness(0.72)]">
										0{i + 1}
									</span>
								</Reveal>
							))}
						</ul>
					</div>
					<Drift from="8%" to="-6%" className="rounded-3xl" innerClassName="w-full">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/graphicsimpresos%20impreta%20revision%20de%20calida%20offset.webp"
							alt="Detalle de impresión — color y acabado"
							loading="lazy"
							className="h-[46svh] w-full scale-[1.2] object-cover sm:h-[56svh] lg:h-[68svh]"
						/>
					</Drift>
					</div>
				</Container>
			</section>

			{/* ————— CTA FINAL ————— */}
			<SiteCTA />
		</main>
	);
}
