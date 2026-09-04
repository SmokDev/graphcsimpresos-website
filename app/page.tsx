import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroSection, Container, Eyebrow, Section } from "@/components/ui/sections";
import { CTA, TextLink } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import ParallaxImage from "@/components/ui/parallax-image";
import SiteCTA from "@/components/site-cta";
import { Counter, ImageReveal, Lines, Marquee, Reveal } from "@/components/motion/reveal";
import { SOLUTIONS } from "@/utils/site";

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

const QUALITY = ["Material", "Color", "Formato", "Acabado", "Impresión", "Terminados"];

export default function HomePage() {
	return (
		<main className="w-full bg-midnight">
			{/* ————— HERO ————— */}
			<HeroSection
				kicker="Imprenta · Asesoría · Diseño · Producción"
				sub="Más de 25 años ayudando a empresas, negocios y marcas a materializar su comunicación."
				actions={
					<>
						<CTA href="/cotizaciones">Cuéntanos tu proyecto</CTA>
						<CTA href="/soluciones" variant="ghost">
							Ver soluciones
						</CTA>
					</>
				}
				meta={["25+ años", "CDMX · México", "Asesoría + Diseño + Producción"]}
			>
				{["Convertimos", "tus ideas en", "soluciones impresas."]}
			</HeroSection>

			{/* ————— 02 EXPERIENCIA ————— */}
			<Section aria-labelledby="experiencia">
				<Container>
					<Eyebrow>02 — Experiencia</Eyebrow>
					<div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
						<Reveal>
							<p className="font-display leading-none">
								<Counter
									to={25}
									suffix="+"
									className="text-[clamp(6rem,18vw,13rem)] font-medium text-mint"
								/>
								<span className="mt-2 block text-[11px] uppercase tracking-[0.3em] text-lightgrey/60">
									años
								</span>
							</p>
						</Reveal>
						<div>
							<Heading level={2} id="experiencia" className="max-w-2xl">
								<Lines
									lines={["Más de 25 años", "convirtiendo ideas", "en soluciones."]}
								/>
							</Heading>
							<Reveal delay={0.15}>
								<div className="mt-6 max-w-xl space-y-4 leading-relaxed text-lightgrey/75">
									<p>
										Durante más de 25 años hemos acompañado a empresas,
										PyMEs, emprendedores y marcas en la creación y
										producción de materiales que les ayudan a comunicar,
										promocionar y fortalecer su imagen.
									</p>
									<p>
										Hoy combinamos nuestra experiencia en impresión con
										asesoría, diseño y producción personalizada.
									</p>
								</div>
							</Reveal>
							<Reveal delay={0.2}>
								<div className="mt-8">
									<TextLink href="/nosotros">Conoce quiénes somos</TextLink>
								</div>
							</Reveal>
						</div>
					</div>
				</Container>
			</Section>

			{/* ————— 03 CONCEPTO DE MARCA ————— */}
			<section aria-labelledby="marca" className="relative overflow-hidden bg-midnight-deep">
				<div className="relative h-[70svh] min-h-[480px] w-full sm:h-[85svh]">
					<ParallaxImage
						src="/offset.jpg"
						alt="Prensa offset en producción — Graphics Impresos"
						className="absolute inset-0"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight-deep/35 to-midnight/30" />
					<Container className="absolute inset-x-0 bottom-0 pb-14 sm:pb-20">
						<Eyebrow>03 — Marca</Eyebrow>
						<Heading level={2} id="marca" className="max-w-4xl">
							<Lines lines={["Tu marca", "también se imprime."]} />
						</Heading>
						<Reveal delay={0.15}>
							<p className="mt-5 max-w-xl leading-relaxed text-lightgrey/80">
								Una marca también vive en el empaque que recibe tu cliente,
								la tarjeta que guarda, la etiqueta que observa y cada
								material que toca. Cada punto de contacto construye
								percepción.
							</p>
						</Reveal>
						<Reveal delay={0.22}>
							<p className="mt-6 border-l-2 border-mint pl-5 font-display text-xl font-light uppercase tracking-wide text-mint sm:text-2xl">
								Nosotros ayudamos a hacerla tangible.
							</p>
						</Reveal>
					</Container>
				</div>
			</section>

			{/* ————— 04 PROCESO ————— */}
			<Section aria-labelledby="proceso" className="bg-midnight">
				<Container>
					<Eyebrow>04 — Proceso</Eyebrow>
					<Heading level={2} id="proceso" className="max-w-3xl">
						<Lines lines={["De la idea", "a la realidad."]} />
					</Heading>
					<Reveal delay={0.1}>
						<p className="mt-5 max-w-xl leading-relaxed text-lightgrey/75">
							Un buen resultado comienza mucho antes de imprimir. Integramos
							diferentes etapas del proceso para ofrecer una solución
							completa.
						</p>
					</Reveal>

					<div className="mt-12 flex flex-col gap-5">
						{PROCESS.map((step, i) => (
							<Reveal key={step.n} delay={i * 0.06}>
								<article className="group grid gap-4 rounded-3xl border border-lightgrey/10 bg-midnight-deep/50 p-7 transition-colors duration-500 hover:border-mint/40 sm:grid-cols-[auto_1fr_1.4fr] sm:items-baseline sm:gap-8 sm:p-10">
									<span className="font-display text-6xl font-medium text-outline transition-all duration-500 group-hover:text-mint group-hover:[-webkit-text-fill-color:var(--mint)] group-hover:[-webkit-text-stroke:0px] sm:text-7xl">
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

			{/* ————— 05 SOLUCIONES ————— */}
			<section aria-labelledby="soluciones" className="bg-lightgrey py-20 text-midnight sm:py-28 lg:py-36">
				<Container>
					<Eyebrow light>05 — Soluciones</Eyebrow>
					<div className="flex flex-wrap items-end justify-between gap-6">
						<Heading level={2} id="soluciones" className="max-w-3xl">
							<Lines lines={["Soluciones gráficas", "para cada necesidad."]} />
						</Heading>
						<Reveal delay={0.1}>
							<p className="max-w-sm leading-relaxed text-midnight/70">
								Creamos y producimos soluciones gráficas personalizadas para
								diferentes necesidades de comunicación.
							</p>
						</Reveal>
					</div>

					<ul className="mt-12 border-t border-midnight/15">
						{SOLUTIONS.map((s) => (
							<li key={s.slug} className="border-b border-midnight/15">
								<Link
									href="/soluciones"
									className="group grid items-center gap-4 py-7 transition-colors sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:py-9"
									aria-label={`${s.title} — ver en Soluciones`}
								>
									<span className="font-display text-sm tracking-[0.2em] text-mint">
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
							</li>
						))}
					</ul>
				</Container>
			</section>

			{/* ————— 06 CALIDAD ————— */}
			<Section aria-labelledby="calidad" className="overflow-hidden">
				<Container>
					<Eyebrow>06 — Calidad</Eyebrow>
					<Heading level={2} id="calidad" className="max-w-3xl">
						<Lines lines={["La calidad", "también comunica."]} />
					</Heading>
					<Reveal delay={0.12}>
						<p className="mt-5 max-w-xl leading-relaxed text-lightgrey/75">
							Un material impreso representa a tu negocio. La calidad no es
							solamente una característica técnica. También es parte de la
							percepción que generas.
						</p>
					</Reveal>
				</Container>
				<Reveal delay={0.1} className="mt-12">
					<Marquee speed={30} className="border-y border-lightgrey/10 py-6">
						{QUALITY.map((q) => (
							<span key={q} className="flex items-center gap-8 pr-8">
								<span className="whitespace-nowrap font-display text-4xl font-light uppercase tracking-tight text-lightgrey/85 sm:text-6xl">
									{q}
								</span>
								<span aria-hidden className="h-2.5 w-2.5 rounded-full bg-mint" />
							</span>
						))}
					</Marquee>
				</Reveal>
				<Container>
					<div className="mt-12 grid gap-5 md:grid-cols-2">
						<ImageReveal
							src="/background%202.webp"
							alt="Detalle de impresión — color y acabado"
							ratio="aspect-[4/3]"
						/>
						<ImageReveal
							src="/background.webp"
							alt="Taller de impresión Graphics Impresos"
							ratio="aspect-[4/3]"
						/>
					</div>
				</Container>
			</Section>

			{/* ————— 07 CTA ————— */}
			<SiteCTA />
		</main>
	);
}
