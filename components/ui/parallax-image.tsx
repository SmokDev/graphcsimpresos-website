import Image from "next/image";

export default function ParallaxImage({
	src,
	alt,
	...props
}: React.HTMLAttributes<HTMLDivElement> & { src: string; alt: string }) {
	const { className, ...rest } = props;
	return (
		<div
			className={`w-full h-auto relative overflow-hidden ${className}`}
			{...rest}
		>
			<Image
				src={src}
				alt={alt}
				width={1920}
				height={1080}
				objectFit="cover"
				className="parallax-image object-cover w-full h-full"
			/>
		</div>
	);
}
import React from "react";
