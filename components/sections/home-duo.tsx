"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Container } from "@/components/ui/sections";
import { Counter, Reveal } from "@/components/motion/reveal";

export interface DuoConcept {
	n: string;
	title: string;
	copy: string;
}

/**
 * WOW 02 — sticky `25+` a la izquierda con riel de progreso ligado al
 * scroll; a la derecha, los conceptos se revelan al avanzar.
 */
export default function HomeDuo({ concepts }: { concepts: DuoConcept[] }) {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});
	const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

	return (
		<section
			ref={ref}
			aria-label="Trayectoria en conceptos"
			className="border-y border-lightgrey/10 bg-midnight-deep/60"
		>
			<Container className="grid gap-4 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10">
				<div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:sticky lg:top-0 lg:h-svh lg:px-0 lg:py-0">
					<Reveal>
						<p className="font-display leading-none">
							<Counter
								to={25}
								suffix="+"
								className="text-[clamp(7rem,20vw,14rem)] font-medium text-mint"
							/>
							<span className="mt-3 block text-[11px] uppercase tracking-[0.3em] text-lightgrey/60">
								años — trayectoria
							</span>
						</p>
					</Reveal>
					<div
						className="mt-10 hidden h-px w-full bg-lightgrey/15 lg:block"
						aria-hidden
					>
						<motion.div
							className="h-full w-full origin-left bg-mint will-change-transform"
							style={{ scaleX }}
						/>
					</div>
				</div>
				<div className="px-5 pb-16 sm:px-10 lg:px-0 lg:py-10">
					{concepts.map((c) => (
						<div
							key={c.n}
							className="flex min-h-[52svh] flex-col justify-center border-t border-lightgrey/10 py-10 last:border-b lg:min-h-[86svh]"
						>
							<Reveal>
								<span className="font-display text-sm tracking-[0.2em] text-mint">
									/ {c.n}
								</span>
								<p className="mt-3 font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-7xl">
									{c.title}
								</p>
								<p className="mt-4 max-w-md leading-relaxed text-lightgrey/70 sm:text-lg">
									{c.copy}
								</p>
							</Reveal>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
