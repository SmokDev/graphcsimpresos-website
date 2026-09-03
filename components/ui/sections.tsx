import ParallaxImage from "./parallax-image";
import Image from "next/image";

export function Section(props: React.HTMLAttributes<HTMLDivElement>) {
	const { className, ...rest } = props;
	return (
		<div
			className={`mint bg-base text-foreground w-full flex flex-col items-center justify-center py-20 p-15 md:py-40 md:px-25 ${className}`}
			{...rest}
		>
			<div className="flex max-w-full sm:max-w-4xl flex-col gap-5 text-center">
				{props.children}
			</div>
		</div>
	);
}

interface HeroProps {
	background?: React.ReactNode;
	useAltBackground?: boolean;
}

export function HeroSection(
	props: React.HTMLAttributes<HTMLDivElement> & HeroProps
) {
	const { children, className, background, useAltBackground, ...rest } = props;

	const bgSrc = useAltBackground ? "/background%202.webp" : "/background.webp";

	const defaultBackground = (
		<div className="w-full h-full relative">
			<Image
				src={bgSrc}
				alt="Graphics Impresos background"
				fill
				priority
				className="object-cover"
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-midnight/75" />
			<div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
		</div>
	);

	return (
		<div
			className={`w-full h-80 sm:h-110 md:h-150 sticky top-0 p-6 sm:p-15 md:p-25 flex flex-col items-start justify-end -z-10 midnight text-foreground ${className}`}
			{...rest}
		>
			<div className="absolute inset-0 -z-10">
				{background || defaultBackground}
			</div>

			<h1 className="text-5xl sm:text-6xl md:text-8xl uppercase font-medium text-lightgrey">
				{children}
			</h1>
		</div>
	);
}

export function HeroDescSection(props: React.HTMLAttributes<HTMLDivElement>) {
	const { children, className, ...rest } = props;
	return (
		<div
			className={`w-full solid midnight px-4 py-10 sm:px-25 sm:py-30 flex flex-col items-end justify-center ${className}`}
			{...rest}
		>
			<p className="text-lg sm:text-3xl text-right w-full max-w-full sm:max-w-3xl text-lightgrey">
				{children}
			</p>
		</div>
	);
}

interface ImageBluredSectionProps {
	imageSrc: string;
	imageAlt: string;
}

export function ImageBluredSection({
	imageSrc,
	imageAlt,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement> & ImageBluredSectionProps) {
	const { className, ...rest } = props;
	return (
		<div
			className={`mint w-full h-auto md:h-120 lg:h-150 xl:h-200 relative flex flex-col md:flex-row overflow-hidden ${className}`}
			{...rest}
		>
			<div className="md:absolute z-0 w-full h-100 md:h-full pointer-events-none">
				<ParallaxImage
					className="w-full h-full"
					src={imageSrc}
					alt={imageAlt}
				/>
			</div>
			<div className="w-full md:w-1/2 xl:w-150 h-auto sm:text-lg flex items-center justify-center z-10 flex-col text-foreground bg-base md:bg-base/80 p-15 sm:px-15 sm:py-25 text-center gap-4 relative backdrop-blur-md">
				{children}
			</div>
		</div>
	);
}

interface ImageSectionProps {
	imageSrc: string;
	imageAlt: string;
}

export function ImageInfoSection({
	imageSrc,
	imageAlt,
	className,
	children,
	...props
}: ImageSectionProps & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={`w-full lightgrey z-10 h-auto md:h-120 lg:h-180 relative flex flex-col md:flex-row odd:md:flex-row-reverse  text-foreground bg-base ${className}`}
			{...props}
		>
			<div className="w-full md:w-1/2 lg:w-200 h-auto flex items-center justify-center flex-col text-foreground bg-base px-15 py-15 md:px-25 sm:py-20 text-center gap-4 relative">
				{children}
			</div>
			<div className=" h-auto w-full md:flex-grow">
				<ParallaxImage
					className="w-full h-auto md:h-full"
					src={imageSrc}
					alt={imageAlt}
				/>
			</div>
		</div>
	);
}
