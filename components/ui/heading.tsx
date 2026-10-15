import React from "react";
import { cn } from "@/utils/cn";

interface HeadingProps {
	children: React.ReactNode;
	level: 1 | 2 | 3 | 4 | 5 | 6;
	element?: React.ElementType;
}

/** Display heading — Poppins bold, uppercase, fluid sizes via clamp. */
export default function Heading({
	children,
	element,
	level,
	...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) {
	const { className, ...rest } = props;
	const sizes =
		level === 1
			? "text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95]"
			: level === 2
				? "text-[clamp(2rem,5.2vw,4.25rem)] leading-[1.02]"
				: level === 3
					? "text-[clamp(1.5rem,3.4vw,2.75rem)] leading-[1.08]"
					: level === 4
						? "text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug"
						: level === 5
							? "text-lg"
							: "text-base";

	const Tag: React.ElementType = element ?? (`h${level}` as React.ElementType);
	return (
		<Tag
			className={cn("font-display font-bold uppercase tracking-tight", sizes, className)}
			{...rest}
		>
			{children}
		</Tag>
	);
}
