"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";
import { cn } from "@/utils/cn";

/* ------------------------------ Horizontal drift ---------------------------- */
/** Slow lateral movement driven by scroll — typographic bands, giant numbers. */
export function Drift({
	children,
	from = "3%",
	to = "-18%",
	className,
	innerClassName,
}: {
	children: React.ReactNode;
	from?: string;
	to?: string;
	className?: string;
	innerClassName?: string;
}) {
	const reduce = usePrefersReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const x = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : [from, to]);
	return (
		<div ref={ref} className={cn("overflow-hidden", className)}>
			<motion.div style={{ x }} className={cn("w-max will-change-transform", innerClassName)}>
				{children}
			</motion.div>
		</div>
	);
}

/* ------------------------------- Scale viewport ----------------------------- */
/** WOW 01 — image starts ~70% and grows to full-bleed while scrolling. */
export function ScaleViewport({
	src,
	alt,
	caption,
	objectPosition = "center",
}: {
	src: string;
	alt: string;
	caption?: string;
	objectPosition?: string;
}) {
	const reduce = usePrefersReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const range: [number, number] = [0.08, 0.85];
	const scale = useTransform(scrollYProgress, range, reduce ? [1, 1] : [0.7, 1]);
	const radius = useTransform(scrollYProgress, range, reduce ? [0, 0] : [28, 0]);
	const captionOpacity = useTransform(scrollYProgress, [0.62, 0.85], [0, 1]);
	const imgScale = useTransform(scrollYProgress, range, reduce ? [1, 1] : [1.22, 1.05]);

	return (
		<div ref={ref} className="relative h-[190svh] bg-midnight">
			<div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
				<motion.div
					style={{ scale }}
					className="relative h-[74svh] w-full will-change-transform"
				>
					<motion.div
						style={{ borderRadius: radius }}
						className="relative h-full w-full overflow-hidden will-change-transform"
					>
						<motion.div style={{ scale: imgScale }} className="absolute inset-0 will-change-transform">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={src}
								alt={alt}
								loading="lazy"
								decoding="async"
								className="h-full w-full object-cover"
								style={{ objectPosition }}
							/>
						</motion.div>
						<div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-midnight/20" />
						{caption && (
							<motion.p
								style={{ opacity: captionOpacity }}
								className="absolute bottom-6 left-5 text-[11px] uppercase tracking-[0.3em] text-lightgrey/85 sm:bottom-10 sm:left-10"
							>
								{caption}
							</motion.p>
						)}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

/* --------------------------------- Clip open -------------------------------- */
/** Image opens from a tight crop to full frame, driven by scroll. */
export function ClipOpen({
	src,
	alt,
	className,
	imgClassName,
	objectPosition = "center",
	from = 16,
	to = 0,
}: {
	src: string;
	alt: string;
	className?: string;
	imgClassName?: string;
	objectPosition?: string;
	from?: number;
	to?: number;
}) {
	const reduce = usePrefersReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const v = useTransform(
		scrollYProgress,
		[0, 1],
		reduce ? [to, to] : [from, to]
	);
	const clipPath = useMotionTemplate`inset(${v}% ${v}% ${v}% ${v}% round 20px)`;
	return (
		<div ref={ref} className={cn("relative overflow-hidden", className)}>
			<motion.div style={{ clipPath }} className="absolute inset-0 will-change-transform">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={src}
					alt={alt}
					loading="lazy"
					decoding="async"
					className={cn("h-full w-full object-cover", imgClassName)}
					style={{ objectPosition }}
				/>
			</motion.div>
		</div>
	);
}

/* ------------------------------- Rise on scroll ----------------------------- */
/** Opacity + rise driven by scroll progress — content surfacing. */
export function ScrollRise({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const reduce = usePrefersReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const opacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
	const y = useTransform(scrollYProgress, [0.05, 0.4], reduce ? [0, 0] : [56, 0]);
	return (
		<div ref={ref} className={className}>
			<motion.div style={{ opacity, y }} className="will-change-transform">
				{children}
			</motion.div>
		</div>
	);
}

/* -------------------------------- Word scrub ------------------------------ */
/** Paragraph that lights up word by word as you scroll — editorial scrub. */
function Word({
	children,
	progress,
	index,
	total,
}: {
	children: React.ReactNode;
	progress: ReturnType<typeof useScroll>["scrollYProgress"];
	index: number;
	total: number;
}) {
	const start = index / total;
	const end = Math.min(1, start + 1.6 / total);
	const opacity = useTransform(progress, [start, end], [0.13, 1]);
	return <motion.span style={{ opacity }}>{children} </motion.span>;
}

export function Words({
	text,
	className,
}: {
	text: string;
	className?: string;
}) {
	const ref = useRef<HTMLParagraphElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.95", "end 0.6"],
	});
	const words = text.split(" ");
	return (
		<p ref={ref} className={className}>
			{words.map((w, i) => (
				<Word key={i} progress={scrollYProgress} index={i} total={words.length}>
					{w}
				</Word>
			))}
		</p>
	);
}
