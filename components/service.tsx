import Image from "next/image";
import Heading from "./ui/heading";
import Link from "next/link";
import ParallaxImage from "./ui/parallax-image";

interface ServiceProps {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	href?: string;
}

export function ServiceThumb({
	title,
	description,
	imageSrc,
	imageAlt,
	href = "/soluciones",
	...props
}: ServiceProps & React.HTMLAttributes<HTMLAnchorElement>) {
	return (
		<Link
			className="w-full h-100 relative flex overflow-hidden gris text-foreground"
			href={href}
			{...props}
		>
			{/* background image */}
			<div className="absolute inset-0 z-0 w-full h-full">
				<Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" />
			</div>
			{/* overlay with gradient black from bottom to middle */}
			<div className="w-full h-full flex flex-col items-start justify-end z-10 text-center p-8 bg-gradient-to-t from-black/70 via-black/30 to-transparent hover:backdrop-grayscale transition-all duration-200 ">
				<Heading level={4}>{title}</Heading>
				<p className="text-lg max-w-2xl">{description}</p>
			</div>
		</Link>
	);
}

interface ServiceSectionProps extends ServiceProps {
	number: string;
}

export function ServiceSection({
	title,
	description,
	number,
	imageSrc,
	imageAlt,
	...props
}: React.HTMLAttributes<HTMLDivElement> & ServiceSectionProps) {
	const { className, ...rest } = props;
	return (
		<div
			className={`group dorado odd:text-right  odd:items-end even:items-start w-full h-180 relative flex flex-col overflow-hidden ${className}`}
			{...rest}
		>
			<div className="absolute z-0 w-full h-full pointer-events-none">
				<ParallaxImage
					className="w-full h-full"
					src={imageSrc}
					alt={imageAlt}
				/>
			</div>
			<div className="w-150 h-full flex flex-col z-10 relative">
				<div className="group-odd:items-end group-even:items-start w-full text-lg flex justify-between flex-col flex-grow text-foreground bg-base/80 backdrop-blur-md  px-15 py-20 gap-4 relative">
					<span
						className="text-9xl text-bold [-webkit-text-stroke:1px_white]
           [-webkit-text-fill-color:transparent]"
					>
						{number}
					</span>
					<Heading level={3}>{title}</Heading>
				</div>
				<div className="desc blanco text-foreground bg-base w-full px-10 py-15 flex flex-col justify-center text-lg group-odd:items-end group-even:items-start">
					{description}
				</div>
			</div>
		</div>
	);
}
