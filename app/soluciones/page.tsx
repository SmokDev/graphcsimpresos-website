import type { Metadata } from "next";
import { HeroSection, Container, Eyebrow, Section } from "@/components/ui/sections";
import { CTA } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import ParallaxImage from "@/components/ui/parallax-image";
import SiteCTA from "@/components/site-cta";
import { Lines, Reveal } from "@/components/motion/reveal";
import { SOLUTIONS } from "@/utils/site";
import { Check } from "lucide-react";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
	title: "Soluciones de impresión para empresas y negocios",
	description:
		"Impresión de identidad corporativa, publicidad y promoción, packaging, etiquetas, cajas, artículos promocionales y uniformes corporativos en CDMX.",
	alternates: { canonical: "/soluciones" },
};

const IMAGES = ["/background.webp", "/offset.jpg", "/background%202.webp", "/offset.jpg"];

export default function SolucionesPage() {
	return (
		<main className="w-full bg-midnight">
			<HeroSection
				kicker="Soluciones · Catálogo"
				sub="Desde materiales corporativos hasta packaging y publicidad, desarrollamos y producimos soluciones gráficas adaptadas a cada proyecto."
				actions={
					<CTA href="/cotizaciones">Solicitar cotización</CTA>
				}
				meta={["Identidad", "Publicidad", "Packaging", "Uniformes"]}
			>
				{["Soluciones de impresión", "para empresas", "y negocios."]}
			</HeroSection>

			{SOLUTIONS.map((s, i) => (
				<section
					key={s.slug}
					id={s.slug}
					aria-labelledby={`${s.slug}-title`}
					className={cn(
						"scroll-mt-24 border-t border-lightgrey/10",
						i % 2 === 1 && "bg-midnight-deep/60"
					)}
				>
					<Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
						<Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
							<div className="overflow-hidden rounded-3xl">
								<ParallaxImage
									src={IMAGES[i % IMAGES.length]}
									alt={`${s.title} — Graphics Impresos`}
									className="aspect-[4/3]"
								/>
							</div>
						</Reveal>
						<div className={cn("flex flex-col justify-center", i % 2 === 1 && "lg:order-1")}>
							<Reveal>
								<p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-mint">
									<span className="font-display text-sm">/{s.n}</span>
									<span aria-hidden className="h-px w-8 bg-mint" />
									Solución {s.n}
								</p>
							</Reveal>
							<Heading level={2} id={`${s.slug}-title`}>
								<Lines lines={[s.title]} />
							</Heading>
							<Reveal delay={0.1}>
								<p className="mt-4 font-display text-xl font-light uppercase tracking-wide text-mint sm:text-2xl">
									{s.headline}
								</p>
							</Reveal>
							{s.slug === "identidad-corporativa" && (
								<Reveal delay={0.14}>
									<p className="mt-4 max-w-lg leading-relaxed text-lightgrey/75">
										Los materiales corporativos forman parte de la
										experiencia que construyes con tus clientes. Creamos
										y producimos piezas que ayudan a mantener una imagen
										profesional y coherente.
									</p>
								</Reveal>
							)}
							{s.slug === "publicidad-promocion" && (
								<Reveal delay={0.14}>
									<p className="mt-4 max-w-lg leading-relaxed text-lightgrey/75">
										Materiales impresos para comunicar promociones,
										presentar productos, generar presencia y apoyar
										campañas publicitarias.
									</p>
								</Reveal>
							)}
							{s.slug === "packaging" && (
								<Reveal delay={0.14}>
									<p className="mt-4 max-w-lg leading-relaxed text-lightgrey/75">
										El empaque es uno de los puntos de contacto más
										importantes entre una marca y sus clientes.
										Desarrollamos y producimos soluciones de packaging
										que ayudan a presentar tus productos de manera
										profesional y coherente con tu identidad.
									</p>
								</Reveal>
							)}
							{s.slug === "uniformes" && (
								<Reveal delay={0.14}>
									<p className="mt-4 max-w-lg leading-relaxed text-lightgrey/75">
										Los uniformes ayudan a construir una imagen
										reconocible y profesional en cada interacción con
										tus clientes.
									</p>
								</Reveal>
							)}
							<ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
								{s.items.map((item) => (
									<li
										key={item}
										className="flex items-center gap-2.5 rounded-full border border-lightgrey/12 px-4 py-2.5 text-sm text-lightgrey/85"
									>
										<Check className="h-4 w-4 shrink-0 text-mint" aria-hidden />
										{item}
									</li>
								))}
							</ul>
							{s.slug === "packaging" && (
								<Reveal delay={0.1}>
									<p className="mt-6 border-l-2 border-mint pl-5 font-display text-lg font-light uppercase tracking-wide text-lightgrey/90">
										Haz tangible la experiencia de tu marca.
									</p>
								</Reveal>
							)}
						</div>
					</Container>
				</section>
			))}

			{/* Asesoría diferencial */}
			<Section aria-labelledby="asesoria" className="bg-midnight-deep/60">
				<Container className="text-center sm:text-left">
					<div className="mx-auto max-w-3xl sm:mx-0">
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
							<blockquote className="mt-8 border-l-2 border-mint pl-5 text-left font-display text-xl font-light uppercase leading-snug text-lightgrey/90 sm:text-2xl">
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
