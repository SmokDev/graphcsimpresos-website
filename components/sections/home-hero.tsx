"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CTA } from "@/components/ui/button";
import { Container } from "@/components/ui/sections";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { EASE } from "@/components/motion/reveal";

const H1_LINES = ["Tu marca.", "Tus ideas.", "Impresas", "para destacar."];

/**
 * Hero editorial del Home — portada cinematográfica.
 * Capas: imagen (entrada + parallax scroll) / overlay midnight /
 * tipografía con mask reveal / marcas de registro mínimas / 25+ años.
 */
export default function HomeHero() {
	const reduce = usePrefersReducedMotion();
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	// Atravesar la portada: la imagen se hunde y crece, el contenido sube y se disipa.
	const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "14%"]);
	const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.1]);
	const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 130]);
	const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
	const cueOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

	const d = reduce ? 0 : 1; // multiplicador de duraciones/delays

	return (
		<section
			ref={ref}
			aria-label="Presentación de Graphics Impresos"
			className="relative z-10 h-[100svh] min-h-[620px] overflow-hidden rounded-b-[1.5rem] bg-midnight text-lightgrey sm:rounded-b-[2.5rem]"
		>
			{/* ——— Capa 01 · imagen con entrada + parallax ——— */}
			<motion.div
				className="absolute inset-0"
				initial={{ scale: reduce ? 1 : 1.18 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.8 * d || 0.01, ease: EASE }}
			>
				<motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 will-change-transform">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/graphics%20impresos%20offset%20impreta.webp"
						alt=""
						aria-hidden
						loading="eager"
						decoding="async"
						className="h-full w-full scale-105 object-cover"
					/>
				</motion.div>
			</motion.div>
			{/* wipe de entrada */}
			{!reduce && (
				<motion.div
					className="pointer-events-none absolute inset-0 bg-midnight"
					initial={{ scaleY: 1 }}
					animate={{ scaleY: 0 }}
					style={{ transformOrigin: "top" }}
					transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
				/>
			)}

			{/* ——— Capa 02 · overlay midnight sutil ——— */}
			<div className="absolute inset-0 bg-midnight/55 sm:bg-midnight/45" aria-hidden />
			<div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" aria-hidden />

			{/* ——— Marcas de registro mínimas ——— */}
			<div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
				<span className="absolute left-8 top-0 h-full w-px bg-lightgrey/[0.07]" />
				<span className="absolute right-8 top-0 h-full w-px bg-lightgrey/[0.07]" />
				<span className="absolute left-8 top-24 font-display text-lg leading-none text-mint/60">+</span>
				<span className="absolute right-8 top-24 font-display text-lg leading-none text-mint/60">+</span>
				<span className="absolute bottom-8 left-8 font-display text-lg leading-none text-mint/60">+</span>
				<span className="absolute bottom-8 right-8 font-display text-lg leading-none text-mint/60">+</span>
			</div>

			{/* ——— Capa 03 · tipografía ——— */}
			<motion.div
				style={{ y: contentY, opacity: contentOpacity }}
				className="absolute inset-0 will-change-transform"
			>
				<Container className="flex h-full flex-col justify-end pb-24 pt-32 sm:pb-16">
					<motion.p
						initial={{ opacity: 0, y: reduce ? 0 : 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 * d || 0.01, ease: EASE, delay: 0.55 * d }}
						className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-mint"
					>
						<span aria-hidden className="h-px w-10 bg-mint" />
						Diseñamos tu idea — imprimimos tu éxito
					</motion.p>

					<h1 className="mt-5 font-display text-[10.5vw] font-bold uppercase leading-[0.92] tracking-tight sm:text-[8vw] lg:text-[6rem]">
						{H1_LINES.map((line, i) => (
							<span key={line} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
								<motion.span
									className={i === H1_LINES.length - 1 ? "block text-mint" : "block"}
									initial={{ y: reduce ? "0%" : "112%" }}
									animate={{ y: "0%" }}
									transition={{ duration: 1 * d || 0.01, ease: EASE, delay: (0.45 + i * 0.11) * d }}
								>
									{line}
								</motion.span>
							</span>
						))}
					</h1>

					<div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
						<motion.div
							initial={{ opacity: 0, y: reduce ? 0 : 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.9 * d || 0.01, ease: EASE, delay: 1 * d }}
						>
							<p className="max-w-md text-base leading-relaxed text-lightgrey/85 sm:text-lg">
								Papelería corporativa y publicidad impresa para presentar tu empresa,
								preparar tus campañas y dar presencia a tu punto de venta. Enviamos a toda la República Mexicana.
							</p>
							<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
								<CTA href="/cotizaciones" className="justify-center sm:justify-start">
									Solicitar cotización
								</CTA>
								<CTA href="/soluciones" variant="ghost" className="justify-center sm:justify-start">
									Ver productos y servicios
								</CTA>
							</div>
							<p className="mt-6 flex items-baseline gap-5 sm:hidden">
								<span className="font-display text-4xl font-medium text-mint">25+</span>
								<span className="text-[11px] uppercase tracking-[0.24em] text-lightgrey/65">
									años de experiencia
								</span>
							</p>
						</motion.div>
					</div>
				</Container>
			</motion.div>

			{/* ——— 25+ años · indicador lateral ——— */}
			<motion.div
				style={{ opacity: cueOpacity }}
				className="absolute right-10 top-1/2 hidden -translate-y-1/2 xl:block"
				aria-label="Más de 25 años de experiencia"
			>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 * d || 0.01, ease: EASE, delay: 1.3 * d }}
					className="flex items-center gap-6 text-[11px] uppercase tracking-[0.32em] text-lightgrey/65 [writing-mode:vertical-rl]"
				>
					<span className="font-display text-2xl tracking-normal text-mint [writing-mode:horizontal-tb]">
						25+
					</span>
					años de experiencia
				</motion.p>
			</motion.div>

			{/* ——— Indicador de scroll ——— */}
			<motion.div
				style={{ opacity: cueOpacity }}
				className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
				aria-hidden
			>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 * d || 0.01, delay: 1.5 * d }}
					className="scroll-cue flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.34em] text-lightgrey/60"
				>
					Scroll
					<span className="h-8 w-px bg-gradient-to-b from-mint to-transparent" />
				</motion.p>
			</motion.div>
		</section>
	);
}
