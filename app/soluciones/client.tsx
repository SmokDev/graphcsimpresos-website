"use client";

import { HeroSection } from "@/components/ui/sections";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-title";
import { MagneticButton } from "@/components/ui/magnetic-button";
import ParallaxImage from "@/components/ui/parallax-image";

const solutions = [
	{
		num: "01",
		title: "Identidad corporativa",
		sub: "La primera impresión es tangible",
		desc: "Papelería que comunica profesionalismo en cada punto de contacto.",
		items: ["Tarjetas", "Papelería", "Carpetas", "Sobres", "Formatos", "Materiales empresariales"],
		image: "/offset.jpg",
		accent: "midnight",
	},
	{
		num: "02",
		title: "Publicidad y promoción",
		sub: "Que tu mensaje se vea y se toque",
		desc: "Piezas promocionales que amplifican tu alcance con calidad y color.",
		items: ["Flyers", "Posters", "Brochures", "Catálogos", "Artículos promocionales"],
		image: "/background.webp",
		accent: "mint",
	},
	{
		num: "03",
		title: "Packaging",
		sub: "El empaque es parte del producto",
		desc: "Cajas, etiquetas y stickers que hacen que tu producto destaque.",
		items: ["Cajas", "Etiquetas", "Stickers", "Empaques"],
		image: "/background%202.webp",
		accent: "light",
	},
	{
		num: "04",
		title: "Uniformes corporativos",
		sub: "Viste a tu equipo, viste tu marca",
		desc: "Uniformes y prendas personalizadas que fortalecen la imagen del equipo.",
		items: ["Uniformes", "Prendas personalizadas"],
		image: "/offset.jpg",
		accent: "dark",
	},
];

export default function SolucionesClient() {
	return (
		<main className="bg-lightgrey">
			<HeroSection eyebrow="Soluciones — Graphics Impresos" kicker="Personalización total" meta="4 CATEGORÍAS">
				Soluciones que
				<br />
				hacen <span className="text-mint">tangible</span>
				<br />
				tu marca.
				<span className="block mt-4 text-sm tracking-wide normal-case font-light text-lightgrey/60 max-w-xl">Creamos y producimos soluciones gráficas personalizadas para diferentes necesidades.</span>
			</HeroSection>

			{/* intro stats */}
			<section className="bg-lightgrey border-b border-midnight/5">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 py-8 flex flex-wrap gap-6 text-[11px] tracking-[0.16em] uppercase text-midnight/40">
					<span className="inline-flex items-center gap-2"><span className="size-1 bg-mint rounded-full" />Desde tarjeta a empaque completo</span>
					<span className="hidden md:inline h-4 w-px bg-midnight/10" />
					<span>Asesoría · Diseño · Producción</span>
				</div>
			</section>

			{solutions.map((s, idx) => (
				<section key={s.num} className={`relative ${idx % 2 === 0 ? "bg-lightgrey" : "bg-midnight text-lightgrey"} border-b ${idx % 2 === 0 ? "border-midnight/5" : "border-lightgrey/10"}`}>
					<div className="mx-auto max-w-[1280px] px-6 md:px-10 grid lg:grid-cols-12 gap-8 py-12 md:py-20 items-center">
						{/* text */}
						<div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
							<Reveal>
								<p className={`text-[11px] tracking-[0.2em] uppercase ${idx % 2 === 0 ? "text-mint" : "text-mint"}`}>{s.num} — {s.sub}</p>
								<h2 className={`mt-3 text-[32px] md:text-[48px] leading-none tracking-[-0.04em] font-light ${idx % 2 === 0 ? "text-midnight" : "text-lightgrey"}`}>
									{s.title}
								</h2>
								<p className={`mt-4 max-w-md text-sm leading-relaxed ${idx % 2 === 0 ? "text-midnight/60" : "text-lightgrey/60"}`}>{s.desc}</p>
								<div className="mt-8 flex flex-wrap gap-2">
									{s.items.map((it) => (
										<span
											key={it}
											className={`rounded-full px-4 py-2 text-xs border ${idx % 2 === 0 ? "bg-midnight text-lightgrey border-midnight" : "bg-lightgrey/10 text-lightgrey border-lightgrey/10"}`}
										>
											{it}
										</span>
									))}
								</div>
								<div className="mt-10">
									<MagneticButton href="/cotizaciones" variant={idx % 2 === 0 ? "dark" : "mint"}>Cotizar {s.title} →</MagneticButton>
								</div>
							</Reveal>
						</div>

						{/* image */}
						<div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
							<Reveal>
								<div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-black/5 bg-midnight">
									<ParallaxImage src={s.image} alt={s.title} className="absolute inset-0" />
									<div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" />
									<div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
										<span className="text-[48px] leading-none font-medium text-lightgrey/20">0{idx + 1}</span>
										<span className="text-xs tracking-[0.16em] uppercase text-lightgrey/70">{s.title}</span>
									</div>
								</div>
							</Reveal>
						</div>
					</div>

					{/* huge background number */}
					<div className="pointer-events-none absolute right-6 bottom-6 text-[120px] md:text-[180px] leading-none font-medium tracking-[-0.06em] opacity-[0.04] select-none hidden lg:block">
						{s.num}
					</div>
				</section>
			))}

			<section className="bg-mint py-12">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
					<div>
						<Eyebrow>¿No encuentras tu solución?</Eyebrow>
						<p className="mt-2 text-midnight font-medium">Cuéntanos qué necesitas lograr. Diseñamos la propuesta.</p>
					</div>
					<MagneticButton href="/cotizaciones" variant="dark">Solicitar cotización personalizada →</MagneticButton>
				</div>
			</section>
		</main>
	);
}
