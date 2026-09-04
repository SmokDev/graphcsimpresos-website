import type { Metadata } from "next";
import { HeroSection, Container, Eyebrow, Section } from "@/components/ui/sections";
import { CTA } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import ParallaxImage from "@/components/ui/parallax-image";
import SiteCTA from "@/components/site-cta";
import { Lines, Reveal } from "@/components/motion/reveal";
import { ClipOpen, Drift } from "@/components/motion/scroll";
import { SOLUTIONS } from "@/utils/site";
import { Check } from "lucide-react";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
	title: "Soluciones de impresión para empresas y negocios",
	description:
		"Impresión de identidad corporativa, publicidad y promoción, packaging, etiquetas, cajas, artículos promocionales y uniformes corporativos en CDMX.",
	alternates: { canonical: "/soluciones" },
};

type Variant = "standard" | "bleed" | "clip" | "drift";

const ART: { image: string; variant: Variant; align: "left" | "right"; mobile: "light" | "dark"; position?: string }[] = [
	{ image: "/background%202.webp", variant: "bleed", align: "left", mobile: "dark" },
	{ image: "/offset.jpg", variant: "bleed", align: "left", mobile: "dark" },
	{ image: "/background.webp", variant: "bleed", align: "left", mobile: "dark" },
	{ image: "/background.webp", variant: "bleed", align: "left", mobile: "dark", position: "object-bottom" },
];

const DESCRIPTIONS: Record<string, React.ReactNode> = {
	"identidad-corporativa": (
		<p className="mt-4 max-w-lg leading-relaxed">
			Los materiales corporativos forman parte de la experiencia que construyes
			con tus clientes. Creamos y producimos piezas que ayudan a mantener una
			imagen profesional y coherente.
		</p>
	),
	"publicidad-promocion": (
		<p className="mt-4 max-w-lg leading-relaxed">
			Materiales impresos para comunicar promociones, presentar productos,
			generar presencia y apoyar campañas publicitarias.
		</p>
	),
	packaging: (
		<p className="mt-4 max-w-lg leading-relaxed">
			El empaque es uno de los puntos de contacto más importantes entre una
			marca y sus clientes. Desarrollamos y producimos soluciones de packaging
			que ayudan a presentar tus productos de manera profesional y coherente
			con tu identidad.
		</p>
	),
	uniformes: (
		<p className="mt-4 max-w-lg leading-relaxed">
			Los uniformes ayudan a construir una imagen reconocible y profesional en
			cada interacción con tus clientes.
		</p>
	),
};

function SolutionPanel({
	index,
	n,
	slug,
	title,
	headline,
	items,
}: {
	index: number;
	n: string;
	slug: string;
	title: string;
	headline: string;
	items: readonly string[];
}) {
	const art = ART[index % ART.length];
	const light = art.mobile === "light";

	return (
		<section
			id={slug}
			aria-labelledby={`${slug}-title`}
			className="relative scroll-mt-20 border-t border-lightgrey/10"
		>
			{/* ——— Imagen: bloque en mobile, full-viewport en desktop ——— */}
			<div className="relative h-[54svh] min-h-[340px] overflow-hidden lg:h-[104svh]">
				{art.variant === "clip" ? (
					<ClipOpen
						src={art.image}
						alt={`${title} — Graphics Impresos`}
						className="absolute inset-0"
					/>
				) : (
					<ParallaxImage
						src={art.image}
						alt={`${title} — Graphics Impresos`}
						className="absolute inset-0"
						imgClassName={art.position}
						strength={art.variant === "bleed" ? 0.2 : 0.12}
					/>
				)}
				{/* blend con la sección anterior + legibilidad (desktop) */}
				<div className="absolute inset-x-0 top-0 hidden h-48 bg-gradient-to-b from-midnight to-transparent lg:block" />
				<div className="absolute inset-0 hidden bg-gradient-to-t from-midnight via-midnight/25 to-transparent lg:block" />

				{/* ——— Números gigantes (desktop) ——— */}
				{art.variant === "standard" && (
					<span
						aria-hidden
						className="absolute right-6 top-10 hidden font-display text-[15vw] font-medium leading-none text-outline lg:block"
					>
						{n}
					</span>
				)}
				{art.variant === "bleed" && (
					<span
						aria-hidden
						className="absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[27vw] font-medium leading-none text-lightgrey/10 lg:block"
					>
						{n}
					</span>
				)}
				{art.variant === "clip" && (
					<span
						aria-hidden
						className="absolute bottom-8 right-8 hidden font-display text-[13vw] font-medium leading-none text-outline lg:block"
					>
						/{n}
					</span>
				)}
				{art.variant === "drift" && (
					<Drift from="6%" to="-14%" className="absolute left-0 top-12 hidden lg:block">
						<span
							aria-hidden
							className="whitespace-nowrap font-display text-[13vw] font-medium uppercase leading-none text-lightgrey/12"
						>
							{title} — {title}
						</span>
					</Drift>
				)}
			</div>

			{/* ——— Contenido: panel en mobile, overlay en desktop ——— */}
			<div
				className={cn(
					"relative z-10 -mt-6 rounded-t-[1.75rem] px-5 py-12 sm:px-10 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-end lg:rounded-none lg:bg-transparent lg:px-10 lg:py-0 lg:pb-16",
					light ? "bg-lightgrey text-midnight" : "bg-midnight-deep text-lightgrey"
				)}
			>
				<div
					className={cn(
						"mx-auto w-full max-w-7xl",
						art.align === "right" && "lg:flex lg:justify-end"
					)}
				>
					<div className={cn(art.align === "right" && "lg:max-w-2xl")}>
						<Reveal>
							<p
								className={cn(
									"mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em]",
									light ? "text-mint [filter:saturate(1.4)_brightness(0.72)]" : "text-mint"
								)}
							>
								<span className="font-display text-sm">/{n}</span>
								<span aria-hidden className="h-px w-8 bg-current" />
								Solución {n}
							</p>
						</Reveal>
						<Heading
							level={2}
							id={`${slug}-title`}
							className={cn(light && "lg:text-lightgrey")}
						>
							<Lines lines={[title]} />
						</Heading>
						<Reveal delay={0.08}>
							<p
								className={cn(
									"mt-4 font-display text-xl font-light uppercase tracking-wide sm:text-2xl",
									light ? "text-midnight lg:text-mint" : "text-mint"
								)}
							>
								{headline}
							</p>
						</Reveal>
						<Reveal
							delay={0.12}
							className={cn(
								light ? "text-midnight/75 lg:text-lightgrey/80" : "text-lightgrey/75 lg:text-lightgrey/80"
							)}
						>
							{DESCRIPTIONS[slug]}
						</Reveal>
						<ul className="mt-7 flex flex-wrap gap-2.5">
							{items.map((item) => (
								<li
									key={item}
									className={cn(
										"flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm",
										light
											? "border-midnight/20 text-midnight/85 lg:border-lightgrey/30 lg:text-lightgrey/85"
											: "border-lightgrey/20 text-lightgrey/85"
									)}
								>
									<Check className="h-4 w-4 shrink-0 text-mint" aria-hidden />
									{item}
								</li>
							))}
						</ul>
						{slug === "packaging" && (
							<Reveal delay={0.1}>
								<p
									className={cn(
										"mt-6 border-l-2 border-mint pl-5 font-display text-lg font-light uppercase tracking-wide",
										light ? "text-midnight lg:text-lightgrey/90" : "text-lightgrey/90"
									)}
								>
									Haz tangible la experiencia de tu marca.
								</p>
							</Reveal>
						)}
						<Reveal delay={0.15}>
							<div className="mt-8">
								<CTA
									href="/cotizaciones"
									variant={light ? "dark" : "solid"}
									aria-label={`Solicitar cotización de ${title}`}
								>
									Solicitar cotización
								</CTA>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function SolucionesPage() {
	return (
		<main className="w-full bg-midnight">
			<HeroSection
				kicker="Soluciones · Catálogo"
				sub="Desde materiales corporativos hasta packaging y publicidad, desarrollamos y producimos soluciones gráficas adaptadas a cada proyecto."
				actions={<CTA href="/cotizaciones">Solicitar cotización</CTA>}
				meta={["Identidad", "Publicidad", "Packaging", "Uniformes"]}
			>
				{["Soluciones de impresión", "para empresas", "y negocios."]}
			</HeroSection>

			{SOLUTIONS.map((s, i) => (
				<SolutionPanel
					key={s.slug}
					index={i}
					n={s.n}
					slug={s.slug}
					title={s.title}
					headline={s.headline}
					items={s.items}
				/>
			))}

			{/* Asesoría diferencial */}
			<Section aria-labelledby="asesoria" className="bg-midnight-deep/60">
				<Container>
					<div className="max-w-3xl">
						<Eyebrow>Asesoría incluida</Eyebrow>
						<Heading level={2} id="asesoria">
							<Lines lines={["No tienes que saber", "exactamente qué imprimir."]} />
						</Heading>
						<Reveal delay={0.12}>
							<p className="mt-5 leading-relaxed text-lightgrey/78 sm:text-lg">
								Cuéntanos qué necesitas lograr y nosotros te ayudamos a
								encontrar la solución. Podemos orientarte sobre:
							</p>
						</Reveal>
						<Reveal delay={0.18}>
							<p className="mt-6 font-display text-lg font-light uppercase tracking-[0.14em] text-mint sm:text-xl">
								Materiales · Formatos · Acabados · Producción · Cantidades
							</p>
						</Reveal>
						<Reveal delay={0.22}>
							<blockquote className="mt-8 border-l-2 border-mint pl-5 font-display text-xl font-light uppercase leading-snug text-lightgrey/90 sm:text-2xl">
								Nuestra labor no comienza cuando imprimimos. Comienza
								cuando entendemos tu proyecto.
							</blockquote>
						</Reveal>
					</div>
				</Container>
			</Section>

			<SiteCTA
				kicker="Tu proyecto"
				title={["Cuéntanos qué quieres", "hacer realidad."]}
			/>
		</main>
	);
}
