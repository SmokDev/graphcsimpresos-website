import type { Metadata } from "next";
import { HeroSection, Container, Eyebrow, Section } from "@/components/ui/sections";
import { TextLink } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import ParallaxImage from "@/components/ui/parallax-image";
import SiteCTA from "@/components/site-cta";
import { Counter, Lines, Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
	title: "Nosotros — Imprenta con experiencia en soluciones gráficas",
	description:
		"Empresa de impresión con más de 25 años de experiencia. No solo imprimimos: entendemos lo que necesitas. Asesoría, diseño y producción en CDMX.",
	alternates: { canonical: "/nosotros" },
};

const STEPS = [
	{ n: "01", title: "Entendemos", copy: "Conocemos tu necesidad y objetivo." },
	{ n: "02", title: "Asesoramos", copy: "Te ayudamos a definir la solución adecuada." },
	{ n: "03", title: "Diseñamos", copy: "Desarrollamos o adaptamos la propuesta." },
	{ n: "04", title: "Producimos", copy: "Convertimos la idea en una pieza física." },
];

const AUDIENCES = [
	"Empresas",
	"PyMEs",
	"Emprendedores",
	"Comercios",
	"Marcas de productos",
	"Restaurantes y negocios de alimentos",
	"Profesionales",
	"Agencias y diseñadores",
	"Organizadores de eventos",
	"Turismo y agencias de viajes",
];

export default function NosotrosPage() {
	return (
		<main className="w-full bg-midnight">
			<HeroSection
				useAltBackground
				kicker="Nosotros · Quiénes somos"
				sub="Más de 25 años acompañando a empresas y negocios a materializar sus ideas."
				meta={["Desde hace 25+ años", "Asesoría · Diseño · Producción"]}
			>
				{["Experiencia que", "se convierte", "en soluciones."]}
			</HeroSection>

			{/* Quiénes somos */}
			<Section aria-labelledby="quienes">
				<Container>
					<Eyebrow>Quiénes somos</Eyebrow>
					<Heading level={2} id="quienes" className="max-w-4xl">
						<Lines lines={["No solo imprimimos.", "Entendemos lo que necesitas."]} />
					</Heading>
					<div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
						<Reveal>
							<div className="space-y-4 leading-relaxed text-lightgrey/78">
								<p>
									Somos una empresa especializada en transformar ideas y
									necesidades de comunicación en soluciones impresas.
								</p>
								<p>
									Durante más de 25 años hemos acompañado a negocios y
									empresas en la creación y producción de materiales que
									les ayudan a comunicar, promocionar y fortalecer su
									imagen.
								</p>
							</div>
						</Reveal>
						<Reveal delay={0.1}>
							<div className="space-y-4 leading-relaxed text-lightgrey/78">
								<p>
									Hoy combinamos nuestra experiencia en impresión con
									asesoría, diseño y producción personalizada para ofrecer
									soluciones que van más allá de simplemente imprimir.
								</p>
								<div className="pt-2">
									<TextLink href="/soluciones">Ver lo que producimos</TextLink>
								</div>
							</div>
						</Reveal>
					</div>
				</Container>
			</Section>

			{/* Visión */}
			<section aria-labelledby="vision" className="relative overflow-hidden bg-midnight-deep">
				<div className="relative min-h-[80svh] w-full">
					<ParallaxImage
						src="/background.webp"
						alt="Taller de impresión — Graphics Impresos"
						className="absolute inset-0"
					/>
					<div className="absolute inset-0 bg-midnight-deep/78" />
					<Container className="relative flex min-h-[80svh] flex-col justify-center py-20">
						<Eyebrow>Nuestra visión</Eyebrow>
						<Heading level={2} id="vision" className="max-w-3xl">
							<Lines lines={["Cada proyecto", "comienza con", "una necesidad."]} />
						</Heading>
						<Reveal delay={0.15}>
							<blockquote className="mt-8 border-l-2 border-mint pl-6">
								<p className="font-display text-3xl font-light uppercase tracking-tight text-mint sm:text-5xl">
									“¿Qué necesitas lograr?”
								</p>
							</blockquote>
						</Reveal>
						<Reveal delay={0.2}>
							<div className="mt-8 max-w-xl space-y-4 leading-relaxed text-lightgrey/80">
								<p>
									En Graphics Impresos no partimos solamente de la
									pregunta: “¿Qué quieres imprimir?” Partimos de una
									pregunta más importante: “¿Qué necesitas lograr?”
								</p>
								<p>
									A partir de ahí encontramos la mejor manera de convertir
									esa necesidad en una solución gráfica. No se trata
									solamente de poner tinta sobre papel. Se trata de
									convertir una idea en algo que puedas ver, tocar y
									compartir con tus clientes.
								</p>
							</div>
						</Reveal>
					</Container>
				</div>
			</section>

			{/* Experiencia band */}
			<section aria-label="Trayectoria" className="border-y border-lightgrey/10 bg-midnight">
				<Container className="flex flex-col items-start gap-4 py-14 sm:flex-row sm:items-center sm:gap-10 sm:py-20">
					<Reveal>
						<p className="font-display text-[clamp(4.5rem,14vw,10rem)] font-medium leading-none text-mint">
							<Counter to={25} suffix="+" />
						</p>
					</Reveal>
					<Reveal delay={0.1}>
						<div>
							<Heading level={2} className="max-w-xl">
								años de experiencia
							</Heading>
							<p className="mt-3 max-w-xl leading-relaxed text-lightgrey/70">
								La experiencia como un activo que genera confianza: miles
								de proyectos nos respaldan, y cada uno empezó con una
								conversación.
							</p>
						</div>
					</Reveal>
				</Container>
			</section>

			{/* Cómo trabajamos */}
			<Section aria-labelledby="como">
				<Container>
					<Eyebrow>Cómo trabajamos</Eyebrow>
					<Heading level={2} id="como" className="max-w-2xl">
						<Lines lines={["Un proceso claro,", "de principio a fin."]} />
					</Heading>
					<ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-lightgrey/10 bg-lightgrey/10 sm:grid-cols-2 lg:grid-cols-4">
						{STEPS.map((s, i) => (
							<Reveal
								key={s.n}
								delay={i * 0.07}
								as="li"
								className="group flex h-full flex-col gap-3 bg-midnight p-7 transition-colors duration-500 hover:bg-midnight-deep sm:p-8"
							>
								<span className="font-display text-sm tracking-[0.2em] text-mint">
									{s.n}
								</span>
								<h3 className="font-display text-2xl font-medium uppercase">
									{s.title}
								</h3>
								<p className="text-[15px] leading-relaxed text-lightgrey/65">
									{s.copy}
								</p>
							</Reveal>
						))}
					</ol>
				</Container>
			</Section>

			{/* Para quién */}
			<section aria-labelledby="clientes" className="bg-lightgrey py-20 text-midnight sm:py-28">
				<Container>
					<Eyebrow light>Para quién trabajamos</Eyebrow>
					<Heading level={2} id="clientes" className="max-w-4xl">
						<Lines
							lines={["Para negocios que quieren", "verse a la altura", "de lo que hacen."]}
						/>
					</Heading>
					<ul className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
						{AUDIENCES.map((a, i) => (
							<Reveal
								key={a}
								delay={Math.min(i * 0.04, 0.3)}
								as="li"
								className="flex items-baseline gap-4 border-b border-midnight/12 py-4"
							>
								<span className="font-display text-xs text-mint">
									{String(i + 1).padStart(2, "0")}
								</span>
								<span className="font-display text-xl font-light uppercase tracking-wide sm:text-2xl">
									{a}
								</span>
							</Reveal>
						))}
					</ul>
					<Reveal delay={0.1}>
						<p className="mt-10 max-w-2xl border-l-2 border-mint pl-5 font-display text-xl font-light uppercase leading-snug text-midnight/85 sm:text-2xl">
							La forma en que presentas tu negocio también comunica su valor.
						</p>
					</Reveal>
				</Container>
			</section>

			<SiteCTA
				kicker="Conversemos"
				title={["Hablemos de tu", "próximo proyecto."]}
				copy="Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor manera de hacerlo realidad."
			/>
		</main>
	);
}
