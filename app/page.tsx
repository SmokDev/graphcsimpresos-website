import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/sections";
import HomeHero from "@/components/sections/home-hero";
import { TextLink } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import ParallaxImage from "@/components/ui/parallax-image";
import SiteCTA from "@/components/site-cta";
import HomeDuo from "@/components/sections/home-duo";
import { ImageReveal, Lines, Reveal } from "@/components/motion/reveal";
import { ClipOpen, Drift, ScaleViewport, ScrollRise, Words } from "@/components/motion/scroll";
import { SOLUTIONS } from "@/utils/site";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
	title: "Convertimos tus ideas en soluciones impresas",
	description:
		"Imprenta y soluciones de impresión en CDMX: más de 25 años de asesoría, diseño y producción. Identidad corporativa, publicidad, packaging y uniformes.",
	alternates: { canonical: "/" },
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
		title: "Producción",
		copy: "Convertimos las ideas en piezas físicas cuidando la calidad y los detalles.",
	},
];

const CONCEPTS = [
	{
		n: "01",
		title: "Experiencia",
		copy: "Más de 25 años acompañando a empresas, PyMEs, emprendedores y marcas.",
	},
	{
		n: "02",
		title: "Asesoría",
		copy: "Te ayudamos a definir materiales, formatos, acabados y posibilidades de producción.",
	},
	{
		n: "03",
		title: "Diseño",
		copy: "Desarrollamos o adaptamos las propuestas visuales necesarias para cada proyecto.",
	},
	{
		n: "04",
		title: "Producción",
		copy: "Convertimos las ideas en piezas físicas cuidando la calidad y los detalles.",
	},
];

const QUALITY = ["Material", "Color", "Formato", "Acabado", "Impresión", "Terminados"];

const STACK_TOP = ["lg:top-[104px]", "lg:top-[128px]", "lg:top-[152px]"];

export default function HomePage() {
	return (
		<main className="w-full bg-midnight">
			{/* ————— HERO · portada editorial ————— */}
			<HomeHero />

			{/* ————— WOW 01 · imagen que crece al viewport ————— */}
			<ScaleViewport
				src="/background%202.webp"
				alt="Detalle de producción impresa — Graphics Impresos"
				caption="Del archivo al objeto — impresión offset"
			/>

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
							text="Durante más de 25 años hemos acompañado a empresas, PyMEs, emprendedores y marcas en la creación y producción de materiales que les ayudan a comunicar, promocionar y fortalecer su imagen."
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

			{/* ————— WOW 02 · sticky 25+ con riel de progreso ————— */}
			<HomeDuo concepts={CONCEPTS} />

			{/* ————— WOW 03 · TU MARCA / TAMBIÉN SE IMPRIME ————— */}
			<section aria-labelledby="marca" className="relative overflow-hidden bg-midnight">
				<Container className="pt-20 sm:pt-28">
					<Eyebrow>03 — Marca</Eyebrow>
				</Container>
				<Drift from="4%" to="-24%" className="mt-4">
					<p className="whitespace-nowrap font-display text-[21vw] font-medium uppercase leading-[0.9] tracking-tight lg:text-[15rem]">
						<span className="text-outline">Tu&nbsp;</span>
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
						src="/background.webp"
						alt="Taller de impresión — Graphics Impresos"
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

			{/* ————— 04 PROCESO · cartas apiladas sticky ————— */}
			<Section aria-labelledby="proceso">
				<Container>
					<Eyebrow>04 — Proceso</Eyebrow>
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

			{/* ————— 05 SOLUCIONES · índice editorial con entradas laterales ————— */}
			<section aria-labelledby="soluciones" className="overflow-hidden bg-lightgrey py-20 text-midnight sm:py-28 lg:py-36">
				<Container>
					<Eyebrow light>05 — Soluciones</Eyebrow>
					<div className="flex flex-wrap items-end justify-between gap-6">
						<Heading level={2} id="soluciones" className="max-w-3xl">
							<Lines lines={["Soluciones gráficas", "para cada necesidad."]} />
						</Heading>
						<Reveal delay={0.1} x={32}>
							<p className="max-w-sm leading-relaxed text-midnight/70">
								Creamos y producimos soluciones gráficas personalizadas para
								diferentes necesidades de comunicación.
							</p>
						</Reveal>
					</div>

					<ul className="mt-12 border-t border-midnight/15">
						{SOLUTIONS.map((s, i) => (
							<Reveal
								key={s.slug}
								as="li"
								y={0}
								x={i % 2 === 0 ? -48 : 48}
								className="border-b border-midnight/15"
							>
								<Link
									href="/soluciones"
									className="group grid items-center gap-4 py-7 transition-colors sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:py-9"
									aria-label={`${s.title} — ver en Soluciones`}
								>
									<span className="font-display text-sm tracking-[0.2em] text-mint [filter:saturate(1.4)_brightness(0.72)]">
										/{s.n}
									</span>
									<span>
										<span className="block font-display text-3xl font-medium uppercase leading-[1.02] tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
											{s.title}
										</span>
										<span className="mt-2 block max-w-xl text-[15px] leading-relaxed text-midnight/65">
											{s.description}
										</span>
									</span>
									<span className="hidden h-20 w-36 overflow-hidden rounded-2xl sm:block lg:h-24 lg:w-52">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={s.image}
											alt=""
											aria-hidden
											loading="lazy"
											className="h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
										/>
									</span>
									<span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-midnight/20 transition-all duration-300 group-hover:border-mint group-hover:bg-mint sm:hidden">
										<ArrowUpRight className="h-5 w-5" aria-hidden />
									</span>
								</Link>
							</Reveal>
						))}
					</ul>
				</Container>
			</section>

			{/* ————— 06 CALIDAD ————— */}
			<Section aria-labelledby="calidad" className="pb-0">
				<Container>
					<Eyebrow>06 — Calidad</Eyebrow>
					<Heading level={2} id="calidad" className="max-w-3xl">
						<Lines lines={["La calidad", "también comunica."]} />
					</Heading>
					<Words
						className="mt-5 max-w-xl leading-relaxed text-lightgrey/85 sm:text-lg"
						text="Un material impreso representa a tu negocio. La calidad no es solamente una característica técnica. También es parte de la percepción que generas."
					/>
				</Container>
			</Section>

			{/* ————— WOW 04 · panel lightgray, imagen desde fuera ————— */}
			<section aria-label="Detalle de calidad" className="overflow-hidden bg-lightgrey text-midnight">
				<Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
					<div>
						<Eyebrow light>Detalle — Acabado</Eyebrow>
						<Reveal>
							<p className="font-display text-2xl font-light uppercase leading-snug tracking-wide text-midnight/90 sm:text-3xl">
								Cada punto de contacto construye percepción: el papel
								que eliges, el color que logras, el acabado que se
								siente al tacto.
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
					<Drift from="10%" to="-7%">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/background.webp"
							alt="Detalle de impresión — color y acabado"
							loading="lazy"
							className="h-[46svh] w-[86vw] rounded-3xl object-cover sm:h-[56svh] lg:h-[68svh] lg:w-[50vw]"
						/>
					</Drift>
				</Container>
				<Container className="pb-16 sm:pb-24">
					<div className="grid gap-5 md:grid-cols-2">
						<ImageReveal
							src="/background%202.webp"
							alt="Taller de impresión Graphics Impresos"
							ratio="aspect-[4/3]"
						/>
						<ClipOpen
							src="/offset.jpg"
							alt="Prensa offset en producción"
							className="aspect-[4/3]"
						/>
					</div>
				</Container>
			</section>

			{/* ————— 07 CTA ————— */}
			<SiteCTA />
		</main>
	);
}
