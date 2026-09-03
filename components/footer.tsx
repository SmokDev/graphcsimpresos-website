"use client";

import Link from "next/link";
import Logomark from "./logomark";
import { motion } from "motion/react";

export default function Footer() {
	return (
		<footer className="relative bg-midnight text-lightgrey overflow-hidden border-t border-lightgrey/10">
			{/* subtle grain / background pattern */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url('/background.webp')`, backgroundSize: "cover", backgroundPosition: "center" }} />

			{/* CTA */}
			<div className="relative">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10">
					<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 py-16 md:py-20 border-b border-lightgrey/10">
						<div className="space-y-6">
							<p className="text-[11px] tracking-[0.28em] uppercase text-mint">Cierre de experiencia — Cotizaciones</p>
							<h2 className="text-[40px] md:text-[64px] leading-[0.9] tracking-[-0.04em] font-light">
								¿Tienes una <span className="font-medium text-mint">idea?</span>
								<br />
								<span className="opacity-60">Hagámosla</span> tangible.
							</h2>
						</div>
						<div className="lg:text-right space-y-4 lg:max-w-sm">
							<p className="text-sm leading-relaxed text-lightgrey/60">
								Cuéntanos qué necesitas lograr. Diseñamos la ruta, producimos la pieza, materializamos tu marca.
							</p>
							<Link
								href="/cotizaciones"
								className="inline-flex items-center gap-3 rounded-full bg-mint text-midnight px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold hover:bg-lightgrey transition-colors"
							>
								Solicitar cotización <span aria-hidden>→</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Massive wordmark */}
			<div className="relative border-b border-lightgrey/10">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 py-8 md:py-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className="flex flex-col md:flex-row md:items-center justify-between gap-8"
					>
						<Logomark color="lightgray" width={280} height={68} className="h-10 md:h-12 w-auto" />
						<p className="text-[13px] md:text-sm tracking-[0.22em] uppercase text-lightgrey/50 max-w-md">
							Diseñamos tu idea, <span className="text-mint">imprimimos tu éxito.</span>
						</p>
					</motion.div>

					{/* huge outline text */}
					<div className="mt-10 overflow-hidden select-none pointer-events-none" aria-hidden>
						<p className="text-[14vw] md:text-[11vw] leading-none tracking-[-0.06em] font-medium text-transparent [-webkit-text-stroke:1px_rgba(217,217,214,0.14)] whitespace-nowrap">
							GRAPHICS — IMPRESOS
						</p>
					</div>
				</div>
			</div>

			{/* Info grid */}
			<div className="relative mx-auto max-w-[1280px] px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
				{/* Contact */}
				<div className="md:col-span-5 space-y-6">
					<p className="text-[11px] tracking-[0.22em] uppercase text-lightgrey/40">Contacto directo</p>
					<div className="space-y-3 text-sm">
						<a href="tel:+525587730703" className="block text-[22px] md:text-[26px] tracking-tight hover:text-mint transition-colors">
							55 8773 0703
						</a>
						<a href="mailto:contacto@graphicsimpresos.com" className="block text-lightgrey/80 hover:text-mint transition-colors">
							contacto@graphicsimpresos.com
						</a>
						<a href="https://www.graphicsimpresos.com" target="_blank" rel="noreferrer" className="block text-lightgrey/50 hover:text-mint transition-colors">
							www.graphicsimpresos.com
						</a>
					</div>
					<div className="pt-4 text-xs leading-relaxed text-lightgrey/40">
						Mar Mediterráneo 30, Tacuba, Miguel Hidalgo,
						<br />
						11410 Ciudad de México, CDMX
					</div>
				</div>

				{/* Nav */}
				<div className="md:col-span-3 space-y-6">
					<p className="text-[11px] tracking-[0.22em] uppercase text-lightgrey/40">Navegación</p>
					<nav className="flex flex-col gap-2 text-sm">
						<Link href="/" className="text-lightgrey/70 hover:text-mint transition-colors w-fit">
							Inicio
						</Link>
						<Link href="/nosotros" className="text-lightgrey/70 hover:text-mint transition-colors w-fit">
							Quiénes Somos
						</Link>
						<Link href="/soluciones" className="text-lightgrey/70 hover:text-mint transition-colors w-fit">
							Soluciones
						</Link>
						<Link href="/cotizaciones" className="text-mint hover:text-lightgrey transition-colors w-fit font-medium">
							Cotizaciones →
						</Link>
					</nav>
				</div>

				{/* Proof / badge */}
				<div className="md:col-span-4 space-y-6 md:text-right">
					<p className="text-[11px] tracking-[0.22em] uppercase text-lightgrey/40">Compromiso gráfico</p>
					<p className="text-sm leading-relaxed text-lightgrey/60">
						Más de <span className="text-lightgrey">25 años</span> convirtiendo necesidades en objetos reales. Material, color, formato, acabado: la calidad también comunica.
					</p>
					<div className="inline-flex items-center gap-3 rounded-full border border-lightgrey/15 px-4 py-2 text-[11px] tracking-widest uppercase text-lightgrey/50">
						<span className="size-2 rounded-full bg-mint animate-pulse" />
						Producción · CDMX
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="relative border-t border-lightgrey/10">
				<div className="mx-auto max-w-[1280px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.16em] uppercase text-lightgrey/30">
					<span>© 2025 Graphics Impresos. Todos los derechos reservados.</span>
					<span className="flex items-center gap-2">
						<span className="size-1 rounded-full bg-mint" /> Materializamos marcas
					</span>
				</div>
			</div>
		</footer>
	);
}
