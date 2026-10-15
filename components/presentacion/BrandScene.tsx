"use client";

import { useState } from "react";
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Lines } from "@/components/motion/reveal";
import { Drift, Words } from "@/components/motion/scroll";
import { useScene } from "./use-scene";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

/**
 * ESCENA 04 — TU MARCA. Mismo texto y animación que el Home:
 * drift gigante + titular mint + copy; la foto crece a full-bleed,
 * el texto sale de cuadro (con corte al final del fundido) y entra
 * el cierre sobre la imagen.
 */
export default function BrandScene({
	tag = "Tu marca",
	quote = "Nosotros hacemos tu marca tangible.",
}: {
	tag?: string;
	quote?: string;
}) {
	const reduce = usePrefersReducedMotion();
	const { ref, progress: p } = useScene<HTMLElement>("pass");

	// La imagen crece primero; el texto se queda fijo y sale después.
	// Base 0.68 (no 0.58): en móvil el marco ya no se ve diminuto
	// con grandes franjas midnight a los lados.
	const frameScale = useTransform(p, [0.08, 0.6], reduce ? [1, 1] : [0.68, 1]);
	const radV = useTransform(p, [0.08, 0.6], [26, 0]);
	const frameRad = useMotionTemplate`inset(0% round ${radV}px)`;
	// El zoom interior termina junto con el marco: sin encogido posterior.
	const imgScale = useTransform(p, [0.08, 0.6], reduce ? [1, 1] : [1.28, 1]);
	// Parallax vertical de salida de la imagen, independiente de la
	// escena: solo corre mientras la escena se va (end end → end start).
	const { scrollYProgress: exitP } = useScroll({
		target: ref,
		offset: ["end end", "end start"],
	});
	const imgExitY = useTransform(exitP, [0, 1], reduce ? [0, 0] : [0, 140]);
	// El texto sale antes y se disipa en su lugar.
	const txtOp = useTransform(p, [0.3, 0.5], reduce ? [1, 1] : [1, 0]);
	const endScale = useTransform(p, [0.52, 0.8], reduce ? [1, 1] : [0.94, 1]);
	// El cierre aparece en seco (sin fundido): banda anti-jitter.
	const [shown, setShown] = useState(false);
	useMotionValueEvent(p, "change", (v) => {
		setShown((s) => (v >= 0.52 ? true : v < 0.46 ? false : s));
	});
	const sceneOp = useTransform(p, [0.8, 0.95], reduce ? [1, 1] : [1, 0]);

	// Corte exactamente al final del fundido (0.5): opacidad en 0,
	// interruptor imperceptible. Sin desmontar.
	const [gone, setGone] = useState(false);
	useMotionValueEvent(p, "change", (v) => {
		setGone(v >= 0.5);
	});

	return (
		<section ref={ref} aria-label="Escena 4 — Tu marca" className="relative h-[300svh] overflow-x-clip bg-midnight sm:h-[260svh]">
			<motion.div style={{ opacity: sceneOp }} className="sticky top-0 h-svh min-h-[560px] overflow-hidden">
				<p className="absolute left-5 top-[max(5.5rem,env(safe-area-inset-top,0px)+4.5rem)] z-20 text-[11px] uppercase tracking-[0.3em] text-mint sm:left-10 sm:top-24">
					{tag}
				</p>

				{/* Fotografía protagonista */}
				<motion.div
					style={{ scale: frameScale, borderRadius: reduce ? 0 : frameRad, y: imgExitY }}
					className="absolute inset-0 overflow-hidden will-change-transform"
				>
					<motion.div style={{ scale: reduce ? 1 : imgScale }} className="absolute inset-0 will-change-transform">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/graphics%20impresos%20bag.webp"
							alt="Empaque de marca — Graphics Impresos"
							loading="lazy"
							decoding="async"
							className="h-full w-full object-cover object-center"
						/>
					</motion.div>
					<div className="absolute inset-0 bg-midnight/35" aria-hidden />
				</motion.div>

				{/* Texto inicial — deriva a la derecha, TU con fondo mint */}
				<motion.div
					style={{
						opacity: txtOp,
						visibility: gone ? "hidden" : "visible",
					}}
					className="absolute inset-x-0 top-[12%] will-change-transform [backface-visibility:hidden] sm:top-[16%]"
				>
					{/* Drift corto (0→8%): el 14% original sacaba el
					    gigante fuera de cuadro en 360–390px */}
					<Drift from="0%" to="8%">
						<p className="whitespace-nowrap font-display text-[16.5vw] font-medium uppercase leading-[0.9] tracking-tight sm:text-[15vw] lg:text-[13rem]">
							<span className="bg-mint px-[0.12em] text-midnight">Tu&nbsp;</span>
							<span className="text-lightgrey">marca</span>
						</p>
					</Drift>
					<div className="mx-auto w-full max-w-7xl px-5 sm:px-10">
						<h2 className="max-w-4xl text-balance font-display text-[clamp(1.9rem,8.5vw,2.5rem)] font-bold uppercase leading-[1.02] tracking-tight text-mint sm:text-6xl">
							<Lines lines={["También se", "imprime."]} />
						</h2>
						<Words
							className="mt-4 max-w-xl text-[15px] leading-relaxed text-lightgrey/85 sm:mt-5 sm:text-lg"
							text="Una marca también vive en el empaque que recibe tu cliente, la tarjeta que guarda, la etiqueta que observa y cada material que toca. Cada punto de contacto construye percepción."
						/>
					</div>
				</motion.div>

				{/* Cierre sobre la imagen — aparece en seco */}
				<motion.div
					style={{ opacity: shown ? 1 : 0, scale: endScale }}
					className="absolute inset-x-0 bottom-0 will-change-transform"
				>
					<div className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-10 sm:pb-24">
						<p className="max-w-3xl text-balance border-l-2 border-mint pl-5 font-display text-[clamp(1.5rem,7.5vw,1.875rem)] font-light uppercase leading-tight tracking-wide sm:text-5xl">
							{quote}
						</p>
					</div>
				</motion.div>
				{/* Degradado inferior estático: no acompaña al texto */}
				<div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-midnight via-midnight/60 to-transparent sm:h-40" aria-hidden />
			</motion.div>
		</section>
	);
}
