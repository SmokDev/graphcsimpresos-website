import Image from "next/image";
import { cn } from "@/utils/cn";
import { Lines, Parallax } from "@/components/motion/reveal";

/* -------------------------------- Container -------------------------------- */

export function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-10", className)}>
			{children}
		</div>
	);
}

/* --------------------------------- Eyebrow --------------------------------- */

export function Eyebrow({
	children,
	className,
	light = false,
}: {
	children: React.ReactNode;
	className?: string;
	light?: boolean;
}) {
	return (
		<p
			className={cn(
				"mb-5 flex items-center gap-3 text-[11px] font-normal uppercase tracking-[0.3em]",
				light ? "text-midnight/60" : "text-mint",
				className
			)}
		>
			<span aria-hidden className={cn("h-px w-8", light ? "bg-midnight/40" : "bg-mint")} />
			{children}
		</p>
	);
}

/* --------------------------------- Section --------------------------------- */
/** Generic padded wrapper — keeps the `Section` API, drops forced centering. */

export function Section(props: React.HTMLAttributes<HTMLElement>) {
	const { className, ...rest } = props;
	return (
		<section
			className={cn("relative w-full bg-midnight py-20 text-lightgrey sm:py-28 lg:py-36", className)}
			{...rest}
		/>
	);
}

/* ------------------------------- Hero (reuse) ------------------------------ */
/**
 * Reused `HeroSection` — same export + props (`background`, `useAltBackground`)
 * so existing usage keeps working. Now: full-viewport editorial hero with
 * kicker, masked headline reveal, meta row and scroll parallax.
 */

interface HeroProps {
	background?: React.ReactNode;
	useAltBackground?: boolean;
	kicker?: string;
	sub?: React.ReactNode;
	actions?: React.ReactNode;
	meta?: string[];
}

export function HeroSection(
	props: React.HTMLAttributes<HTMLDivElement> & HeroProps
) {
	const {
		children,
		className,
		background,
		useAltBackground,
		kicker,
		sub,
		actions,
		meta,
		...rest
	} = props;

	const bgSrc = useAltBackground ? "/background%202.webp" : "/background.webp";

	const defaultBackground = (
		<div className="relative h-full w-full">
			<Parallax speed={0.14} className="h-full w-full">
				<Image
					src={bgSrc}
					alt=""
					aria-hidden
					fill
					priority
					className="scale-110 object-cover"
					sizes="100vw"
				/>
			</Parallax>
			<div className="absolute inset-0 bg-midnight/45" />
			<div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />
		</div>
	);

	return (
		<div
			className={cn(
				"relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-midnight text-lightgrey",
				className
			)}
			{...rest}
		>
			<div className="absolute inset-0">{background || defaultBackground}</div>

			<div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 pb-14 pt-36 sm:px-10 sm:pb-20">
				{kicker && (
					<p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-mint">
						<span aria-hidden className="h-px w-10 bg-mint" />
						{kicker}
					</p>
				)}
				<h1 className="max-w-5xl font-display text-[13vw] font-medium uppercase leading-[0.95] tracking-tight text-lightgrey sm:text-7xl lg:text-8xl">
					<Lines lines={Array.isArray(children) ? children : [children]} />
				</h1>
				{sub && (
					<p className="max-w-xl text-base leading-relaxed text-lightgrey/80 sm:text-lg">
						{sub}
					</p>
				)}
				{actions && <div className="mt-2 flex flex-wrap items-center gap-3">{actions}</div>}
				{meta && meta.length > 0 && (
					<dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 border-t border-lightgrey/15 pt-6">
						{meta.map((m) => (
							<div key={m} className="text-[11px] uppercase tracking-[0.24em] text-lightgrey/60">
								{m}
							</div>
						))}
					</dl>
				)}
			</div>
		</div>
	);
}

export function HeroDescSection(props: React.HTMLAttributes<HTMLDivElement>) {
	const { children, className, ...rest } = props;
	return (
		<div
			className={cn(
				"midnight solid w-full px-5 py-10 sm:px-10 sm:py-16",
				className
			)}
			{...rest}
		>
			<Container className="flex justify-end px-0">
				<p className="w-full max-w-3xl text-right font-display text-xl font-light uppercase leading-snug text-lightgrey sm:text-3xl">
					{children}
				</p>
			</Container>
		</div>
	);
}

interface ImageBluredSectionProps {
	imageSrc: string;
	imageAlt: string;
}

/** Kept for API compatibility — now a clean asymmetric split with blur panel. */
export function ImageBluredSection({
	imageSrc,
	imageAlt,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement> & ImageBluredSectionProps) {
	const { className, ...rest } = props;
	return (
		<div
			className={cn(
				"relative flex h-auto w-full flex-col overflow-hidden md:h-[34rem] md:flex-row lg:h-[44rem]",
				className
			)}
			{...rest}
		>
			<div className="pointer-events-none relative h-72 w-full md:h-full md:w-full md:absolute md:inset-0">
				<Image src={imageSrc} alt={imageAlt} fill loading="lazy" sizes="100vw" className="object-cover" />
				<div className="absolute inset-0 bg-midnight/25" />
			</div>
			<Container className="relative z-10 flex items-center px-0">
				<div className="flex w-full flex-col gap-4 border border-lightgrey/10 bg-midnight/80 p-8 text-center backdrop-blur-xl sm:p-12 md:max-w-xl md:text-left">
					{children}
				</div>
			</Container>
		</div>
	);
}

interface ImageSectionProps {
	imageSrc: string;
	imageAlt: string;
}

/** Kept for API compatibility — asymmetric editorial split. */
export function ImageInfoSection({
	imageSrc,
	imageAlt,
	className,
	children,
	...props
}: ImageSectionProps & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"lightgrey bg-base relative z-10 flex h-auto w-full flex-col text-foreground md:h-[32rem] md:flex-row md:odd:flex-row-reverse lg:h-[40rem]",
				className
			)}
			{...props}
		>
			<div className="relative flex w-full flex-col justify-center gap-4 bg-base px-8 py-12 text-left sm:px-12 md:w-1/2">
				{children}
			</div>
			<div className="relative h-72 w-full md:h-full md:flex-1">
				<Image src={imageSrc} alt={imageAlt} fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
			</div>
		</div>
	);
}
