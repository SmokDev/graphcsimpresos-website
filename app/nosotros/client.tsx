"use client";

import { HeroSection } from "@/components/ui/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionTitle, Eyebrow } from "@/components/ui/section-title";
import { MagneticButton } from "@/components/ui/magnetic-button";
import ParallaxImage from "@/components/ui/parallax-image";
import { motion } from "motion/react";

const qualityItems = ["Material", "Color", "Formato", "Acabado", "Impresión", "Terminados"];
const clients = ["Empresas", "PyMEs", "Emprendedores", "Comercios", "Marcas de productos", "Restaurantes y negocios de alimentos", "Profesionales", "Agencias y diseñadores", "Organizadores de eventos", "Turismo y agencias de viajes"];

export default function NosotrosClient() {
	return (
		<main className="bg-lightgrey">
			<HeroSection eyebrow="Quiénes Somos — Graphics Impresos" kicker="Experiencia + Visión actual" meta="1999 — 2025" useAltBackground>
				Somos una empresa
				<br />
				especializada en <span className="text-mint">transformar</span>
				<br />
				ideas en soluciones
				<span className="block mt-4 text-[13px] md:text-sm tracking-[0.16em] uppercase text-lightgrey/60 font-sans normal-case">Comunicar · Promocionar · Fortalecer tu imagen</span>
			</HeroSection>

			<section className="bg-lightgrey py-16 md:py-20">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
					<div className="md:col-span-5">
						<Reveal>
							<p className="text-sm leading-relaxed text-midnight/70 max-w-md">
								Durante más de <span className="font-medium text-midnight">25 años</span> hemos acompañado a negocios y empresas en la creación y producción
								de materiales impresos que ayudan a comunicar, promocionar y fortalecer su imagen.
							</p>
						</Reveal>
						<Reveal delay={0.1} className="mt-8 grid grid-cols-3 gap-4 border-t border-midnight/10 pt-6">
							<div>
								<p className="text-2xl font-medium tracking-tight text-midnight">25+</p>
								<p className="text-[11px] uppercase tracking-widest text-midnight/40">Años</p>
							</div>
							<div>
								<p className="text-2xl font-medium tracking-tight text-midnight">360°</p>
								<p className="text-[11px] uppercase tracking-widest text-midnight/40">Asesoría</p>
							</div>
							<div>
								<p className="text-2xl font-medium tracking-tight text-midnight">CDMX</p>
								<p className="text-[11px] uppercase tracking-widest text-midnight/40">Producción</p>
							</div>
						</Reveal>
					</div>
					<div className="md:col-span-7">
						<SectionTitle
							eyebrow="Qué hacemos"
							title={<>Combinamos experiencia, asesoría, diseño y <span className="text-mint">producción personalizada.</span></>}
							description="No solo imprimimos: ofrecemos soluciones que van más allá de la tinta sobre papel. Cada proyecto es una oportunidad para que tu negocio sea percibido a la altura de lo que hace."
						/>
						<div className="mt-8 rounded-2xl overflow-hidden border border-midnight/10">
							<ParallaxImage src="/background.webp" alt="Taller" className="h-[300px]" />
						</div>
					</div>
				</div>
			</section>

			<section className="bg-midnight text-lightgrey py-16 md:py-24">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-start">
					<div className="lg:col-span-7">
						<Eyebrow>Nuestra visión</Eyebrow>
						<h2 className="mt-4 text-[30px] md:text-[46px] leading-[0.95] tracking-[-0.04em] font-light">
							Una imprenta <br />
							no debería <span className="text-mint font-medium">limitarse a imprimir.</span>
						</h2>
						<div className="mt-8 space-y-5 text-sm leading-relaxed text-lightgrey/65 max-w-xl">
							<p>Buscamos comprender la necesidad del cliente y transformar esa necesidad en la solución gráfica adecuada.</p>
							<p className="text-lightgrey text-base leading-relaxed">
								“El cliente debe percibir <span className="text-mint">acompañamiento y tranquilidad</span>. Que su idea está en manos que cuidan cada
								detalle.”
							</p>
							<p className="text-lightgrey/40">Tono humano, cercano, sin jerga técnica innecesaria. Te guiamos.</p>
						</div>
					</div>
					<div className="lg:col-span-5 space-y-6">
						<div className="rounded-2xl bg-lightgrey/[0.06] border border-lightgrey/10 p-8">
							<p className="text-[11px] tracking-[0.18em] uppercase text-mint">Filosofía</p>
							<p className="mt-3 text-[22px] leading-tight tracking-tight">
								No preguntamos solo <br />
								“¿Qué quieres imprimir?” <br />
								<span className="text-mint">¿Qué necesitas lograr?</span>
							</p>
						</div>
						<div className="rounded-2xl overflow-hidden border border-lightgrey/10 h-[280px]">
							<ParallaxImage src="/background%202.webp" alt="Visión" className="h-full" />
						</div>
					</div>
				</div>
			</section>

			<section className="bg-lightgrey py-16 md:py-24">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10">
					<SectionTitle
						eyebrow="La calidad comunica"
						title={<>La calidad <span className="text-mint">también</span> comunica.</>}
						description="Un material impreso representa a tu negocio. La calidad es percepción: material, color, formato, acabado, impresión y terminados construyen valor."
					/>
					<Stagger className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{qualityItems.map((q) => (
							<StaggerItem key={q}>
								<motion.div whileHover={{ y: -4 }} className="group rounded-2xl bg-midnight text-lightgrey p-6 border border-lightgrey/5 hover:border-mint/20 transition-colors h-[140px] flex flex-col justify-between">
									<span className="size-2 rounded-full bg-mint group-hover:scale-125 transition-transform" />
									<span className="text-sm tracking-wide">{q}</span>
								</motion.div>
							</StaggerItem>
						))}
					</Stagger>
					<div className="mt-10 rounded-2xl bg-mint p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
						<p className="text-midnight text-lg leading-tight font-medium max-w-xl">Cada detalle cuenta. Cuidamos color, registro, corte y acabado para que tu marca se vea a la altura de lo que hace.</p>
						<MagneticButton href="/cotizaciones" variant="dark">Cotizar proyecto →</MagneticButton>
					</div>
				</div>
			</section>

			<section className="bg-midnight text-lightgrey py-16 md:py-24 border-t border-lightgrey/10">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 grid lg:grid-cols-12 gap-10">
					<div className="lg:col-span-5">
						<Eyebrow>Para quién</Eyebrow>
						<h2 className="mt-4 text-[30px] md:text-[44px] leading-[0.95] tracking-[-0.04em] font-light">
							Para negocios que quieren <span className="text-mint">verse a la altura</span> de lo que hacen.
						</h2>
					</div>
					<div className="lg:col-span-7">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							{clients.map((c, i) => (
								<Reveal key={c} delay={i * 0.03}>
									<div className="flex items-center gap-3 rounded-full border border-lightgrey/10 px-5 py-3 text-sm text-lightgrey/70 hover:border-mint/30 hover:text-mint transition-colors">
										<span className="size-1.5 rounded-full bg-mint shrink-0" />
										{c}
									</div>
								</Reveal>
							))}
						</div>
						<div className="mt-10 rounded-2xl bg-lightgrey text-midnight p-8">
							<p className="text-sm leading-relaxed">
								Especialmente con quienes entienden que <span className="font-medium">la forma en que se presenta un negocio también comunica su valor.</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
