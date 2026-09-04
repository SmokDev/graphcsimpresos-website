"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/sections";
import { CTA } from "@/components/ui/button";
import { ImageReveal, Lines, Reveal } from "@/components/motion/reveal";
import { SOLUTIONS } from "@/utils/site";

/**
 * Imagen del stack sticky — aparece y desaparece según el progreso
 * de la sección, con slow-zoom mientras está activa.
 */
function StackImage({
	src,
	progress,
	index,
	total,
}: {
	src: string;
	progress: MotionValue<number>;
	index: number;
	total: number;
}) {
	const a = index / total;
	const b = (index + 1) / total;
	const isFirst = index === 0;
	const isLast = index === total - 1;

	const input = isFirst
		? [0, b - 0.06, b + 0.02]
		: isLast
			? [a, Math.min(0.999, a + 0.08)]
			: [Math.max(0, a - 0.02), a + 0.06, b - 0.06, b + 0.02];
	const output = isFirst ? [1, 1, 0] : isLast ? [0, 1] : [0, 1, 1, 0];

	const opacity = useTransform(progress, input, output);
	const scale = useTransform(progress, [a, b], [1.12, 1]);

	return (
		<motion.div
			className="absolute inset-0 will-change-transform"
			style={{ opacity }}
			aria-hidden
		>
			<motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
			</motion.div>
		</motion.div>
	);
}

/**
 * Soluciones con imagen editorial: en desktop, el visual sticky hace
 * crossfade entre las cuatro soluciones mientras el texto avanza;
 * en mobile, cada bloque lleva su propia imagen.
 */
export default function HomeSolutions() {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});
	const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
	const total = SOLUTIONS.length;

	return (
		<section
			ref={ref}
			aria-labelledby="soluciones"
			className="border-y border-midnight/10 bg-lightgrey text-midnight"
		>
			<Container className="grid gap-4 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10">
				<div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:sticky lg:top-0 lg:h-svh lg:px-0 lg:py-8">
					<Eyebrow light>03 — Soluciones</Eyebrow>

					{/* Visual sticky con crossfade (desktop) */}
					<div className="relative mt-6 hidden aspect-[16/10] w-[80%] overflow-hidden rounded-3xl ring-1 ring-inset ring-lightgrey/10 lg:block">
						{SOLUTIONS.map((s, i) => (
							<StackImage
								key={s.slug}
								src={s.image}
								progress={scrollYProgress}
								index={i}
								total={total}
							/>
						))}
						<span className="absolute bottom-4 left-5 z-10 text-[11px] uppercase tracking-[0.28em] text-lightgrey/85">
							Graphics Impresos — Producción
						</span>
						<div className="absolute inset-0 z-10 bg-gradient-to-t from-midnight/55 via-transparent to-transparent" />
					</div>

					<h2
						id="soluciones"
						className="mt-6 font-display text-4xl font-medium uppercase leading-[1.02] tracking-tight text-midnight sm:text-5xl lg:text-6xl"
					>
						<Lines lines={["Soluciones gráficas", "para cada necesidad."]} />
					</h2>
					<Reveal delay={0.12}>
						<p className="mt-4 max-w-md text-[15px] leading-relaxed text-midnight/70">
							Creamos y producimos soluciones gráficas personalizadas para
							diferentes necesidades de comunicación.
						</p>
					</Reveal>
					<Reveal delay={0.18} className="mt-5">
						<CTA href="/soluciones" variant="dark">
							Ver todas las soluciones
						</CTA>
					</Reveal>
					<div
						className="mt-8 hidden h-px w-full bg-midnight/15 lg:block"
						aria-hidden
					>
						<motion.div
							className="h-full w-full origin-left bg-mint will-change-transform"
							style={{ scaleX }}
						/>
					</div>
				</div>

				<div className="px-5 pb-16 sm:px-10 lg:px-0 lg:py-10">
					{SOLUTIONS.map((s) => (
						<div
							key={s.slug}
							className="flex min-h-[52svh] flex-col justify-center gap-6 border-t border-midnight/15 py-10 last:border-b lg:min-h-[86svh]"
						>
							{/* Imagen por bloque (solo mobile) */}
							<ImageReveal
								src={s.image}
								alt={`${s.title} — Graphics Impresos`}
								ratio="aspect-[16/10]"
								className="rounded-2xl lg:hidden"
							/>
							<Reveal>
								<span className="font-display text-sm tracking-[0.2em] text-mint [filter:saturate(1.4)_brightness(0.72)]">
									/ {s.n}
								</span>
								<p className="mt-3 font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight text-midnight sm:text-6xl">
									{s.title}
								</p>
								<p className="mt-4 max-w-md leading-relaxed text-midnight/70 sm:text-lg">
									{s.description}
								</p>
								<Link
									href="/soluciones"
									aria-label={`${s.title} — ver en Soluciones`}
									className="group mt-6 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-midnight/85 transition-colors hover:text-mint"
								>
									<span className="border-b border-midnight/25 pb-1 transition-colors group-hover:border-mint">
										Explorar
									</span>
									<ArrowUpRight
										className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
										aria-hidden
									/>
								</Link>
							</Reveal>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
