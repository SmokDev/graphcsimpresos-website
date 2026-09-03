"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxImage({
	src,
	alt,
	strength = 40,
	...props
}: React.HTMLAttributes<HTMLDivElement> & { src: string; alt: string; strength?: number }) {
	const { className, ...rest } = props;
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
	const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

	return (
		<div ref={ref} className={`relative overflow-hidden ${className}`} {...rest}>
			<motion.div style={{ y, scale }} className="absolute inset-0">
				<Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
			</motion.div>
		</div>
	);
}
