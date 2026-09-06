"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SITE } from "@/utils/site";

const NAV = [
	{ href: "/", label: "Inicio" },
	{ href: "/nosotros", label: "Nosotros" },
	{ href: "/soluciones", label: "Soluciones" },
	{ href: "/cotizaciones", label: "Cotizaciones" },
];

function toTop() {
	const lenis = (
		window as unknown as {
			__lenis?: { scrollTo: (target: number, options?: Record<string, unknown>) => void };
		}
	).__lenis;
	if (lenis) lenis.scrollTo(0, { duration: 1.8 });
	else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="relative w-full overflow-hidden bg-midnight-deep text-lightgrey">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/60 to-transparent"
			/>
			<div className="mx-auto w-full max-w-7xl px-5 pt-16 sm:px-10 sm:pt-24">
				{/* ——— Superior editorial ——— */}
				<div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-8">
					<Reveal>
						<div className="flex flex-col items-start gap-5">
							<p className="max-w-sm font-display text-2xl font-light uppercase leading-tight text-lightgrey/90 sm:text-3xl">
								Diseñamos tu idea,
								<br />
								<span className="text-mint">imprimimos tu éxito.</span>
							</p>
							<Link
								href="/cotizaciones"
								className="group mt-2 inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-midnight transition-colors duration-300 hover:bg-lightgrey"
							>
								Solicitar cotización
								<ArrowUpRight
									className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
									aria-hidden
								/>
							</Link>
						</div>
					</Reveal>

					<Reveal delay={0.08}>
						<nav aria-label="Navegación del pie de página">
							<p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-mint">
								Explorar
							</p>
							<ul className="flex flex-col gap-3">
								{NAV.map((item, i) => (
									<li key={item.href}>
										<Link
											href={item.href}
											className="group inline-flex items-baseline gap-3 font-display text-xl font-light uppercase tracking-wide text-lightgrey/85 transition-colors hover:text-mint"
										>
											<span className="text-xs text-mint/70">
												0{i + 1}
											</span>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</Reveal>

					<Reveal delay={0.14}>
						<div>
							<p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-mint">
								Contacto
							</p>
							<ul className="flex flex-col gap-3 text-[15px] text-lightgrey/85">
								<li>
									<a href={SITE.phoneHref} className="font-display text-2xl tracking-wide transition-colors hover:text-mint">
										{SITE.phone}
									</a>
								</li>
								<li>
									<a
										href={`mailto:${SITE.email}`}
										className="break-all transition-colors hover:text-mint"
									>
										{SITE.email}
									</a>
								</li>
								<li className="text-sm leading-relaxed text-lightgrey/55">
									Mar Mediterráneo 30, Tacuba,
									<br />
									Miguel Hidalgo, CDMX
								</li>
							</ul>
						</div>
					</Reveal>
				</div>

				{/* ——— Logotipo mint gigante ——— */}
				<Reveal y={56} className="select-none px-2 py-6 sm:px-10 sm:py-10">
					<Link href="/" aria-label="Graphics Impresos — volver al inicio" className="group block">
						<Image
							src="/Mint%20outline.svg"
							alt="Graphics Impresos"
							width={1200}
							height={300}
							loading="lazy"
							className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
						/>
					</Link>
				</Reveal>

				{/* ——— Barra inferior ——— */}
				<div className="flex flex-col items-center justify-between gap-4 border-t border-lightgrey/10 py-6 text-xs uppercase tracking-[0.2em] text-lightgrey/45 sm:flex-row">
					<p>© {year} Graphics Impresos</p>
					<p className="hidden text-mint/70 md:block">
						25+ años · Asesoría · Diseño · Prototipado · Producción
					</p>
					<button
						type="button"
						onClick={toTop}
						className="group inline-flex items-center gap-2 rounded-full border border-lightgrey/15 px-5 py-2.5 text-lightgrey/70 transition-colors duration-300 hover:border-mint hover:text-mint"
						aria-label="Volver arriba"
					>
						Arriba
						<ArrowUp
							className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
							aria-hidden
						/>
					</button>
				</div>
			</div>
		</footer>
	);
}
