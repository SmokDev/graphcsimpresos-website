"use client";

import { motion } from "motion/react";

export function Reveal({
	children,
	delay = 0,
	y = 24,
	duration = 0.7,
	className,
}: {
	children: React.ReactNode;
	delay?: number;
	y?: number;
	duration?: number;
	className?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function Stagger({
	children,
	stagger = 0.08,
	className,
}: {
	children: React.ReactNode;
	stagger?: number;
	className?: string;
}) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-60px" }}
			variants={{
				hidden: {},
				visible: { transition: { staggerChildren: stagger } },
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 18 },
				visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function LineReveal({ className }: { className?: string }) {
	return (
		<motion.div
			initial={{ scaleX: 0 }}
			whileInView={{ scaleX: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			style={{ transformOrigin: "left" }}
			className={className}
		/>
	);
}
