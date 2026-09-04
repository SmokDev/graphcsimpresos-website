"use client";

import {
	motion,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type MotionTagName = "div" | "span" | "li" | "p" | "h1" | "h2";

const tag = (name: MotionTagName) =>
	(motion as unknown as Record<MotionTagName, typeof motion.div>)[name];

/* ---------------------------------- Reveal --------------------------------- */

export function Reveal({
	children,
	delay = 0,
	y = 28,
	className,
	once = true,
	as = "div",
}: {
	children: React.ReactNode;
	delay?: number;
	y?: number;
	className?: string;
	once?: boolean;
	as?: "div" | "span" | "li" | "p";
}) {
	const reduce = usePrefersReducedMotion();
	const Tag = tag(as);
	return (
		<Tag
			className={className}
			initial={{ opacity: 0, y: reduce ? 0 : y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once, margin: "-12% 0px" }}
			transition={{ duration: 0.9, delay, ease: EASE }}
		>
			{children}
		</Tag>
	);
}

/* ------------------------------- Line reveal ------------------------------- */
/** Masked line-by-line text reveal — editorial, cinematic. */
export function Lines({
	lines,
	className,
	lineClassName,
	delay = 0,
	as = "span",
}: {
	lines: React.ReactNode[];
	className?: string;
	lineClassName?: string;
	delay?: number;
	as?: "span" | "h1" | "h2" | "p";
}) {
	const reduce = usePrefersReducedMotion();
	const MotionTag = tag(as);
	return (
		<MotionTag
			className={cn("block", className)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-10% 0px" }}
			variants={{
				hidden: {},
				show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
			}}
		>
			{lines.map((line, i) => (
				<span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
					<motion.span
						className={cn("block will-change-transform", lineClassName)}
						variants={{
							hidden: { y: reduce ? "0%" : "110%", opacity: reduce ? 0 : 1 },
							show: {
								y: "0%",
								opacity: 1,
								transition: { duration: 0.9, ease: EASE },
							},
						}}
					>
						{line}
					</motion.span>
				</span>
			))}
		</MotionTag>
	);
}

/* ------------------------------- Image reveal ------------------------------ */

export function ImageReveal({
	src,
	alt,
	className,
	imgClassName,
	ratio = "aspect-[16/10]",
	eager = false,
}: {
	src: string;
	alt: string;
	className?: string;
	imgClassName?: string;
	ratio?: string;
	eager?: boolean;
}) {
	const reduce = usePrefersReducedMotion();
	return (
		<div className={cn("relative overflow-hidden", ratio, className)}>
			<motion.div
				className="absolute inset-0"
				initial={{ scale: reduce ? 1 : 1.18 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true, margin: "-10% 0px" }}
				transition={{ duration: 1.4, ease: EASE }}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={src}
					alt={alt}
					loading={eager ? "eager" : "lazy"}
					decoding="async"
					className={cn(
						"h-full w-full object-cover will-change-transform",
						imgClassName
					)}
				/>
			</motion.div>
			{/* clip wipe */}
			{!reduce && (
				<motion.div
					className="absolute inset-0 bg-midnight pointer-events-none"
					initial={{ scaleY: 1 }}
					whileInView={{ scaleY: 0 }}
					viewport={{ once: true, margin: "-10% 0px" }}
					style={{ transformOrigin: "top" }}
					transition={{ duration: 1.1, ease: EASE }}
				/>
			)}
			<div className="absolute inset-0 ring-1 ring-inset ring-lightgrey/10 pointer-events-none" />
		</div>
	);
}

/* --------------------------------- Parallax -------------------------------- */

export function Parallax({
	children,
	speed = 0.12,
	className,
}: {
	children: React.ReactNode;
	speed?: number;
	className?: string;
}) {
	const reduce = usePrefersReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const range: [string, string] = reduce
		? ["0%", "0%"]
		: [`${-speed * 100}%`, `${speed * 100}%`];
	const y = useTransform(scrollYProgress, [0, 1], range);
	return (
		<div ref={ref} className={cn("overflow-hidden", className)}>
			<motion.div style={{ y }} className="h-full w-full will-change-transform">
				{children}
			</motion.div>
		</div>
	);
}

/* --------------------------------- Counter --------------------------------- */

export function Counter({
	to,
	suffix = "",
	prefix = "",
	className,
	duration = 1.8,
}: {
	to: number;
	suffix?: string;
	prefix?: string;
	className?: string;
	duration?: number;
}) {
	const reduce = usePrefersReducedMotion();
	const ref = useRef<HTMLSpanElement>(null);
	const [val, setVal] = useState(0);
	const started = useRef(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !started.current) {
					started.current = true;
					if (reduce) {
						setVal(to);
						return;
					}
					const t0 = performance.now();
					const tick = (t: number) => {
						const p = Math.min(1, (t - t0) / (duration * 1000));
						const eased = 1 - Math.pow(1 - p, 4);
						setVal(Math.round(eased * to));
						if (p < 1) requestAnimationFrame(tick);
					};
					requestAnimationFrame(tick);
				}
			},
			{ threshold: 0.4 }
		);
		io.observe(el);
		return () => io.disconnect();
	}, [to, duration, reduce]);

	return (
		<span ref={ref} className={className}>
			{prefix}
			{val}
			{suffix}
		</span>
	);
}

/* --------------------------------- Marquee --------------------------------- */

export function Marquee({
	children,
	className,
	speed = 28,
}: {
	children: React.ReactNode;
	className?: string;
	speed?: number;
}) {
	const reduce = usePrefersReducedMotion();
	if (reduce) {
		return (
			<div className={cn("overflow-hidden", className)}>
				<div className="flex w-max gap-8">{children}</div>
			</div>
		);
	}
	return (
		<div className={cn("overflow-hidden", className)}>
			<motion.div
				className="flex w-max gap-8 will-change-transform"
				animate={{ x: ["0%", "-50%"] }}
				transition={{ duration: speed, ease: "linear", repeat: Infinity }}
			>
				{children}
				{children}
			</motion.div>
		</div>
	);
}

/* ------------------------------ Scroll progress ----------------------------- */

export function ScrollProgress({ className }: { className?: string }) {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 24,
		mass: 0.4,
	});
	return (
		<motion.div
			className={cn("origin-left bg-mint", className)}
			style={{ scaleX }}
			aria-hidden
		/>
	);
}

export { EASE };
