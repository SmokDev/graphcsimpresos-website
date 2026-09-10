"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
	motion,
	useInView,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useSpring,
} from "motion/react";
import type { MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/sections";
import { CTA } from "@/components/ui/button";
import { EASE, ImageReveal, Lines, Reveal } from "@/components/motion/reveal";
import { SOLUTIONS } from "@/utils/site";

type Solution = (typeof SOLUTIONS)[number];

/**
 * Imagen del stack sticky — fundido + asentamiento de escala
 * animados por Motion al activarse.
 */
function StackImage({ src, isActive }: { src: string; isActive: boolean }) {
	return (
		<motion.div
			className="absolute inset-0 will-change-transform"
			initial={false}
			animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.1 }}
			transition={{ duration: 0.85, ease: EASE }}
			aria-hidden
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={src}
				alt=""
				loading="eager"
				decoding="async"
				className="h-full w-full object-cover"
			/>
		</motion.div>
	);
}

/**
 * Bloque de solución — cuando entra al centro del viewport,
 * activa su imagen en el visual sticky.
 */
function SolutionBlock({
	s,
	index,
	active,
}: {
	s: Solution;
	index: number;
	active: MotionValue<number>;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { amount: 0.6 });

	useEffect(() => {
		if (inView) active.set(index);
	}, [inView, index, active]);

	return (
		<div
			ref={ref}
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
					href={`/soluciones#${s.slug}`}
					scroll={false}
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
	);
}

/**
 * Soluciones con imagen editorial: el visual sticky muestra SIEMPRE
 * la foto del bloque que estás leyendo (incluida la última, que se
 * queda fija); en mobile, cada bloque lleva su propia imagen.
 */
export default function HomeSolutions() {
	const ref = useRef<HTMLElement>(null);
	const active = useMotionValue(0);
	const [current, setCurrent] = useState(0);
	useMotionValueEvent(active, "change", (v) => {
		const rounded = Math.round(v);
		setCurrent((prev) => (prev === rounded ? prev : rounded));
	});
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});
	const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

	return (
		<section
			ref={ref}
			aria-labelledby="soluciones"
			className="border-y border-midnight/10 bg-lightgrey text-midnight"
		>
			<Container className="grid gap-4 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10">
				<div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:sticky lg:top-0 lg:h-svh lg:px-0 lg:py-8">
					<Eyebrow light>03 — Soluciones</Eyebrow>

					{/* Visual sticky (desktop) */}
					<div className="relative mt-6 hidden aspect-[16/10] w-[80%] overflow-hidden rounded-3xl ring-1 ring-inset ring-lightgrey/10 lg:block">
						{SOLUTIONS.map((s, i) => (
							<StackImage key={s.slug} src={s.image} isActive={current === i} />
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
					{SOLUTIONS.map((s, i) => (
						<SolutionBlock key={s.slug} s={s} index={i} active={active} />
					))}
				</div>
			</Container>
		</section>
	);
}
