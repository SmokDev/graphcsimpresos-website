import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const NAV = [
	{ href: "/", label: "Inicio" },
	{ href: "/nosotros", label: "Nosotros" },
	{ href: "/soluciones", label: "Soluciones" },
	{ href: "/cotizaciones", label: "Cotizaciones" },
];

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="relative w-full overflow-hidden bg-midnight-deep text-lightgrey">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/60 to-transparent"
			/>
			<div className="mx-auto w-full max-w-7xl px-5 pt-16 sm:px-10 sm:pt-24">
				{/* Top: brand + CTA */}
				<div className="grid gap-12 pb-14 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
					<Reveal>
						<div className="flex flex-col items-start gap-5">
							<Image
								src="/Logo%20Lightgray.svg"
								alt="Graphics Impresos"
								width={300}
								height={74}
								className="h-auto w-52 object-contain sm:w-64"
								loading="lazy"
							/>
							<p className="font-display text-2xl font-light uppercase leading-tight text-lightgrey/90 sm:text-3xl">
								Diseñamos tu idea,
								<br />
								<span className="text-mint">imprimimos tu éxito.</span>
							</p>
							<Link
								href="/cotizaciones"
								className="group mt-2 inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-midnight transition-colors duration-300 hover:bg-lightgrey"
							>
								¿Tienes un proyecto? Solicitar cotización
								<ArrowUpRight
									className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									aria-hidden
								/>
							</Link>
						</div>
					</Reveal>

					<div className="grid grid-cols-2 gap-10 sm:gap-8">
						<Reveal delay={0.08}>
							<nav aria-label="Navegación del pie de página">
								<p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-mint">
									Explorar
								</p>
								<ul className="flex flex-col gap-3">
									{NAV.map((item) => (
										<li key={item.href}>
											<Link
												href={item.href}
												className="group inline-flex items-center gap-1.5 font-display text-xl font-light uppercase tracking-wide text-lightgrey/85 transition-colors hover:text-mint"
											>
												{item.label}
												<ArrowUpRight
													className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
													aria-hidden
												/>
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
										<a
											href="tel:+525587730703"
											className="transition-colors hover:text-mint"
										>
											55 8773 0703
										</a>
									</li>
									<li>
										<a
											href="mailto:contacto@graphicsimpresos.com"
											className="break-all transition-colors hover:text-mint"
										>
											contacto@graphicsimpresos.com
										</a>
									</li>
									<li className="text-lightgrey/60">
										graphicsimpresos.com
									</li>
									<li className="mt-2 text-sm leading-relaxed text-lightgrey/55">
										Mar Mediterráneo 30, Tacuba,
										<br />
										Miguel Hidalgo, CDMX
									</li>
								</ul>
							</div>
						</Reveal>
					</div>
				</div>

				{/* Giant wordmark */}
				<Reveal y={40} className="select-none" >
					<p
						aria-hidden
						className="whitespace-nowrap text-center font-display text-[13.5vw] font-medium uppercase leading-[0.95] tracking-tight text-lightgrey/[0.09] lg:text-[10.5rem]"
					>
						Graphics
					</p>
				</Reveal>

				<div className="flex flex-col items-center justify-between gap-3 border-t border-lightgrey/10 py-6 text-xs uppercase tracking-[0.2em] text-lightgrey/45 sm:flex-row">
					<p>© {year} Graphics Impresos</p>
					<p className="text-mint/70">25+ años · Asesoría · Diseño · Producción</p>
				</div>
			</div>
		</footer>
	);
}
