"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Indicador minimalista del progreso total del dossier. Solo /presentacion. */
export default function ProgressRail() {
	const { scrollYProgress } = useScroll();
	const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

	return (
		<div
			className="pointer-events-none fixed bottom-6 left-4 z-40 hidden flex-col items-center gap-2 sm:flex"
			aria-hidden
		>
			<span className="text-[10px] tracking-[0.24em] text-lightgrey/50">01</span>
			<span className="relative block h-20 w-px overflow-hidden bg-lightgrey/15">
				<motion.span
					className="absolute inset-0 origin-top bg-mint will-change-transform"
					style={{ scaleY: fill }}
				/>
			</span>
			<span className="text-[10px] tracking-[0.24em] text-lightgrey/50">07</span>
		</div>
	);
}
