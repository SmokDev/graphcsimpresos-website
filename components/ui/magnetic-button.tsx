"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export function MagneticButton({
	href,
	children,
	variant = "mint",
	className,
}: {
	href: string;
	children: React.ReactNode;
	variant?: "mint" | "dark" | "ghost";
	className?: string;
}) {
	const ref = useRef<HTMLAnchorElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, { stiffness: 260, damping: 20 });
	const sy = useSpring(y, { stiffness: 260, damping: 20 });

	const onMove = (e: React.MouseEvent) => {
		const r = ref.current?.getBoundingClientRect();
		if (!r) return;
		x.set((e.clientX - (r.left + r.width / 2)) * 0.24);
		y.set((e.clientY - (r.top + r.height / 2)) * 0.32);
	};
	const onLeave = () => {
		x.set(0);
		y.set(0);
	};

	const base =
		variant === "mint"
			? "bg-mint text-midnight hover:bg-lightgrey"
			: variant === "dark"
				? "bg-midnight text-lightgrey border border-lightgrey/15 hover:bg-lightgrey hover:text-midnight"
				: "bg-transparent text-lightgrey border border-lightgrey/20 hover:border-mint hover:text-mint";

	return (
		<motion.div style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-flex">
			<Link
				ref={ref}
				href={href}
				className={`inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold transition-colors ${base} ${className}`}
			>
				{children}
			</Link>
		</motion.div>
	);
}
