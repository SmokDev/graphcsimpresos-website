"use client";

import { HeroSection } from "@/components/ui/sections";
import { Reveal, Stagger, StaggerItem, LineReveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionTitle, Eyebrow } from "@/components/ui/section-title";
import ParallaxImage from "@/components/ui/parallax-image";
import Image from "next/image";
import { motion } from "motion/react";

const processSteps = [
	{
		num: "01",
		title: "Asesoría",
		desc: "Definimos materiales, formatos, acabados y posibilidades de producción. Entendemos qué necesitas lograr, no solo qué quieres imprimir.",
		bullets: ["Materiales", "Formatos", "Acabados", "Posibilidades"],
	},
	{
		num: "02",
		title: "Diseño",
		desc: "Desarrollamos o adaptamos propuestas visuales. Cada pieza representa cómo quieres que tu marca sea percibida.",
		bullets: ["Adaptación", "Propuestas", "Identidad", "Consistencia"],
	},
	{
		num: "03",
		title: "Producción",
		desc: "Convertimos ideas en piezas físicas con precisión, control de color y atención a cada detalle.",
		bullets: ["Color", "Precisión", "Detalles", "Entrega"],
	},
];

export default function HomeClient() {
	return (
		<main className="w-full bg-lightgrey">
			<HeroSection eyebrow="Graphics Impresos · Desde 1999" kicker="CDMX — Tacuba" meta="25 AÑOS">
				Más de 25 años
				<br />
				<span className="text-mint">convirtiendo</span> ideas
				<br />
				<span className="font-light normal-case tracking-tight text-[32px] md:text-[44px] block mt-2">en soluciones impresas.</span>
				<span className="mt-4 block text-[13px] md:text-sm tracking-[0.18em] uppercase text-lightgrey/60 font-sans">Diseñamos tu idea, imprimimos tu éxito.</span>
			</HeroSection>

			<Marquee items={["Materializar ideas", "Diseño · Producción", "La calidad también comunica", "Hacer tangible la marca", "25 años · Experiencia"]} />

			<section className="bg-lightgrey py-16 md:py-24 border-b border-midnight/5">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 grid md:grid-cols-12 gap-10 items-start">
					<div className="md:col-span-5">
						<Reveal>
							<p className="text-[11px] tracking-[0.24em] uppercase text-midnight/40">01 — Experiencia</p>
							<div className="mt-6 flex items-baseline gap-4">
								<span className="text-[96px] md:text-[140px] leading-none tracking-[-0.06em] font-medium text-midnight">25</span>
								<span className="text-sm tracking-[0.18em] uppercase text-midnight/50 leading-none">
									años
									<br />
									<span className="text-mint font-semibold">convirtiendo</span>
									<br />
									ideas
								</span>
							</div>
						</Reveal>
					</div>
					<div className="md:col-span-7 md:pl-8">
						<SectionTitle
							title={<>Experiencia que se convierte en <span className="text-mint">soluciones.</span></>}
							description="Combinamos más de 25 años de experiencia con una visión actual de diseño, asesoría y producción. No solo imprimimos: acompañamos desde la necesidad hasta el objeto tangible."
						/>
						<Stagger className="mt-10 grid grid-cols-3 gap-6 border-t border-midnight/10 pt-6">
							{[
								{ k: "Proyectos", v: "10k+" },
								{ k: "Clientes", v: "1.2k+" },
								{ k: "Tintas", v: "CMYK+" },
							].map((s) => (
								<StaggerItem key={s.k} className="space-y-1">
									<p className="text-2xl font-medium tracking-tight text-midnight">{s.v}</p>
									<p className="text-[11px] tracking-[0.14em] uppercase text-midnight/40">{s.k}</p>
								</StaggerItem>
							))}
						</Stagger>
					</div>
				</div>
			</section>

			<section className="bg-midnight text-lightgrey py-16 md:py-24 overflow-hidden relative">
				<div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url('/background%202.webp')`, backgroundSize: "cover" }} aria-hidden />
				<div className="relative mx-auto max-w-[1280px] px-6 md:px-10 grid lg:grid-cols-12 gap-12">
					<div className="lg:col-span-7">
						<Eyebrow>02 — La visión</Eyebrow>
						<h2 className="mt-4 text-[30px] md:text-[48px] leading-[0.95] tracking-[-0.04em] font-light">
							Cada proyecto
							<br />
							comienza con <span className="text-mint font-medium">una necesidad.</span>
						</h2>
						<LineReveal className="mt-8 h-px w-20 bg-mint" />
						<div className="mt-8 space-y-6 text-sm leading-relaxed text-lightgrey/70 max-w-xl">
							<p>
								No se trata solamente de preguntar <em className="text-lightgrey">“¿Qué quieres imprimir?”</em>
							</p>
							<p className="text-[22px] md:text-[28px] leading-tight tracking-tight text-lightgrey">
								Sino: <span className="text-mint">“¿Qué necesitas lograr?”</span>
							</p>
							<p>
								A partir de esa necesidad, encontramos la mejor manera de convertirla en una solución gráfica. No es solo tinta sobre papel: es
								algo que puedes <span className="text-lightgrey">ver, tocar y compartir</span>.
							</p>
							<p className="text-lightgrey/50">Desde una tarjeta hasta un empaque completo, cada pieza construye percepción.</p>
						</div>
						<div className="mt-10 flex flex-wrap gap-3">
							{["Ver", "Tocar", "Compartir"].map((w) => (
								<span key={w} className="inline-flex items-center gap-2 rounded-full border border-lightgrey/15 px-5 py-2 text-[11px] tracking-[0.16em] uppercase text-lightgrey/70">
									<span className="size-1 rounded-full bg-mint" /> {w}
								</span>
							))}
						</div>
					</div>
					<div className="lg:col-span-5">
						<div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-lightgrey/5 border border-lightgrey/10">
							<Image src="/offset.jpg" alt="Producción offset" fill className="object-cover" sizes="(max-width:768px)100vw,40vw" />
							<div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
							<div className="absolute bottom-0 p-6">
								<p className="text-xs tracking-[0.16em] uppercase text-lightgrey/60">No solo tinta sobre papel</p>
								<p className="mt-2 text-lg leading-tight text-lightgrey">Convertimos ideas en objetos que comunican quién eres.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-lightgrey border-y border-midnight/5">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-20">
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
						<div>
							<Eyebrow>03 — Proceso</Eyebrow>
							<h2 className="mt-3 text-[30px] md:text-[48px] tracking-[-0.04em] leading-none font-light text-midnight">
								De la <span className="font-medium text-mint">idea</span> a la realidad.
							</h2>
						</div>
						<p className="max-w-md text-sm leading-relaxed text-midnight/60">Idea → Diseño → Producción → Objeto tangible. Una narrativa guiada por scroll.</p>
					</div>
				</div>

				<div className="mx-auto max-w-[1280px] px-6 md:px-10 pb-16 md:pb-24 grid lg:grid-cols-12 gap-8">
					<div className="hidden lg:block lg:col-span-4">
						<div className="sticky top-28 space-y-6">
							<div className="h-px w-full bg-midnight/10 relative overflow-hidden">
								<motion.div
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
									style={{ transformOrigin: "left" }}
									className="absolute inset-0 bg-mint"
								/>
							</div>
							<p className="text-xs tracking-[0.18em] uppercase text-midnight/40">Scroll para revelar</p>
							<div className="rounded-2xl overflow-hidden border border-midnight/10 bg-lightgrey">
								<ParallaxImage src="/background.webp" alt="Proceso" className="h-[360px]" />
							</div>
						</div>
					</div>

					<div className="lg:col-span-8 space-y-6">
						{processSteps.map((s, i) => (
							<Reveal key={s.num} delay={i * 0.06}>
								<div className="group relative rounded-[24px] bg-midnight text-lightgrey p-8 md:p-10 overflow-hidden border border-lightgrey/5 hover:border-mint/20 transition-colors">
									<div className="absolute top-0 right-0 text-[120px] leading-none font-medium text-lightgrey/[0.04] select-none group-hover:text-mint/[0.07] transition-colors">
										{s.num}
									</div>
									<div className="relative">
										<p className="text-[11px] tracking-[0.2em] uppercase text-mint">{s.num} — Paso</p>
										<h3 className="mt-2 text-[28px] md:text-[32px] tracking-tight font-light">{s.title}</h3>
										<p className="mt-3 max-w-xl text-sm leading-relaxed text-lightgrey/60">{s.desc}</p>
										<div className="mt-6 flex flex-wrap gap-2">
											{s.bullets.map((b) => (
												<span key={b} className="rounded-full bg-lightgrey/10 px-3 py-1 text-[11px] tracking-wide text-lightgrey/70">
													{b}
												</span>
											))}
										</div>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="bg-midnight text-lightgrey py-16 md:py-24 relative overflow-hidden">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10">
					<div className="grid md:grid-cols-12 gap-10 items-center">
						<div className="md:col-span-6">
							<Eyebrow>04 — Materialidad</Eyebrow>
							<h2 className="mt-4 text-[34px] md:text-[54px] leading-[0.9] tracking-[-0.05em] font-light">
								Tu marca
								<br />
								<span className="text-mint font-medium">también</span> se imprime.
							</h2>
							<p className="mt-6 max-w-md text-sm leading-relaxed text-lightgrey/60">
								Una marca también vive en el empaque que recibe tu cliente, la tarjeta que guarda, la etiqueta que observa, el material que toca.
							</p>
							<div className="mt-8 space-y-3 border-l border-lightgrey/10 pl-6">
								<p className="text-sm text-lightgrey">Cada punto de contacto construye percepción.</p>
								<p className="text-sm font-medium text-mint">Nosotros ayudamos a hacerla tangible.</p>
							</div>
						</div>
						<div className="md:col-span-6 grid grid-cols-2 gap-4">
							{[
								{ t: "Empaque", d: "Que recibe tu cliente" },
								{ t: "Tarjeta", d: "Que guarda" },
								{ t: "Etiqueta", d: "Que observa" },
								{ t: "Material", d: "Que toca" },
							].map((c) => (
								<div key={c.t} className="rounded-2xl bg-lightgrey/[0.06] border border-lightgrey/10 p-6 hover:bg-lightgrey/[0.08] transition-colors">
									<p className="text-[11px] tracking-[0.16em] uppercase text-mint">{c.t}</p>
									<p className="mt-2 text-sm text-lightgrey/70">{c.d}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="bg-lightgrey py-16 md:py-24">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10">
					<div className="rounded-[32px] bg-midnight text-lightgrey p-8 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 overflow-hidden relative">
						<div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url('/background.webp')`, backgroundSize: "cover" }} aria-hidden />
						<div className="relative">
							<p className="text-[11px] tracking-[0.22em] uppercase text-mint">Siguiente paso</p>
							<h2 className="mt-3 text-[30px] md:text-[44px] leading-none tracking-[-0.04em] font-light">
								¿Tienes una idea?
								<br />
								<span className="text-mint">Hagámosla tangible.</span>
							</h2>
						</div>
						<div className="relative flex flex-col items-start md:items-end gap-4">
							<MagneticButton href="/cotizaciones">Solicitar cotización →</MagneticButton>
							<p className="text-xs text-lightgrey/50">Respuesta en &lt; 24h · Asesoría sin costo</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
