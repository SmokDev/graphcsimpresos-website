import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/sections";
import { CTA } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import ParallaxImage from "@/components/ui/parallax-image";
import { Counter, Lines, Reveal } from "@/components/motion/reveal";
import { ClipOpen, Drift, ScrollRise, Words } from "@/components/motion/scroll";
import { SITE } from "@/utils/site";
import { cn } from "@/utils/cn";
import HowWeWork from "@/components/sections/how-we-work";

export const metadata: Metadata = {
	title: "Presentación — Graphics Impresos",
	description:
		"Presentación de Graphics Impresos: quiénes somos, soluciones, clientes y calidad. Material para compartir.",
	robots: { index: false, follow: false, nocache: true },
};

const CHAPTER = "text-[11px] uppercase tracking-[0.3em] text-mint";

const SOLUCIONES = [
	{
		n: "01",
		title: "Identidad corporativa",
		copy: "Tarjetas, papelería, carpetas, sobres y formatos que mantienen tu imagen profesional y coherente.",
		image: "/papeleria%20corporativa.webp",
	},
	{
		n: "02",
		title: "Publicidad y promoción",
		copy: "Flyers, posters, brochures y catálogos para que tu mensaje llegue más lejos.",
		image: "/Flyers%20festival.webp",
	},
	{
		n: "03",
		title: "Packaging",
		copy: "Cajas, etiquetas y empaques que hacen tangible la experiencia de tu marca.",
		image: "/packaging%20premium.webp",
	},
	{
		n: "04",
		title: "Uniformes corporativos",
		copy: "Prendas personalizadas para un equipo reconocible y profesional.",
		image: "/playera%20nova%20craft.webp",
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

const CALIDAD = ["Material", "Color", "Formato", "Acabado", "Impresión", "Terminados"];

export default function PresentacionPage() {
	return (
		<main className="w-full bg-midnight">
			{/* ————— Portada ————— */}
			<div className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-midnight text-lightgrey">
				<div className="absolute inset-0">
					<ParallaxImage
						src="/graphics%20impresos%20offset%20impreta.webp"
						alt="Prensa offset — Graphics Impresos"
						className="absolute inset-0"
						strength={0.14}
						eager
					/>
					<div className="absolute inset-0 bg-midnight/55" />
					<div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />
				</div>
				<div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-14 pt-36 sm:px-10">
					<Reveal>
						<p className={cn(CHAPTER, "flex items-center gap-3")}>
							<span aria-hidden className="h-px w-10 bg-mint" />
							Presentación — Graphics Impresos
						</p>
					</Reveal>
					<h1 className="mt-5 max-w-6xl font-display text-[12vw] font-medium uppercase leading-[0.93] tracking-tight sm:text-7xl lg:text-8xl">
						<Lines
							lines={["Diseñamos tu idea,", "imprimimos tu éxito."]}
						/>
					</h1>
					<Reveal delay={0.2}>
						<p className="mt-6 flex items-center gap-4">
							<span className="font-display text-5xl font-medium text-mint sm:text-6xl">
								<Counter to={25} suffix="+" />
							</span>
							<span className="text-[11px] uppercase tracking-[0.28em] text-lightgrey/70">
								años convirtiendo
								<br />
								ideas en soluciones
							</span>
						</p>
					</Reveal>
				</div>
			</div>

			{/* ————— 01 Quiénes somos ————— */}
			<section aria-labelledby="p-quienes" className="bg-midnight py-20 sm:py-28">
				<Container>
					<Eyebrow>01 — Quiénes somos</Eyebrow>
					<Heading level={2} id="p-quienes" className="max-w-4xl">
						<Lines lines={["No solo imprimimos.", "Entendemos lo que necesitas."]} />
					</Heading>
					<div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
						<div className="space-y-4">
							<Words
								className="leading-relaxed text-lightgrey/85 sm:text-lg"
								text="Somos una empresa con más de 25 años transformando ideas y necesidades de comunicación en soluciones impresas."
							/>
							<Words
								className="leading-relaxed text-lightgrey/85 sm:text-lg"
								text="Combinamos asesoría, diseño y producción personalizada para ir más allá de simplemente imprimir."
							/>
						</div>
						<ClipOpen
							src="/graphicsimresos%20personal%20imrenta.webp"
							alt="Equipo de Graphics Impresos"
							className="aspect-[16/10] rounded-3xl"
						/>
					</div>
				</Container>
			</section>

			{/* ————— 02 Cómo trabajamos ————— */}
			<HowWeWork headingId="p-proceso" eyebrow="02 — Cómo trabajamos" />

			{/* ————— 03 Tu marca también se imprime ————— */}
			<section aria-labelledby="p-marca" className="overflow-hidden bg-midnight py-20 sm:py-28">
				<Container>
					<Eyebrow>03 — El concepto</Eyebrow>
				</Container>
				<Drift from="4%" to="-22%" className="mt-4">
					<p className="whitespace-nowrap font-display text-[19vw] font-medium uppercase leading-[0.9] tracking-tight lg:text-[13rem]">
						<span className="text-outline">Tu marca </span>
						<span className="text-lightgrey">también se imprime</span>
					</p>
				</Drift>
				<Container className="mt-10 grid items-center gap-10 lg:grid-cols-2">
					<div>
						<Heading level={2} id="p-marca" className="max-w-xl text-mint">
							<Lines lines={["Hacemos tangible", "tu marca."]} />
						</Heading>
						<Words
							className="mt-5 max-w-xl leading-relaxed text-lightgrey/85 sm:text-lg"
							text="Tu marca vive en el empaque que recibe tu cliente, la tarjeta que guarda y cada material que toca. Cada punto de contacto construye percepción."
						/>
					</div>
					<ParallaxImage
						src="/graphics%20impresos%20bag.webp"
						alt="Empaque de marca — Graphics Impresos"
						className="aspect-[4/3] rounded-3xl"
					/>
				</Container>
			</section>

			{/* ————— 03 Soluciones ————— */}
			<section aria-labelledby="p-soluciones" className="bg-lightgrey py-20 text-midnight sm:py-28">
				<Container>
					<Eyebrow light>04 — Soluciones</Eyebrow>
					<Heading level={2} id="p-soluciones" className="max-w-3xl">
						<Lines lines={["Todo lo que tu marca", "necesita en impreso."]} />
					</Heading>
					<div className="mt-12 grid gap-5 md:grid-cols-2">
						{SOLUCIONES.map((s, i) => (
							<Reveal
								key={s.n}
								delay={Math.min(i * 0.06, 0.18)}
								y={0}
								x={i % 2 === 0 ? -36 : 36}
								className="group overflow-hidden rounded-3xl bg-midnight text-lightgrey"
							>
								<article>
									<div className="h-56 overflow-hidden sm:h-64">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={s.image}
											alt={s.title}
											loading="lazy"
											className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
										/>
									</div>
									<div className="flex items-start gap-4 p-7 sm:p-8">
										<span className="font-display text-sm text-mint">/{s.n}</span>
										<div>
											<h3 className="font-display text-2xl font-medium uppercase tracking-tight">
												{s.title}
											</h3>
											<p className="mt-2 text-[15px] leading-relaxed text-lightgrey/70">
												{s.copy}
											</p>
										</div>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</Container>
			</section>

			{/* ————— 04 Para quién trabajamos ————— */}
			<section aria-labelledby="p-clientes" className="bg-midnight py-20 sm:py-28">
				<Container>
					<Eyebrow>05 — Para quién trabajamos</Eyebrow>
					<Heading level={2} id="p-clientes" className="max-w-4xl">
						<Lines lines={["Negocios que quieren", "verse a la altura", "de lo que hacen."]} />
					</Heading>
					<ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
						{CLIENTES.map((c, i) => (
							<Reveal
								key={c}
								delay={Math.min(i * 0.04, 0.3)}
								as="li"
								y={0}
								x={i % 2 === 0 ? -24 : 24}
								className="flex items-baseline gap-4 border-b border-lightgrey/12 py-4"
							>
								<span className="font-display text-xs text-mint">
									{String(i + 1).padStart(2, "0")}
								</span>
								<span className="font-display text-xl font-light uppercase tracking-wide text-lightgrey/90 sm:text-2xl">
									{c}
								</span>
							</Reveal>
						))}
					</ul>
				</Container>
			</section>

			{/* ————— 05 Calidad ————— */}
			<section aria-labelledby="p-calidad" className="overflow-hidden bg-lightgrey py-20 text-midnight sm:py-28">
				<Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
					<div>
						<Eyebrow light>06 — Calidad</Eyebrow>
						<Heading level={2} id="p-calidad">
							<Lines lines={["La calidad", "también comunica."]} />
						</Heading>
						<Words
							className="mt-5 max-w-xl leading-relaxed text-midnight/80 sm:text-lg"
							text="La calidad no es solamente una característica técnica. Es parte de la percepción que generas. Por eso cuidamos cada elemento."
						/>
						<ul className="mt-8 flex flex-wrap gap-2.5">
							{CALIDAD.map((q, i) => (
								<Reveal
									key={q}
									as="li"
									delay={Math.min(i * 0.05, 0.25)}
									y={14}
									className="rounded-full border border-midnight/20 px-4 py-2 text-sm text-midnight/85"
								>
									{q}
								</Reveal>
							))}
						</ul>
					</div>
					<ClipOpen
						src="/graphicsimpresos%20impreta%20revision%20de%20calida%20offset.webp"
						alt="Revisión de calidad en offset"
						className="aspect-[4/3] rounded-3xl"
					/>
				</Container>
			</section>

			{/* ————— Cierre ————— */}
			<section aria-label="Contacto" className="relative overflow-hidden bg-mint py-20 text-midnight sm:py-28">
				<Drift
					from="1%"
					to="-18%"
					className="pointer-events-none absolute top-6 left-0 select-none"
				>
					<p
						aria-hidden
						className="whitespace-nowrap font-display text-[22vw] font-medium uppercase leading-none text-midnight/[0.07] lg:text-[12rem]"
					>
						Hagámosla realidad — Hagámosla realidad
					</p>
				</Drift>
				<Container className="relative">
					<Eyebrow light>Cierre</Eyebrow>
					<h2 className="max-w-4xl font-display text-[11vw] font-medium uppercase leading-[0.95] tracking-tight sm:text-7xl">
						<Lines lines={["¿Tienes una idea?", "Hagámosla realidad."]} />
					</h2>
					<ScrollRise className="mt-8">
						<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
							<CTA href="/cotizaciones" variant="dark">
								Solicitar cotización
							</CTA>
							<p className="text-[15px] text-midnight/75">
								<a href={SITE.phoneHref} className="underline underline-offset-4">
									{SITE.phone}
								</a>{" "}
								·{" "}
								<a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
									{SITE.email}
								</a>
							</p>
						</div>
					</ScrollRise>
					<Reveal delay={0.1} className="mt-10">
						<Link
							href="/"
							className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-midnight/70 transition-colors hover:text-midnight"
						>
							<span className="border-b border-midnight/25 pb-1 transition-colors group-hover:border-midnight">
								Volver al sitio
							</span>
							<ArrowUpRight className="h-4 w-4" aria-hidden />
						</Link>
					</Reveal>
				</Container>
			</section>
		</main>
	);
}
