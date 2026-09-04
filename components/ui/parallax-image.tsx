"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { cn } from "@/utils/cn";

/** GPU-friendly scroll parallax image (transform-only, no layout thrash). */
export default function ParallaxImage({
	src,
	alt,
	className,
	imgClassName,
	eager = false,
	strength = 0.12,
}: {
	src: string;
	alt: string;
	className?: string;
	imgClassName?: string;
	eager?: boolean;
	strength?: number;
}) {
	const reduce = usePrefersReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const y = useTransform(
		scrollYProgress,
		[0, 1],
		reduce ? ["0%", "0%"] : [`${-strength * 100}%`, `${strength * 100}%`]
	);

	return (
		<div ref={ref} className={cn("relative h-full w-full overflow-hidden", className)}>
			<motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0 will-change-transform">
				<Image
					src={src}
					alt={alt}
					fill
					loading={eager ? "eager" : "lazy"}
					priority={eager}
					sizes="(max-width: 768px) 100vw, 60vw"
					className={cn("object-cover", imgClassName)}
				/>
			</motion.div>
		</div>
	);
}
