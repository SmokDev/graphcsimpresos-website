"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ParallaxImage from "./parallax-image";

export function Section(props: React.HTMLAttributes<HTMLDivElement>) {
	const { className, ...rest } = props;
	return (
		<div
			className={`mint bg-base text-foreground w-full flex flex-col items-center justify-center py-20 px-6 md:py-32 md:px-10 ${className}`}
			{...rest}
		>
			<div className="flex max-w-4xl flex-col gap-5 text-center">{props.children}</div>
		</div>
	);
}

interface HeroProps {
	background?: React.ReactNode;
	useAltBackground?: boolean;
	eyebrow?: string;
	kicker?: string;
	meta?: string;
}

export function HeroSection(props: React.HTMLAttributes<HTMLDivElement> & HeroProps) {
	const { children, className, background, useAltBackground, eyebrow, kicker, meta, ...rest } = props;
	const bgSrc = useAltBackground ? "/background%202.webp" : "/background.webp";

	const defaultBackground = (
		<div className="absolute inset-0">
			<Image src={bgSrc} alt="Graphics Impresos" fill priority className="object-cover" sizes="100vw" />
			<div className="absolute inset-0 bg-midnight/70" />
			<div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
			<div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `repeating-linear-gradient(90deg, transparent 0 120px, rgba(0,191,178,0.6) 120px 121px)` }} />
		</div>
	);

	return (
		<div
			className={`relative w-full min-h-[86vh] md:min-h-[88vh] bg-midnight text-lightgrey overflow-hidden flex flex-col justify-end ${className ?? ""}`}
			{...rest}
		>
			{background || defaultBackground}

			{/* top grid line */}
			<div className="pointer-events-none absolute inset-x-6 md:inset-x-10 top-[88px] h-px bg-lightgrey/10 hidden md:block" />

			<div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10 pb-10 md:pb-16 pt-28 md:pt-36">
				{/* meta row */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-wrap items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-lightgrey/50 mb-6 md:mb-10"
				>
					{eyebrow && <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-mint" /> {eyebrow}</span>}
					{kicker && <span className="hidden md:inline h-3 w-px bg-lightgrey/15" />}
					{kicker && <span>{kicker}</span>}
					{meta && <span className="ml-auto hidden md:inline-flex items-center gap-2 text-mint">○ {meta}</span>}
				</motion.div>

				<h1 className="text-[42px] md:text-[84px] lg:text-[92px] leading-[0.88] tracking-[-0.05em] font-light uppercase text-lightgrey">
					{children}
				</h1>

				{/* bottom bar */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-lightgrey/10 pt-6"
				>
					<div className="flex items-center gap-6 text-[11px] tracking-[0.16em] uppercase text-lightgrey/40">
						<span className="hidden md:inline">SCROLL</span>
						<span className="hidden md:block h-px w-12 bg-lightgrey/20" />
						<span>Materializamos marcas · Desde 1999</span>
					</div>
					<div className="flex items-center gap-3 text-lightgrey/60">
						<span className="size-8 rounded-full border border-lightgrey/15 grid place-items-center text-[10px]">↓</span>
						<span className="text-xs tracking-wide">Descubre</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export function HeroDescSection(props: React.HTMLAttributes<HTMLDivElement>) {
	const { children, className, ...rest } = props;
	return (
		<div className={`w-full bg-midnight px-6 md:px-10 py-12 md:py-20 flex flex-col items-end justify-center border-y border-lightgrey/10 ${className ?? ""}`} {...rest}>
			<p className="text-[18px] md:text-[28px] leading-[1.2] tracking-[-0.02em] text-right w-full max-w-3xl text-lightgrey/80">{children}</p>
		</div>
	);
}

interface ImageBluredSectionProps { imageSrc: string; imageAlt: string; }
export function ImageBluredSection({ imageSrc, imageAlt, children, ...props }: React.HTMLAttributes<HTMLDivElement> & ImageBluredSectionProps) {
	const { className, ...rest } = props;
	return (
		<div className={`mint w-full h-auto md:h-[520px] lg:h-[640px] relative flex flex-col md:flex-row overflow-hidden ${className ?? ""}`} {...rest}>
			<div className="md:absolute z-0 w-full h-[380px] md:h-full pointer-events-none">
				<ParallaxImage className="w-full h-full" src={imageSrc} alt={imageAlt} />
			</div>
			<div className="w-full md:w-1/2 lg:w-[560px] h-auto flex items-center justify-center z-10 flex-col text-foreground bg-base md:bg-base/80 backdrop-blur-md px-6 md:px-10 py-12 md:py-16 text-center gap-4 relative border md:border-lightgrey/10">
				{children}
			</div>
		</div>
	);
}

interface ImageSectionProps { imageSrc: string; imageAlt: string; }
export function ImageInfoSection({ imageSrc, imageAlt, className, children, ...props }: ImageSectionProps & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={`w-full lightgrey z-10 h-auto md:h-[520px] lg:h-[620px] relative flex flex-col md:flex-row odd:md:flex-row-reverse text-foreground bg-base border-y border-midnight/5 ${className ?? ""}`} {...props}>
			<div className="w-full md:w-1/2 lg:w-[520px] h-auto flex items-center justify-center flex-col text-foreground bg-base px-6 md:px-10 py-12 md:py-16 text-center gap-4 relative">
				{children}
			</div>
			<div className="h-[360px] md:h-auto w-full md:flex-1">
				<ParallaxImage className="w-full h-full" src={imageSrc} alt={imageAlt} />
			</div>
		</div>
	);
}
