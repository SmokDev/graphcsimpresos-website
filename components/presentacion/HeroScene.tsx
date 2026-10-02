"use client";

import { useState } from "react";
import { motion, useMotionTemplate, useMotionValueEvent, useTransform } from "motion/react";
import { useScene } from "./use-scene";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { EASE } from "@/components/motion/reveal";

/**
 * ESCENA 01 — APERTURA. El titular se abre a full-viewport
 * y el texto se integra en la imagen.
 * Progreso "pass" (start end → end start): la apertura corre
 * durante la entrada y el tramo fijado; la salida se funde
 * al abandonar la escena.
 */
export default function HeroScene() {
	const reduce = usePrefersReducedMotion();
	const { ref, progress: p } = useScene<HTMLElement>("pass");
	// Corte exactamente al final del fundido (0.68): ahí la
	// opacidad ya vale 0, así que el interruptor es imperceptible
	// y el regreso entra en rampa suave. Sin desmontar: la intro
	// corre una sola vez.
	const [gone, setGone] = useState(false);
	useMotionValueEvent(p, "change", (v) => {
		setGone(v >= 0.68);
	});

	const d = reduce ? 0 : 1;

	// Titular: cámara (sube, escala, se disipa)
	const titleY = useTransform(p, [0.32, 0.62], [0, -150]);
	const titleScale = useTransform(p, [0.32, 0.62], [1, 0.84]);
	// Titular: visible desde la entrada, sale hacia el final del
	// tramo fijado. Fundido hasta 0.68 para que el corte coincida
	// con opacidad 0: interruptor imperceptible.
	const titleOp = useTransform(p, [0.58, 0.68], reduce ? [1, 1] : [1, 0]);
	// Imagen: se abre a full viewport durante la entrada
	const clipV = useTransform(p, [0.18, 0.42], [13, 0]);
	const radV = useTransform(p, [0.18, 0.42], [26, 0]);
	const imgScale = useTransform(p, [0.18, 0.62], [1.16, 1]);
	const clip = useMotionTemplate`inset(${clipV}% round ${radV}px)`;
	// Salida de escena: fundido al abandonar (end end → end start)
	const sceneOp = useTransform(p, [0.7, 0.84], [1, 0]);

	return (
		<section ref={ref} aria-label="Escena 1 — Apertura" className="relative h-[240svh] overflow-x-clip bg-midnight">
			<motion.div style={{ opacity: reduce ? 1 : sceneOp }} className="sticky top-0 flex h-svh min-h-[560px] flex-col overflow-hidden">
				{/* Imagen principal */}
				<div className="absolute inset-0">
					<motion.div
						initial={{ scale: reduce ? 1 : 1.14 }}
						animate={{ scale: 1 }}
						transition={{ duration: 1.6 * d || 0.01, ease: EASE }}
						className="absolute inset-0"
					>
						<motion.div
							style={{
								scale: reduce ? 1 : imgScale,
								clipPath: reduce ? "inset(0% round 0px)" : clip,
							}}
							className="absolute inset-0 will-change-transform"
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="/graphics%20impresos%20offset%20impreta.webp"
								alt=""
								aria-hidden
								loading="eager"
								decoding="async"
								className="h-full w-full object-cover"
							/>
						</motion.div>
					</motion.div>
					<div className="absolute inset-0 bg-midnight/45" aria-hidden />
					<div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/50" aria-hidden />
				</div>

				{/* Titular */}
				<motion.div
					style={{
						y: reduce ? 0 : titleY,
						scale: reduce ? 1 : titleScale,
						opacity: reduce ? 1 : titleOp,
						visibility: gone ? "hidden" : "visible",
					}}
					className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-20 will-change-transform [backface-visibility:hidden] sm:px-10 sm:pb-16"
				>
					<h1 className="max-w-full break-words font-display text-[clamp(2.6rem,12.5vw,4.25rem)] font-medium uppercase leading-[0.95] tracking-tight text-balance sm:text-[10vw] sm:leading-[0.92] lg:text-[8.6rem]">
						{["Diseñamos tu idea", "Imprimimos tu éxito."].map((line, i) => (
							<span key={line} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
								<motion.span
									className={i === 1 ? "block text-mint" : "block"}
									initial={{ y: reduce ? "0%" : "112%" }}
									animate={{ y: "0%" }}
									transition={{ duration: 1 * d || 0.01, ease: EASE, delay: (0.35 + i * 0.14) * d }}
								>
									{line}
								</motion.span>
							</span>
						))}
					</h1>
				</motion.div>
			</motion.div>
		</section>
	);
}
