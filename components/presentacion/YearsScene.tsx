"use client";

import { motion, useMotionTemplate, useTransform } from "motion/react";
import { useScene } from "./use-scene";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { Words } from "@/components/motion/scroll";

/**
 * ESCENA 02 — QUIÉNES SOMOS. El 25+ permanece siempre en pantalla
 * como gráfico fijo; los textos de Quiénes somos y la foto del
 * equipo se revelan con el scroll.
 */
export default function YearsScene() {
	const reduce = usePrefersReducedMotion();
	const { ref, progress: p } = useScene<HTMLElement>("pass");

	// El número respira pero nunca sale de cuadro.
	const numScale = useTransform(p, [0, 1], reduce ? [1, 1] : [0.96, 1.04]);
	const numX = useTransform(p, [0, 1], reduce ? ["0%", "0%"] : ["2%", "-6%"]);
	// La foto se abre y flota con parallax propio.
	const imgClipV = useTransform(p, [0.25, 0.5], [18, 0]);
	const imgClip = useMotionTemplate`inset(${imgClipV}% round 22px)`;
	const imgY = useTransform(p, [0.15, 1], reduce ? ["0%", "0%"] : ["0%", "6%"]);
	const txtOp = useTransform(p, [0.3, 0.45], reduce ? [1, 1] : [0, 1]);
	const sceneOp = useTransform(p, [0.9, 1], reduce ? [1, 1] : [1, 0]);

	return (
		<section ref={ref} aria-label="Escena 2 — Quiénes somos" className="relative h-[240svh] bg-midnight">
			<motion.div style={{ opacity: sceneOp }} className="sticky top-0 flex h-svh flex-col overflow-hidden">
				<p className="mx-auto w-full max-w-7xl px-5 pt-24 text-[11px] uppercase tracking-[0.3em] text-mint sm:px-10">
					Escena 02 — Quiénes somos
				</p>

				<div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-5 sm:px-10 lg:grid-cols-[auto_1fr] lg:gap-16">
					<motion.p
						style={{ scale: numScale, x: numX }}
						className="font-display text-[34vw] font-medium leading-[0.85] text-mint will-change-transform sm:text-[24vw] lg:text-[19rem]"
					>
						25+
						<span className="mt-6 block text-[11px] font-normal uppercase tracking-[0.3em] text-lightgrey/60">
							años de experiencia
						</span>
					</motion.p>
					<div className="max-w-xl space-y-4">
						<Words
							className="leading-relaxed text-lightgrey/85 sm:text-lg"
							text="Somos una empresa especializada en transformar ideas y necesidades de comunicación en soluciones impresas."
						/>
						<Words
							className="leading-relaxed text-lightgrey/85 sm:text-lg"
							text="Durante más de 25 años hemos acompañado a negocios y empresas en la creación y producción de materiales que les ayudan a comunicar, promocionar y fortalecer su imagen."
						/>
						<Words
							className="leading-relaxed text-lightgrey/85 sm:text-lg"
							text="Hoy combinamos nuestra experiencia en impresión con asesoría, diseño y producción personalizada para ofrecer soluciones que van más allá de simplemente imprimir."
						/>
						<motion.p
							style={{ opacity: txtOp }}
							className="border-l-2 border-mint pl-5 font-display text-xl font-light uppercase leading-snug tracking-wide text-lightgrey/90 sm:text-2xl"
						>
							No solo imprimimos. Entendemos lo que necesitas.
						</motion.p>
					</div>
				</div>

				<motion.div style={{ y: imgY }} className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-10 will-change-transform">
					<motion.div
						style={{ clipPath: reduce ? "inset(0% round 22px)" : imgClip }}
						className="relative h-[50svh] overflow-hidden will-change-transform"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/graphicsimresos%20personal%20imrenta.webp"
							alt="Equipo de Graphics Impresos"
							loading="lazy"
							decoding="async"
							className="absolute inset-0 h-full w-full object-cover object-top"
						/>
						<div className="absolute inset-0 bg-midnight/25" aria-hidden />
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
