"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { TextLink } from "@/components/ui/button";
import { EASE } from "@/components/motion/reveal";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

export interface StageSolution {
	href: string;
	n: string;
	title: string;
	copy: string;
	image: string;
	alt: string;
}

function BgImage({ src, alt, isActive }: { src: string; alt: string; isActive: boolean }) {
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
				alt={alt}
				loading="eager"
				decoding="async"
				className="h-full w-full object-cover"
			/>
		</motion.div>
	);
}

function twoLines(title: string): [string, string] {
	const words = title.split(" ");
	if (words.length === 1) return [title, ""];
	const mid = Math.ceil(words.length / 2);
	return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

function Panel({
	s,
	index,
	active,
}: {
	s: StageSolution;
	index: number;
	active: ReturnType<typeof useMotionValue<number>>;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { amount: 0.7 });

	useEffect(() => {
		if (inView) active.set(index);
	}, [inView, index, active]);

	return (
		<div ref={ref} className="relative flex h-svh w-screen shrink-0 items-end overflow-hidden">
			<div className="mx-auto flex w-full max-w-7xl items-end gap-6 px-5 pb-24 text-left sm:gap-10 sm:px-10 sm:pb-28">
				<span
					aria-hidden
					className="shrink-0 select-none font-display text-[17vw] font-medium leading-[0.85] text-outline sm:text-[11vw]"
				>
					{s.n}
				</span>
				<div className="min-w-0">
					<h2 className="max-w-4xl font-display text-[10vw] font-bold uppercase leading-[0.93] tracking-tight sm:text-6xl lg:text-7xl">
						{twoLines(s.title)[0]}
						{twoLines(s.title)[1] ? (
							<>
								<br />
								{twoLines(s.title)[1]}
							</>
						) : null}
					</h2>
					<p className="mt-4 max-w-xl text-base leading-relaxed text-lightgrey/85 sm:text-lg">
						{s.copy}
					</p>
					<TextLink href={s.href} className="mt-6" aria-label={`Explorar ${s.title}`}>Explorar productos y opciones</TextLink>
				</div>
			</div>
		</div>
	);
}

/**
 * ESCENA 05 — SOLUCIONES. Fondo fijo que cambia por solución;
 * travelling horizontal con la información abajo a la izquierda.
 */
export default function SolutionsScene({ items }: { items: StageSolution[] }) {
	const reduce = usePrefersReducedMotion();
	const ref = useRef<HTMLElement>(null);
	const active = useMotionValue(0);
	const [current, setCurrent] = useState(0);
	useMotionValueEvent(active, "change", (v) => {
		const rounded = Math.round(v);
		setCurrent((prev) => (prev === rounded ? prev : rounded));
	});
	const { scrollYProgress: p } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});
	const x = useTransform(p, [0, 1], reduce ? ["0%", "0%"] : ["0%", `-${((items.length - 1) / items.length) * 100}%`]);
	const bar = useTransform(p, [0, 1], [0, 1]);
	// Zoom lento continuo + parallax agresivo de entrada y salida.
	const bgZoom = useTransform(p, [0, 1], reduce ? [1, 1] : [1.12, 1]);
	const { scrollYProgress: exitP } = useScroll({
		target: ref,
		offset: ["end end", "end start"],
	});
	// Desplazamiento de entrada exclusivo: corre mientras la escena
	// va entrando al scroll (start end → start start).
	const { scrollYProgress: enterP } = useScroll({
		target: ref,
		offset: ["start end", "start start"],
	});
	const bgY = useTransform([enterP, exitP], ([v, e]: number[]) => {
		if (reduce) return 0;
		const entry = -110 * (1 - v);
		return entry + e * 220;
	});

	if (reduce) {
		return (
			<section aria-label="Escena 5 — Soluciones" className="bg-midnight">
				{items.map((s, i) => (
					<div key={s.n} className="relative isolate overflow-hidden">
						<BgImage src={s.image} alt={s.alt} isActive />
						<div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" aria-hidden />
						<Panel s={s} index={i} active={active} />
					</div>
				))}
			</section>
		);
	}

	return (
		<section ref={ref} aria-label="Escena 5 — Soluciones" className="relative bg-midnight" style={{ height: `${items.length * 110}svh` }}>
			<div className="sticky top-0 h-svh overflow-hidden">
				<motion.div style={{ scale: bgZoom, y: bgY }} className="absolute inset-0 will-change-transform">
					{items.map((s, i) => (
						<BgImage key={s.n} src={s.image} alt={s.alt} isActive={current === i} />
					))}
				</motion.div>
				<div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-midnight to-transparent" aria-hidden />
				<div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/25 to-transparent" aria-hidden />

				<p className="absolute left-5 top-24 z-10 text-[11px] uppercase tracking-[0.3em] text-mint sm:left-10">
					Soluciones
				</p>

				<motion.div style={{ x, width: `${items.length * 100}vw` }} className="absolute inset-0 flex will-change-transform">
					{items.map((s, i) => (
						<Panel key={s.n} s={s} index={i} active={active} />
					))}
				</motion.div>

				<div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-7xl px-5 pb-10 sm:px-10">
					<div className="h-px w-full bg-lightgrey/15" aria-hidden>
						<motion.div
							className="h-full origin-left bg-mint will-change-transform"
							style={{ scaleX: bar }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
