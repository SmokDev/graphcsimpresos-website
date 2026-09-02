import React from "react";

interface HeadingProps {
	children: React.ReactNode;
	level: 1 | 2 | 3 | 4 | 5 | 6;
	element?: React.ElementType;
}

export default function Heading({
	children,
	element,
	level,
	...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) {
	const { className, ...rest } = props;
	const textSizeClass =
		level === 1
			? "text-7xl"
			: level === 2
				? "text-6xl"
				: level === 3
					? "text-5xl"
					: level === 4
						? "text-4xl"
						: level === 5
							? "text-3xl"
							: "text-base";

	const Tag: React.ElementType = element ?? (`h${level}` as React.ElementType);
	return (
		<Tag
			className={`${textSizeClass} font-medium uppercase ${className}`}
			{...rest}
		>
			{children}
		</Tag>
	);
}
