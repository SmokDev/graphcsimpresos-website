"use client";

import { motion } from "motion/react";
import { Reveal } from "./reveal";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
	return (
		<p className={`text-[11px] tracking-[0.24em] uppercase ${light ? "text-lightgrey/50" : "text-mint"}`}>{children}</p>
	);
}

export function SectionTitle({
	eyebrow,
	title,
	description,
	light = false,
	align = "left",
}: {
	eyebrow?: string;
	title: React.ReactNode;
	description?: React.ReactNode;
	light?: boolean;
	align?: "left" | "center";
}) {
	return (
		<div className={`${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
			{eyebrow && <Reveal><Eyebrow light={light}>{eyebrow}</Eyebrow></Reveal>}
			<Reveal delay={0.08}>
				<h2 className={`mt-4 text-[32px] md:text-[52px] leading-[0.95] tracking-[-0.04em] font-light ${light ? "text-lightgrey" : "text-midnight"}`}>
					{title}
				</h2>
			</Reveal>
			{description && (
				<Reveal delay={0.16}>
					<p className={`mt-6 text-sm md:text-[15px] leading-relaxed ${light ? "text-lightgrey/60" : "text-midnight/60"}`}>{description}</p>
				</Reveal>
			)}
			<motion.div
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
				style={{ transformOrigin: align === "center" ? "center" : "left" }}
				className={`mt-8 h-px w-16 ${light ? "bg-mint" : "bg-mint"}`}
			/>
		</div>
	);
}
