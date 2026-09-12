"use client";

import { motion, useMotionTemplate, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { useScene } from "./use-scene";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

const WORDS = ["Material", "Color", "Formato", "Acabado", "Impresión", "Terminados"];

function Word({
	word,
	progress,
	index,
}: {
	word: string;
	progress: MotionValue<number>;
	index: number;
}) {
	const reduce = usePrefersReducedMotion();
	// Ventanas cortas y secuenciales, sin solape.
	const t0 = 0.1 + index * 0.08;
	const opacity = useTransform(
		progress,
		[t0, t0 + 0.03, t0 + 0.05, t0 + 0.08],
		reduce ? [1, 1, 1, 1] : [0, 1, 1, 0]
	);
	return (
		<motion.span
			style={{ opacity }}
			className="absolute inset-0 flex items-center justify-center will-change-transform"
		>
			<span className="font-display text-[13vw] font-medium uppercase leading-none tracking-tight text-lightgrey sm:text-[9vw]">
				{word}
			</span>
		</motion.span>
	);
}

/**
 * ESCENA 06 — CALIDAD. La foto recupera color con el scroll mientras
 * cada concepto aparece en su ventana; al final, solo el mensaje.
 */
export default function QualityScene() {
	const reduce = usePrefersReducedMotion();
	const { ref, progress: p } = useScene<HTMLElement>("pass");

	const satV = useTransform(p, [0.06, 0.5], [0, 1]);
	const grayV = useTransform(p, [0.06, 0.5], [0.6, 0]);
	const imgScale = useTransform(p, [0, 1], reduce ? [1, 1] : [1.14, 1]);
	const filter = useMotionTemplate`saturate(${satV}) grayscale(${grayV})`;
	const finOp = useTransform(p, [0.62, 0.7], reduce ? [1, 1] : [0, 1]);
	const finScale = useTransform(p, [0.62, 0.78], reduce ? [1, 1] : [0.94, 1]);
	const sceneOp = useTransform(p, [0.93, 1], reduce ? [1, 1] : [1, 0]);
	// Encabezado que se desvanece al mostrarse el texto final.
	const leadOp = useTransform(p, [0.05, 0.12, 0.62, 0.7], reduce ? [1, 1, 1, 1] : [0, 1, 1, 0]);

	return (
		<section ref={ref} aria-label="Escena 6 — Calidad" className="relative h-[520svh] bg-midnight">
			<motion.div style={{ opacity: sceneOp }} className="sticky top-0 h-svh overflow-hidden">
				<motion.div style={{ scale: imgScale }} className="absolute inset-0 will-change-transform">
					<motion.div style={{ filter: reduce ? "saturate(1)" : filter }} className="absolute inset-0 will-change-transform">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/graphicsimpresos%20impreta%20revision%20de%20calida%20offset.webp"
							alt="Revisión de calidad en offset"
							loading="lazy"
							decoding="async"
							className="h-full w-full object-cover"
						/>
					</motion.div>
					<div className="absolute inset-0 bg-midnight/55" aria-hidden />
				</motion.div>

				<p className="absolute left-5 top-24 z-10 text-[11px] uppercase tracking-[0.3em] text-mint sm:left-10">
					Calidad
				</p>

				{/* Conceptos, uno por ventana de scroll */}
				<motion.p
					style={{ opacity: leadOp }}
					className="absolute inset-x-0 top-[30%] z-10 text-center font-display text-sm uppercase tracking-[0.34em] text-mint will-change-transform"
				>
					Prestamos atención en
				</motion.p>
				<div className="absolute inset-0" role="list" aria-label="Elementos de calidad">
					{WORDS.map((w, i) => (
						<div key={w} role="listitem" className="absolute inset-0">
							<Word word={w} progress={p} index={i} />
						</div>
					))}
				</div>

				{/* Final: solo el mensaje */}
				<motion.div
					style={{ opacity: finOp, scale: finScale }}
					className="absolute inset-0 flex items-center justify-center will-change-transform"
				>
					<h2 className="px-6 text-center font-display text-[11vw] font-medium uppercase leading-[0.95] tracking-tight sm:text-7xl">
						La calidad
						<br />
						<span className="text-mint">también comunica.</span>
					</h2>
				</motion.div>
			</motion.div>
		</section>
	);
}
